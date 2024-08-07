import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projectpage from './Pages/Projects';
import ContactPage from './Pages/Contact';
import ServicesPage from './Pages/Services';



function App() {
  return (
    <div className='bg-[rgb(29,28,34)]'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projectpage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
