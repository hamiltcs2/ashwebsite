import React, {useState} from 'react';
import Quote from '../components/Quote';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
const Request = () => {
  const location = useLocation();
  let { services } = -1;
  if(location.state !== null) {
    services = location.state;
  }
  const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} isHome={false}/>
    <Navbar toggle={toggle} isHome={false}/>
      <Quote services={services}/>
      <Footer/>
    </>
  )
}

export default Request;