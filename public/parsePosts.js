const fs = require('fs');
const path = require('path');
const metadataParser = require("markdown-yaml-metadata-parser");
const MarkdownIt = require("markdown-it");
const { parse } = require('path');

const postsRoot = 'posts/nested-posts';
const md = new MarkdownIt();

function removePreNum(sol) {
    let newSol = "", adding = 0;
    for (let i = 0; i < sol.length; i++) {
        if (!isNaN(sol[i]) || sol[i] == '-') {

        } else {
            adding = 1;
        }
        if (adding === 1) {
            newSol = newSol + sol[i];
        }
    }
    return newSol;
}

function cutPre(dir, nr) {
    let sol = "";
    for (let i = 0; i < dir.length; i++) {
        if (nr <= 0) {
            sol = sol + dir[i];
        }
        if (dir[i] === '/') {
            nr--;
        }
    }

    let newSol = "", curent = "";
    for (let i = 0; i < sol.length; i++) {
        if (sol[i] == '/') {
            newSol = newSol + removePreNum(curent);
            newSol += '/';
            curent = "";
        } else {
            curent += sol[i];
        }
    }
    newSol += removePreNum(curent);
    return newSol;
}
let nrOfRoots = 0;
function parsePost(dir) {
    return fs.promises.readdir(dir)
        .then((val) => {
            const url = "articole/" + cutPre(dir, 2);
            const contentList = val
                .filter((file) => path.extname(file) === '.md')
                .map((file) => {
                    return fs.promises.readFile(path.join(dir, file), { encoding: 'utf8' })
                        .then((text) => {
                            const { content, metadata } = metadataParser(text);
                            return {
                                url: url,
                                content: md.render(content),
                                metadata: metadata,
                            }
                        })
                });

            if (contentList.length > 0) {
                return {
                    url: url,
                    content: contentList[0],

                    kids: val
                        .filter((file => path.extname(file) !== '.md'))
                        .map((file) => parsePost(path.join(dir, file)))

                }
            } else {
                nrOfRoots++;
                if (nrOfRoots > 1) {
                    throw new Error('Too many roots, check if there are nonexistant categories');
                }
                return {
                    url: url,
                    content: null,

                    kids: val
                        .filter((file => path.extname(file) !== '.md'))
                        .map((file) => parsePost(path.join(dir, file)))

                }
            }


        })
}

let globalId = 0;

function resolveTree(tree) {
    return tree.then((tree) => {
        if (!Array.isArray(tree.kids)) {
            return tree.content.then((content) => {
                return {
                    url: tree.url,
                    content: content,
                    kids: [],
                    id: ++globalId,
                }
            })
        }
        return Promise.all([tree.content, ...tree.kids.map((node) => resolveTree(node))]).then((nodes) => {
            return {
                url: tree.url,
                content: nodes[0],
                kids: nodes.slice(1),
                id: ++globalId,
            }
        })
    })
}

function addAncestors(post, ancestors = []) {
    post.ancestors = ancestors;
    for (let i = 0; i < post.kids.length; i++) {
        addAncestors(post.kids[i], ancestors.concat(post.id));
    }
}
resolveTree(parsePost(postsRoot)).then((val) => {
    addAncestors(val);
    fs.writeFile('src/postsJSON.json', JSON.stringify(val), (err) => {
        if (err) {
            throw new Error(err);
        }
    });
})


function moveImagesToSrc(source, target) {

    if (fs.existsSync(target)) {
        fs.promises.readdir(source).then((dir) => {
            console.log('dir=', dir);
            dir.forEach((file) => {
                console.log('copying', source + '/' + file, target + '/' + file);
                fs.promises.copyFile(source + '/' + file, target + '/' + file);
            })
        })
    } else {
        fs.promises.mkdir(target).then(() => {
            fs.promises.readdir(source).then((dir) => {
                console.log('dir=', dir);
                dir.forEach((file) => {
                    console.log('copying', source + '/' + file, target + '/' + file);
                    fs.promises.copyFile(source + '/' + file, target + '/' + file);
                })
            })
        });
    }
}

moveImagesToSrc('public/images', 'src/images');