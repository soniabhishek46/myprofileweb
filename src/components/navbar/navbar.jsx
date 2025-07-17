import {useState, useRef} from 'react';
import './navbar.css';
import useOnClickOutside from './useOutside';
import menu_hamburger from './images/hamburger-menu-svgrepo-com.svg'
import menu_cross from './images/cross-svgrepo-com.svg'
import { Link } from "react-router-dom";
import ToggleSwitch from '../darklight/toggle.jsx';

function NavBar({vwMode, setVwMode}){
    const [show, setShow] = useState(false);

    return(
        <nav className='my-4'>
            <div className='flex justify-between items-center'>
            <div><h3 className="text-3xl font-[lora]">Abhishek Soni</h3></div>
            <ul className='max-md:hidden md:flex md:gap-4 gap-2 items-baseline'>
                <li><Link to='/' className='font[roboto] hover:text-slate-600 dark:hover:text-slate-300 hover:underline hover:decoration-blue-500 hover:decoration-2 hover:underline-offset-4 transition duration-300'>Home</Link></li>
                <li><Link to='/tech-interests' className='font[roboto] text-md hover:text-slate-600 dark:hover:text-slate-300 hover:underline hover:decoration-blue-500 hover:decoration-2 hover:underline-offset-4 transition duration-300'>Tech-Interests</Link></li>
                <li><Link to='/other-interests' className='font[roboto] text-md hover:text-slate-600 dark:hover:text-slate-300 hover:underline hover:decoration-blue-500 hover:decoration-2 hover:underline-offset-4 transition duration-300'>Interests</Link></li>
                <li><Link to='/social-links' className='font[roboto] text-md hover:text-slate-600 dark:hover:text-slate-300 hover:underline hover:decoration-blue-500 hover:decoration-2 hover:underline-offset-4 transition duration-300'>Other-Links</Link></li>
                <li><ToggleSwitch vwMode={vwMode} setVwMode={setVwMode} /></li>
            </ul>
            <HamburgerMenu show={show} setShow={setShow} vwMode={vwMode} setVwMode={setVwMode}/>
            </div>
        </nav>
    );
}


function HamburgerMenu(params){
    const ref = useRef(null);
    const ref2 = useRef(null);

    function onHamburgerClick(e){
        params.setShow(!params.show);
    }

    useOnClickOutside(ref, ref2, ()=>params.setShow(false));

    let popup_classes = params.show ? "" : "hidden";
    popup_classes = `flex flex-col absolute right-2 bg-white dark:bg-gray-800 shadow-lg rounded-md z-40 px-4 w-40 ${popup_classes}`;
    
    return (
    <div id="hamburger-menu" className='relative md:hidden'>
        <button className="w-8" onClick={onHamburgerClick} ref={ref}><HIcon open={params.show} /></button>
        <div className= {popup_classes} ref={ref2}>
            <div className="my-1 font[roboto] text-md" onClick={()=>params.setShow(false)}><Link to='/' >Home</Link></div>
            <div className="my-1 font[roboto] text-md" onClick={()=>params.setShow(false)}><Link to='/tech-interests' >Tech-Interests</Link></div>
            <div className="my-1 font[roboto] text-md" onClick={()=>params.setShow(false)}><Link to='/other-interests' >Interests</Link></div>
            <div className="my-1 font[roboto] text-md" onClick={()=>params.setShow(false)}><Link to='/social-links' >Other Links</Link></div>
            <div className="my-1" onClick={()=>params.setShow(false)}><ToggleSwitch vwMode={params.vwMode} setVwMode={params.setVwMode} /></div>
        </div>
    </div>
    );
}

function HIcon({open}){
    let imgobj = !open ? <img src={menu_hamburger} alt="hamburger"></img> : <img src={menu_cross} alt="cross"></img>

    return (
        <div className="bg-white dark:bg-gray-400 rounded-md">
          {imgobj}
        </div>
    );
}
export default NavBar;
