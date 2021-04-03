import React, {useState} from 'react'
import AboutSection from '../components/AboutSection'
import {aboutSection } from '../components/AboutSection/data'
import {skillsSection} from '../components/SkillsSection/data'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/SkillsSection'
import Sidebar from '../components/Sidebar'
import Contact from '../components/ContactSection'
import {contactSection} from '../components/ContactSection/data'
import { motion } from 'framer-motion';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <>
         <motion.div initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
            opacity: 0
        },
        pageAnimate: {
            opacity: 1,
            delay: .5
        },
    }} >
           <Sidebar isOpen = {isOpen} toggle={toggle} />
           <Navbar toggle={toggle} /> 
           <HeroSection /> 
           <AboutSection {...aboutSection} />
           <Skills {...skillsSection} />
            <Projects />
           <Contact {...contactSection} />
           <Footer />
    </motion.div>
         </>
    )
}

export default Home
