import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Request from './pages/request';
import ScrollToTop from './components/scrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/request" element={<Request/>}/>
      </Routes>
    </Router>
  );
}

export default App;
