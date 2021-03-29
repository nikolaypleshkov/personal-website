import React, {useState} from 'react'
import AboutSection from '../components/AboutSection'
import { homeObjFour, homeObjOne, homeObjTwo, homeObjThree } from '../components/AboutSection/data'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
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
           <AboutSection {...homeObjTwo} />
           <AboutSection {...homeObjThree} />
           <AboutSection {...homeObjFour} />
        </>
    )
}

export default Home
