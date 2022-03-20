import React, {useState} from 'react';
import Quote from '../components/Quote';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
const Request = () => {
  const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} isHome={false}/>
    <Navbar toggle={toggle} isHome={false}/>
      <Quote/>
      <Footer/>
    </>
  )
}

export default Request;