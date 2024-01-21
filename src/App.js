import './App.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import { TechInterests, OtherInterests, SocialLinks } from './components/page/page';
import { useState } from 'react';

function App() {

  const [comp, setComp] = useState('home');

  return (
    <div className="w-4/5 mx-auto h-screen flex flex-col justify-between gap-10 md:gap-0">
      <NavBar compSelect={setComp}/>
      {(comp === 'home') ? <Home /> : null}
      {(comp === 'tech-interests') ? <TechInterests /> : null}
      {(comp === 'interests') ? <OtherInterests /> : null}
      {(comp === 'other-links') ? <SocialLinks /> : null}
      <Footer />
    </div>
  );
}

export default App;
