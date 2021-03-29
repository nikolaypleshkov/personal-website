import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './hero-elements'
import VideoBG from '../../video/Pexels Videos 2814773.mp4'
import Video from 'react-native-video'
import styled from "styled-components/native";

import {Button} from '../Button'
function HeroSection() {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    const styles = StyleSheet.create({
        backgroundVideo: {
            postion: absolute,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 100,
            height: 100,
            overflow: hidden
        }
      });

    return (
        <HeroContainer>
            <HeroBg>
                <Video muted={true}
                       style={styles.backgroundVideo}
                       repeat={true}
                       resizeMode={"cover"}
                       rate={1.0}
                       ignoreSilentSwitch={"obey"} 
                       src={VideoBG} type='video/mp4' />
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
    
