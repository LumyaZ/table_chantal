import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CartePlats from './pages/CartePlats';
import Header from './component/header/header';
import CarteBoissons from './pages/CarteBoissons';
import Contact from './pages/Contact';
import Footer from './component/footer/footer';

function App() {
  return (
    <div className="App">
    <Header />

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carte-plats' element={<CartePlats/>}/>
        <Route path='/carte-boissons' element={<CarteBoissons/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>

    <Footer/>
    </div>
  );
}

export default App;
