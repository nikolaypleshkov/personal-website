import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/undraw_percentages_0rur.svg'
import Icon3 from '../../images/undraw_portfolio_website_lidw.svg'
import {ProjectsContainer,
        ProjectsCard,
        ProjectsH1, 
        ProjectsH2, 
        ProjectsIcon, 
        ProjectsP, 
        ProjectsWrapper} from './projects-elements'

function Projects() {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard> 
                    <ProjectsIcon src={Icon1} />
                    <ProjectsH2>Reservation System Web</ProjectsH2>
                    <ProjectsP>Reservation System writed with Java using Servlet framework and MySQL database.
                               You can register and login to the system. You can search flights and book if thicket is avalible.</ProjectsP>    
                </ProjectsCard>    
                <ProjectsCard> 
                    <ProjectsIcon src={Icon2} />
                    <ProjectsH2>Project Title 2</ProjectsH2>
                    <ProjectsP>Project description...</ProjectsP>    
                </ProjectsCard>  
                <ProjectsCard> 
                    <ProjectsIcon src={Icon3} />
                    <ProjectsH2>Project Title 3</ProjectsH2>
                    <ProjectsP>Project description...</ProjectsP>    
                </ProjectsCard>  
            </ProjectsWrapper>    
        </ProjectsContainer>
    )
}

export default Projects
