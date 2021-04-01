import React, {useState} from 'react'
import AboutSection from '../components/AboutSection'
import { homeObjFour, homeObjOne, homeObjTwo, homeObjThree } from '../components/AboutSection/data'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/SkillsSection'
import Sidebar from '../components/Sidebar'


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
           <AboutSection {...homeObjOne} />
           <Skills />
            <Projects />
           <AboutSection {...homeObjFour} />
           <Footer />
        </>
    )
}

export default Home
