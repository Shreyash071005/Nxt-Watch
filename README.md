# Nxt Watch

Nxt Watch is a video streaming web application built with React.js that provides a YouTube-like experience. The application includes authentication, protected routes, theme switching, video browsing, trending videos, gaming videos, saved videos, and video details functionality.

## Features

### Authentication
- Secure login using JWT authentication
- Protected routes
- Logout functionality

### Theme Support
- Light theme
- Dark theme
- Theme toggle

### Home
- View all videos
- Search videos
- Loading state
- Failure state
- No results state

### Trending
- Browse trending videos
- Loading and failure handling

### Gaming
- Browse gaming videos
- Loading and failure handling

### Video Details
- Watch videos using React Player
- Like videos
- Dislike videos
- Save videos
- View channel and video information

### Saved Videos
- Save videos for later viewing
- Remove saved videos
- Empty state view

### Additional Features
- Responsive design
- Custom 404 page
- Context API state management

---

## Tech Stack

- React.js
- React Router DOM
- Context API
- JavaScript (ES6+)
- CSS3
- React Player
- JS Cookie
- Date-fns
- React Icons

---

## Project Structure

```text
src
├── components
│   ├── Login
│   ├── Home
│   ├── Trending
│   ├── Gaming
│   ├── SavedVideos
│   ├── VideoItemDetails
│   ├── Header
│   ├── Sidebar
│   ├── ProtectedRoute
│   └── NotFound
│
├── Context
│   └── ThemeContext
│
├── App.js
└── index.js
```

---

## Login Credentials

```text
Username: rahul
Password: rahul@2021
```

---

## API Endpoints

### Login

```text
POST https://apis.ccbp.in/login
```

### Home Videos

```text
GET https://apis.ccbp.in/videos/all?search=
```

### Trending Videos

```text
GET https://apis.ccbp.in/videos/trending
```

### Gaming Videos

```text
GET https://apis.ccbp.in/videos/gaming
```

### Video Details

```text
GET https://apis.ccbp.in/videos/:id
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Shreyash071005/Nxt-Watch.git
```

Navigate to the project directory:

```bash
cd Nxt-Watch
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

---

## Learning Outcomes

- React Components
- React Router
- Protected Routes
- Context API
- Authentication using JWT
- API Integration
- State Management
- Conditional Rendering
- Responsive Web Design

---

## Author

Shreyash Pawar

Third Year AIML Engineering Student

---

## License

This project is developed for learning and educational purposes.