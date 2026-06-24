import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
})

export default SavedVideosContext
