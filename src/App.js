import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar'
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
