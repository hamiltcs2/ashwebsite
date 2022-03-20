import React, {useEffect} from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRouterLink, SideBtnWrap, SidebarRoute} from './SidebarElements';
import {animateScroll as scroll } from 'react-scroll';
const Sidebar = ({isOpen, toggle, isHome, scrollID}) => {
    useEffect(() => {
        if(scrollID !== undefined) {
            if (scrollID.scrollID !== "top")
                document.getElementById(scrollID.scrollID).scrollIntoView();
            else
                scroll.scrollToTop();
        }
    }, [scrollID]);
    if (isHome === false) {
        return (
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarRouterLink to="/" state={{scrollID: "about"}} onClick={toggle}>
                            About
                        </SidebarRouterLink>
                        <SidebarRouterLink to="/" state={{scrollID: "services"}} onClick={toggle}>
                            Services
                        </SidebarRouterLink>
                        <SidebarRouterLink to="/" state={{scrollID: "contact"}} onClick={toggle}>
                            Contact
                        </SidebarRouterLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/request">
                            Request Quote
                        </SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
          )      
    }
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>
                    Contact
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/request">
                    Request Quote
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;