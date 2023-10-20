import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navigation from './components/Navigation'
import Landing from './components/Landing'
import Profile from './components/Profile'
import Security from './components/Security'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <>
      <Navigation />

      <div>
        <Routes >
          <Route path="/" element={<Landing />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Security" element={<Security />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Gallery" element={<Gallery />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
