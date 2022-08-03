import { useState } from 'react';
import './App.css';
import Achievements from './Components/Achievements';
import AchieversWorkWithSection from './Components/AchieversWorkWithSection';
import Avengers from './Components/Avengers';
import Courses from './Components/Courses';
import Footer from './Components/Footer';
import HackathonCompanies from './Components/HackathonCompanies';
import HallOfFame from './Components/HallOfFame';
import Institutions from './Components/Institutions';
import Landing from './Components/Landing';
import Products from './Components/Products';
import ThemeContext from './Context/ThemeContext'

function App() {
  const themeHook = useState('light')
  return (
    <ThemeContext.Provider value={themeHook}>
      <div className="App">
        <Landing />
        <Achievements />
        <AchieversWorkWithSection />
        <HallOfFame />
        <Courses />
        <HackathonCompanies />
        <Products />
        <Avengers />
        <Institutions />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
