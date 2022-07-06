import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarWrapper, SidebarLink } from './SidebarElements'
const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>About</SidebarLink>
                    <SidebarLink to='projects'>Projects</SidebarLink>
                    <SidebarLink to='Contact'>Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar