import React from 'react'

const ThemeContext = React.createContext({
  isDarktheme: '',
  toggleTheme: () => {},
})

export default ThemeContext
