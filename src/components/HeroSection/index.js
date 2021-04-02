import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './hero-elements'
import VideoBG from '../../video/Pexels Videos 2814773.mp4'
import { motion } from 'framer-motion'
import {Button} from '../Button'
function HeroSection() {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg muted
                         autoPlay
                         loop
                       src={VideoBG} type='video/mp4' />
            </HeroBg>
            <HeroContent>
            <motion.div initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .4,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .2
            }
          },
        }}>
                <HeroH1>Nikolay Pleshkov | Personal website</HeroH1>
                </motion.div>
                <HeroP>
                Passionate college student towards B.SE 
                at the Plovdiv University “Paisii 
                Hilendarski”. Aiming to build success 
                career in the IT world.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" onMouseEnter={onHover} 
                                         onMouseLeave={onHover} smooth={true} duration={500} spy={true} exacr="true" offset={-80}>
                        Contact me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
    
}
export default HeroSection
    
