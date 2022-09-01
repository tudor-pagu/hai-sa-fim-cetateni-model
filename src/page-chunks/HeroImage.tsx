import React from 'react'
import styled from 'styled-components';
import theme from '../global/theme';
type Props = {
    children?: React.ReactNode;
    image: string;
    infoBoxes: InfoBoxContent[];
}

const FullContainer = styled.div`
  box-shadow: 0px 5px 15px -4px gray;
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
    background-color: ${theme.infoBoxBackgroundColor};
    color: ${theme.infoBoxTextColor};
    flex : 1;
    min-width : 100px;
    border-top : 6px solid ${props => props.color};

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
`

const MainText = styled.div`
    color : ${props => props.color};
    font-size : 2rem;
`

const SubText = styled.div`
    color : '#4B4B4B';
    font-size : 1rem;
    font-weight : lighter;
`

interface InfoBoxProps {
    children?: React.ReactNode;
    mainText: string;
    subText: string;
    color: string;
    last?: boolean;
}
const InfoBoxIconWrapper = styled.div`
    height : 100px;
    width : 100px;
    color : '#C3C3C4';
`
const InfoBoxComp = ({ children, color, mainText, subText, last }: InfoBoxProps) => {
    return (
        <InfoBox color={color}>
            <div className={'border-wrapper' + ((last) ? " last-border" : "")}>
                {
                    children
                }
                <MainText color={color}>
                    {
                        mainText
                    }
                </MainText>
                <SubText>
                    {
                        subText
                    }
                </SubText>
            </div>
        </InfoBox>
    )
}

interface InfoBoxContent {
    renderIcon: (props: any) => JSX.Element,
    mainText: string,
    subText: string,
    color: string,
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
                        <InfoBoxComp last={(index + 1) === infoBoxes.length} color={infoBoxContent.color} mainText={infoBoxContent.mainText} subText={infoBoxContent.subText}>
                            {
                                infoBoxContent.renderIcon({ style: { color: theme.infoBoxIconColor, width: '60px', height: '60px' } })
                            }
                        </InfoBoxComp>
                    ))
                }
            </InfoContainer>
        </FullContainer>
    )
}