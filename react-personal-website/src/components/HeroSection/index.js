import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './hero-elements'
import Video from '../../video/Pexels Videos 2814773.mp4'
function HeroSection() {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Nikolay Pleshkov | Personal website</HeroH1>
                <HeroP>
                Passionate college student towards B.SE 
                at the Plovdiv University “Paisii 
                Hilendarski”. Aiming to build success 
                career in the IT world.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" onMouseEnter={onHover} 
                                         onMouseLeave={onHover}>
                        Contact me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
export default HeroSection
    
