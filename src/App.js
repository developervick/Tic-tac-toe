import logo from './logo.svg';
import './App.css';
import HomeNavbar from './components/navbar';
import Home from './pages/home';
import Page from './pages/page';
import Page1 from './pages/page1';
import About from './pages/about';
import { Routes, Route} from "react-router-dom"
import Heading from './components/heading';

function App() {
  return (
    <>
    <div className='h-screen w-screen'>
    <HomeNavbar></HomeNavbar>
    <Routes>
      <Route path="heading" element={<Heading />}></Route>
      <Route path="/Tic-tac-toe/" element={<Home/>}></Route>
      <Route path="/page" element={<Page/>}></Route>
      <Route path="/page1" element={<Page1/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </div>
    
    </>
  );
}

export default App;
