import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './Context/ThemeContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prev => ({
      isDarkTheme: !prev.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.toggleTheme}}
      >
        <div className="app-container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
          </Switch>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App
