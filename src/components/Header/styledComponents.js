import {Link} from 'react-router-dom'
import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  .menu-popup-overlay {
    padding: 0 !important;
  }

  .menu-popup-content {
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
    border-radius: 0 !important;
    background: transparent !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
  }

  .popup-overlay {
    background: rgba(0, 0, 0, 0.5);
  }

  .popup-content {
    background: transparent;
    border: none;
    width: auto;
    display: flex;
    justify-content: center;
    margin: 0;
  }
`

/* ─── HEADER ─── */

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-height: 60px;
  width: 100%;
  background-color: ${({isDark}) => (isDark ? '#212121' : '#ffffff')};
`

export const WebsiteLogo = styled.img`
  width: 98px;
  height: 28px;
`

export const ControlButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ControlBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const StyledIcon = styled.span`
  font-size: 20px;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
  display: flex;
  align-items: center;
`

/* ─── PROFILE ─── */

export const ProfileIcon = styled.img`
  width: 30px;
`

/* ─── DESKTOP LOGOUT BUTTON ─── */

export const DesktopLogoutBtn = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid ${({isDark}) => (isDark ? '#ffffff' : '#3b82f6')};
  color: ${({isDark}) => (isDark ? '#ffffff' : '#3b82f6')};
`

/* ─── MOBILE MENU POPUP ─── */

export const MenuPopupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({isDark}) => (isDark ? '#181818' : '#ffffff')};
`

export const MenuCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 24px;
`

export const MenuCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#181818')};
  display: flex;
  align-items: center;
`

export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`

export const MenuLink = styled(Link)`
  text-decoration: none;
`

export const MenuItem = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 90px;
  background-color: ${({isActive, isDark}) => {
    if (!isActive) return 'transparent'
    return isDark ? '#383838' : '#e2e8f0'
  }};
`

export const MenuIconWrapper = styled.span`
  font-size: 20px;
  color: ${({isActive}) => (isActive ? '#ff0000' : '#909090')};
  display: flex;
  align-items: center;
`

export const MenuText = styled.p`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin: 0;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#181818')};
`

/* ─── LOGOUT POPUP ─── */

export const LogoutPopupContainer = styled.div`
  width: 90%;
  max-width: 280px;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({isDark}) => (isDark ? '#212121' : '#ffffff')};
`

export const LogoutDescription = styled.p`
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-bottom: 32px;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#00306e')};
`

export const LogoutButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const LogoutButton = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
`

export const CancelBtn = styled(LogoutButton)`
  background-color: transparent;
  border: 1px solid #94a3b8;
  color: #94a3b8;
`

export const ConfirmBtn = styled(LogoutButton)`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
`

/* ─── RESPONSIVE VISIBILITY ─── */

export const SmOnly = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MdOnly = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`
