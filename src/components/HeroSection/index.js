import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer id="top">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Care for your trees with professionals you can trust
            </HeroH1>
            <HeroP>
                At Ash's Arbor Care we value honesty and integrity. We pay close attention to the details of our work in order to balance
                the aesthetic, safety, and health of your trees to provide you with optimal value.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="/request" 
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                smooth={true} duration={500} spy={true}
                        exact='true' offset={-80}>
                    Get a Quote {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}
//pexels.com for stock videos
export default HeroSection