import styled from 'styled-components'

/* ─── LOGIN CONTAINER ─── */

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: ${({isDark}) => (isDark ? '#212121' : '#f8fafc')};
  box-shadow: ${({isDark}) => (isDark ? 'none' : '0px 4px 16px 0px #bfbfbf')};
`

/* ─── LOGIN FORM CONTAINER ─── */

export const LoginFormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 48px 32px;
  border-radius: 8px;
  background-color: ${({isDark}) => (isDark ? '#0f0f0f' : '#ffffff')};
  box-shadow: ${({isDark}) => (isDark ? 'none' : '0px 4px 16px 0px #bfbfbf')};
`

/* ─── WEBSITE LOGO ─── */

export const WebsiteLogo = styled.img`
  width: 100px;
  display: block;
  margin: 0 auto 48px auto;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

/* ─── LOGIN FORM ─── */

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`

/* ─── INPUT CONTAINER ─── */

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

/* ─── LOGIN LABEL ─── */

export const LoginLabel = styled.label`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#475569')};
`

/* ─── LOGIN INPUT ─── */

export const LoginInput = styled.input`
  height: 40px;
  border-radius: 2px;
  padding: 0 16px;
  font-size: 14px;
  outline: none;
  background-color: ${({isDark}) => (isDark ? 'transparent' : '#ffffff')};
  border: 1px solid ${({isDark}) => (isDark ? '#475569' : '#cbd5e1')};
  color: ${({isDark}) => (isDark ? '#ffffff' : '#1e293b')};

  &::placeholder {
    color: ${({isDark}) => (isDark ? '#64748b' : 'inherit')};
  }
`

/* ─── SHOW PASSWORD CONTAINER ─── */

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`

export const ShowPasswordLabel = styled.label`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
`

/* ─── LOGIN BUTTON ─── */

export const LoginButton = styled.button`
  color: #ffffff;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: #3b82f6;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`

/* ─── ERROR MESSAGE ─── */

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 12px;
  margin-top: 8px;
`
