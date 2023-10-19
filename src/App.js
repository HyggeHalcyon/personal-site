import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import './App.css'

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
          <Route path="/"/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Security" element={<Security />}/>
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/Gallery" element={<Gallery />}/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
