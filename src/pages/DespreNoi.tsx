import React from 'react'
import styled from 'styled-components'
import theme from '../global/theme'
import Container from '@mui/material/Container';
import DefaultLayout from "../layouts/DefaultLayout";
import Heading from '../components/Heading';
const StyledContainer = styled.div`
    margin-top : 25px;
    display : flex;
    font-size : 1.1rem;
    flex-direction : column;  
    font-size : 3rem;  
    align-items : center;
    h1 {
        border-bottom : 3px solid ${theme.darkTopBlue};
        padding-bottom : 10px;
        width:fit-content;
    }
    p {
        font-size: 1.2rem;
        color : ${theme.footerTextColor};
    }
`


const ProfileHolder = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`
const ProfileImage = styled.div`
    width : 250px;
    height : 250px;
    background-color : gray;
    border-radius : 50%;
`

const Team = styled.div`
    gap : 15px;
    display : flex;
    margin-bottom : 20px;
`
export default function DespreNoi() {
    return (
        <DefaultLayout hero={<Heading>Despre noi</Heading>}>
            <Container maxWidth='md'>
                <StyledContainer>
                    <h1>Scopul nostru</h1>
                    <p>Suntem un grup de elevi care doresc sa aduca schimbare in tara noastra prin promovarea educatiei civice. Scopul nostru este sa impartasim informatii si resurse extrem de importante pentru traitul in aceasta tara si sa crestem implicarea societala a tinerilor prin activitati cum ar fi vizite la parlament.</p>
                   { /*<h1>Echipa</h1>
                    <Team>
                        <ProfileHolder>
                            <ProfileImage></ProfileImage>
                            <p>
                                Salut, sunt Tudor! Sunt pasionat de informatica, arta si debate. Imi place sa creez website-uri si alte aplicatii in React si planuiesc sa studiez Computer Science.
                            </p>
                        </ProfileHolder>
                        <ProfileHolder>
                            <ProfileImage></ProfileImage>
                            <p>
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                            </p>
                        </ProfileHolder>
                    </Team>*/}
                </StyledContainer>
            </Container>
        </DefaultLayout>
    )
}
