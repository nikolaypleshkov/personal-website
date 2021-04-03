import React from 'react'
import Icon1 from '../../images/undraw_connected_world_wuay.svg'
import Icon2 from '../../images/undraw_video_game_night_8h8m.svg'
import Icon3 from '../../images/undraw_skateboard_d6or.svg'
import {ProjectsContainer,
        ProjectsCard,
        ProjectsH1, 
        ProjectsH2, 
        ProjectsIcon, 
        ProjectsP, 
        ProjectsWrapper} from './projects-elements'
import {BtnWrap} from '../AboutSection/about-elements'
import {Button} from '../Button'

function Projects({primary,dark,dark2}) {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard href='https://github.com/nikolaypleshkov/RS-JAVA-WEB' target='_blank'> 
                    <ProjectsIcon src={Icon1}  />
                    <ProjectsH2>Reservation System Web</ProjectsH2>
                    <ProjectsP>Reservation System writed on Java using Servlet framework and MySQL database.
                               You can register and login to the system. You can search flights and book if thicket is available.</ProjectsP>    
                </ProjectsCard>    
                <ProjectsCard href='https://github.com/nikolaypleshkov/Retro-game' target='_blank'> 
                    <ProjectsIcon src={Icon2} />
                    <ProjectsH2>Retro FPS Game</ProjectsH2>
                    <ProjectsP>Retro fps (first-person-shooter) game created using Unity Engine.
                               The scripts for the game are wirted on C#. The game desing,graphics and animation are
                               created with Unity.</ProjectsP>    
                </ProjectsCard>  
                <ProjectsCard href='https://github.com/nikolaypleshkov/Course-Work' target='_blank'> 
                    <ProjectsIcon src={Icon3} />
                    <ProjectsH2>Online Skate Shop</ProjectsH2>
                    <ProjectsP>Online skate shop design with HTLM5+CSS+JavaScript.You can search for products 
                               and view available items on seperated separated. This project was created for my 
                               Web Design class.</ProjectsP>    
                </ProjectsCard> 
                <BtnWrap>
                    <Button to='contact' smooth={true} duration={500} spy={true} exacr="true" offset={-80} primary={primary ? 0 : 1} dark={dark ? 0 : 1} dark2={dark2 ? 0 : 1}>Projects</Button>
                </BtnWrap> 
            </ProjectsWrapper>    
        </ProjectsContainer>
    )
}

export default Projects
