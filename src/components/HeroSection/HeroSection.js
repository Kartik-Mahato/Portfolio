import React from 'react';
import Typewriter from 'typewriter-effect';
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroSectionElements';
import Video from '../../video/video.mp4';

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, I am </HeroH1>
                <HeroP>Kartik Mahato</HeroP>

                <div className="sub">
                    <Typewriter
                        options={{
                            strings: ["Web Developer", "Frontend/Backend", "UI/UX Designer"],
                            autoStart: true,
                            loop: true,
                            delay: 50
                        }}
                    />
                </div>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
