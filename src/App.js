import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Products from './pages/products/Products';
import Contacts from './pages/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/products'>
              <Products/>
            </Route>
            <Route path='/contacts'>
              <Contacts/>
            </Route>
          </Switch>       
        <Footer/>
      </Router>      
    </div>
  );
}

export default App;
