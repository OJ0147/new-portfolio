import {Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import LandingPage from './page/landingPage/LandingPage';
import MyPortfolio from './page/myPortforlio/MyPortfolio'
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation()
  return (
    <div className="App">   
    <AnimatePresence>
      <Routes location={location} key={location.pathname}> 
        <Route path="/" element={<LandingPage/>} />
        <Route path="/portfolio/*" element={<MyPortfolio/>} />
      </Routes>
      </AnimatePresence> 
    </div>
  );
}

export default App;
