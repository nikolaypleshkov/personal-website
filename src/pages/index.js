import React, {useState} from 'react'
import AboutSection from '../components/AboutSection'
import { homeObjFour, aboutSection } from '../components/AboutSection/data'
import {skillsSection} from '../components/SkillsSection/data'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/SkillsSection'
import Sidebar from '../components/Sidebar'
import Contact from '../components/ContactSection'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <>
           <Sidebar isOpen = {isOpen} toggle={toggle} />
           <Navbar toggle={toggle} /> 
           <HeroSection /> 
           <AboutSection {...aboutSection} />
           <Skills {...skillsSection} />
            <Projects />
           <Contact />
           <Footer />
        </>
    )
}

export default Home
