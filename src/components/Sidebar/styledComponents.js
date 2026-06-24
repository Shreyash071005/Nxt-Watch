import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 200px;
    min-width: 200px;
    height: calc(100vh - 60px);
    background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  }
`

export const SidebarMenuList = styled.ul`
  padding: 0;
  margin-top: 16px;
  list-style-type: none;
  height: 100%;
`

export const SidebarMenuLink = styled(Link)`
  text-decoration: none;
`

export const SidebarMenuItem = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 15px;
  background-color: ${props => {
    if (!props.isActive) return 'transparent'
    return props.isDarkTheme ? '#383838' : '#e2e8f0'
  }};
`

export const SidebarMenuText = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const ContactContainer = styled.div`
  padding: 20px;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`

export const SocialMediaLogo = styled.img`
  width: 35px;
  height: 35px;
`

export const ContactDescription = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.6;
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`
