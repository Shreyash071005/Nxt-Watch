import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
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
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route exact path="/notfound" component={NotFound} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App
