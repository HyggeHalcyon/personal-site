import { Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css'
import './Animation.css'

import Navigation from './components/Navigation'
import Landing from './components/Landing'
import Profile from './components/Profile'
import Security from './components/Security'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import NotFound from './components/NotFound'
import Reset from './components/Reset'
import Contact from './components/Contact'

const App = () => {
  let location = useLocation()

  return (
    <>
      <Navigation />
      <Reset />

      <TransitionGroup>
        <CSSTransition
          key={window.location.pathname}
          timeout={550}
          classNames="fade"
        >
          <div className='App'>
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Security" element={<Security />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
