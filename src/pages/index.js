import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  let { scrollID } = "top";
  if(location.state !== null) {
    scrollID = location.state;
  }
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} isHome={true} scrollID = {scrollID}/>
        <Navbar toggle={toggle} isHome={true} scrollID={scrollID}/>
        <HeroSection/>
        <InfoSection{...homeObjOne}/>
        <InfoSection{...homeObjTwo}/>
        <Services/>
        <InfoSection{...homeObjThree}/>
        <Footer/>
    </>
  )
}

export default Home;