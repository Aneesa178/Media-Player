
import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/Landingpage';
import Watchhistory from './pages/Watchhistory';
import Header from './components/Header';
import { Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>{/* which element to be loaded in path */}
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch' element={<Watchhistory/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
