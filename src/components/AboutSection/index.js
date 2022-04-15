import React from 'react';
import ashtonImage1 from '../../images/ashtonImage1.jpg';
// import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './AboutElements';

// const AboutSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
const AboutSection = () => {
  return (
    <>
        <AboutContainer lightBg={true} id={'about'} name={'about'}>
            <AboutWrapper>
                <AboutRow imgStart={true}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>About Us</TopLine>
                            <Heading lightText={false}>Ashton Phelps</Heading>
                            <Subtitle darkText={true}>-ISA Certified Arborist    
                                <br/>IN-3659A
                                <br/>-Environmental Management B.S.P.A., Indiana University
                                <br/>-United States Marine Infantryman</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <Img src={ashtonImage1} alt={'Ashton'}/>
                        </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    </>
  )
}

export default AboutSection;