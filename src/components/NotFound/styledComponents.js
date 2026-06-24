import styled from 'styled-components'

/* ─── NOT FOUND CONTAINER ─── */

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100%;
  background-color: ${({isDark}) => (isDark ? '#181818' : '#ffffff')};
`

/* ─── NOT FOUND MAIN CONTENT ─── */

export const NotFoundMainContent = styled.div`
  display: flex;
`

/* ─── NOT FOUND CONTENT CONTAINER ─── */

export const NotFoundContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  width: 100%;
`

export const NotFoundImage = styled.img`
  width: 250px;
  margin-bottom: 24px;
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#181818')};
`

export const NotFoundDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 24px;
  max-width: 320px;
  color: ${({isDark}) => (isDark ? '#94a3b8' : '#475569')};
`
