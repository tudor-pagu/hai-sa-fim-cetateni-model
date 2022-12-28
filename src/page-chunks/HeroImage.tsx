import React from 'react'
import styled from 'styled-components';
import theme from '../global/theme';
import { useNavigate } from 'react-router-dom';
type Props = {
    children?: React.ReactNode;
    image: string;
    infoBoxes: InfoBoxContent[];
}

const FullContainer = styled.div`
  box-shadow: 0px 5px 15px -4px gray;
  margin-bottom : 100px;
`

const InfoContainer = styled.div`
    display : flex;
    flex-wrap : wrap;
    font-family : ${theme.logoFont};
`

const MyImage = styled.div<{ image: string }>`
    background-image: ${props => `url(${props.image})`};
    width : 100%;
    height : 85vh;
    background-size : cover;
    background-position : center;
    grid-column : 1/-1;
`

const Overlay = styled.div`
    background-color : rgba(32,88,223,0.4);
    height : 100%;
    width : 100%;
    position : abslute;
    display : flex;
    flex-direction : column;
    align-items : center;
`

const InfoBox = styled.div`
    text-align: center;
    background-color: ${theme.infoBoxBackgroundColor};
    color: ${theme.infoBoxTextColor};
    flex : 1;
    min-width : 200px;
    border-top : 6px solid ${props => props.color};
    height : 200px;
    transition : 0.7s;

    .mainText,.subText,.infoBox-icon {
        transition : 0.7s;
    }
    .infoBox-icon {
        color: ${theme.infoBoxIconColor};
        width: 60px;
        height: 60px;
    }
    .border-wrapper {
        padding-top : 15px;
         padding-bottom : 40px;
         border-right : 1px solid ${theme.infoBoxIconColor};
        border-left : 1px solid ${theme.backgroundBeige};
        width : 100%;
        height : 100%;
         display : flex;
        flex-direction : column;
        align-items : center;
     justify-content : center;
    }
    .last-border {
        border-right : none;
    }

    .mainText {
            color : ${props => props.color};    
            font-size : 2rem;
        }
    .subText {
            color : '#4B4B4B';
            font-size : 1rem;
            font-weight : lighter;
        }

    :hover {
        cursor : pointer;
        background-color : ${props => props.color};
        .mainText {
            color : white;
        }
        .subText {
            color : white;
            opacity : 0.5;
        }
        .infoBox-icon {
            color : white;
            height : 80px;
            width : 80px;
            opacity : 0.6;
        }
    }
`



interface InfoBoxProps {
    children?: React.ReactNode;
    mainText: string;
    subText: string;
    color: string;
    last?: boolean;
    link:string,
}

const InfoBoxComp = ({ children, color, mainText, subText, last, link }: InfoBoxProps) => {
    const navigate = useNavigate();
    return (
        <InfoBox color={color} onClick={()=>{navigate(link)}}>
            <div className={'border-wrapper' + ((last) ? " last-border" : "")}>
                {
                    children
                }
                <div className='mainText' color={color}>
                    {
                        mainText
                    }
                </div>
                <div className='subText'>
                    {
                        subText
                    }
                </div>
            </div>
        </InfoBox>
    )
}

interface InfoBoxContent {
    renderIcon: (props: any) => JSX.Element,
    mainText: string,
    subText: string,
    color: string,
    link: string,
}
export default function HeroImage({ image, children, infoBoxes }: Props) {
    return (
        <FullContainer>
            <MyImage image={image}>
                <Overlay>
                    {
                        children
                    }
                </Overlay>
            </MyImage>
            <InfoContainer>
                {
                    infoBoxes.map((infoBoxContent, index) => (
                        <InfoBoxComp link={infoBoxContent.link} last={(index + 1) === infoBoxes.length} color={infoBoxContent.color} mainText={infoBoxContent.mainText} subText={infoBoxContent.subText}>
                            {
                                infoBoxContent.renderIcon({ className: 'infoBox-icon' })
                            }
                        </InfoBoxComp>
                    ))
                }
            </InfoContainer>
        </FullContainer>
    )
}