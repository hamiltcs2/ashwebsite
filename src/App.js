import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Request from './pages/request';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/request" component={Request} exact/>
      </Switch>
    </Router>
  );
}

export default App;
