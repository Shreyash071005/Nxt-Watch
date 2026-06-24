import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const TrendingContentContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const TrendingVideosContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  height: 100%;
`

export const TrendingVideosHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
`

export const TrendingIconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#e1e9f0')};
`

export const TrendingIcon = styled(HiFire)`
  font-size: 30px;
  color: #ff031c;
`

export const TrendingHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#20293c')};
`

export const TrendingVideosContentContainer = styled.div`
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 250px;
  margin-bottom: 24px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 24px;
  max-width: 320px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
`

export const RetryButton = styled.button`
  width: 90px;
  height: 40px;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`
