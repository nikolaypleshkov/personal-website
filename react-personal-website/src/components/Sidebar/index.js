import React from 'react'
import {SidebarContainer, Icon, CloseIcon} from './sidebar-elements'
const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="projects">
                        Projects
                    </SidebarLink>
                    <SidebarLink to="skills">
                        Skills
                    </SidebarLink>
                    <SidebarLink to="contact">
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
