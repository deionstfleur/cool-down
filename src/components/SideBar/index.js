import React from 'react'
import { 
    Icon, 
    CloseIcon, 
    SidebarWrapper,
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute,
    SidebarContainer
} from './styles'

const SideBar = () => {
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
                    <SidebarLink to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services">
                        Services
                    </SidebarLink>
                    <SidebarLink to="contact">
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">
                        Contact
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default SideBar
