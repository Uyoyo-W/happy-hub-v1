import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import LogIn from './components/login-pages/LogIn';
import Register from './components/login-pages/Register';
import Info from './components/login-pages/Info';
import Contact from './components/login-pages/Contact';
import Aichat from './components/chat-pages/Aichat';
import Exercises from './components/SidePanel/Exercises';
import GetHelp from './components/SidePanel/GetHelp';
import Community from './components/chat-pages/Community';
import Settings from './components/chat-pages/Settings';

import './global.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< LandingPage />} />
        <Route path="sign-in" element={< LogIn />} />
        <Route path="sign-up" element={< Register />} />
        <Route path="info" element={< Info />} />
        <Route path="contact" element={< Contact />} />
        <Route path="aiChat" element={< Aichat />} />
        <Route path="exercises" element={< Exercises />} />
        <Route path="get-help" element={< GetHelp />}  />
        <Route path="community" element={< Community />}  />
        <Route path="settings" element={< Settings />}  />
      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 
root.render(<App />);
