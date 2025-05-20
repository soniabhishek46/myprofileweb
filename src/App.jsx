import './App.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { TechInterests, OtherInterests, SocialLinks } from './components/page/page';
import { useState } from 'react';

function App() {
  const [vw_mode, setVwMode] = useState('');

  return (
    <BrowserRouter>
      <div className={vw_mode}>
      <div className="dark:bg-gray-800">
      <div className="w-4/5 mx-auto h-screen flex flex-col justify-between gap-10 md:gap-0 text-slate-500 dark:text-slate-100">
        <NavBar vwMode={vw_mode} setVwMode={setVwMode}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/tech-interests' element={<TechInterests />}/>
          <Route path='/other-interests' element={<OtherInterests />}/>
          <Route path='/social-links' element={<SocialLinks />}/>
        </Routes>        
        <Outlet/>
        <Footer />
      </div>
      </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
