//components
import Nav from './components/Navigation'
import Banner from './components/Banner'
//css
import './App.css';
//pages
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import NewReleases from './pages/Newreleases';
import Sale from './pages/Sale';
import Error from './pages/Error';
//modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
    <Router>
   
        <Nav />
        <Banner/>
        <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/newrelease" component={NewReleases}></Route>
        <Route exact path="/sale" component={Sale}></Route>
        <Route exact path="*" component={Error}></Route>
      </Switch>
      
    </Router>
    
    </div>
  );
}

export default App;
