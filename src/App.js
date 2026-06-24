import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './Context/ThemeContext'
import SavedVideosContext from './Context/SavedVideosContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, savedVideosList: []}

  toggleTheme = () => {
    this.setState(prev => ({
      isDarkTheme: !prev.isDarkTheme,
    }))
  }

  addSavedVideo = video => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, video],
    }))
  }

  removeSavedVideo = id => {
    this.setState(prevState => ({
      savedVideosList: prevState.savedVideosList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {isDarkTheme, savedVideosList} = this.state
    return (
      <SavedVideosContext.Provider
        value={{
          savedVideosList,
          addSavedVideo: this.addSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
        }}
      >
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
              <ProtectedRoute exact path="/gaming" component={Gaming} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideos}
              />
              <Route exact path="/notfound" component={NotFound} />
              <Redirect to="/notfound" />
            </Switch>
          </div>
        </ThemeContext.Provider>
      </SavedVideosContext.Provider>
    )
  }
}

export default App
