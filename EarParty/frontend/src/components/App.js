import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './HomePage';
import CreateRoomPage from './CreateRoomPage';
import JoinRoomPage from './JoinRoomPage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/join" element={<JoinRoomPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

const appDiv = document.getElementById('app');
const root = ReactDOMClient.createRoot(appDiv); // Create the root
root.render(<App />); 