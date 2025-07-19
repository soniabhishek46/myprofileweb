import {useState, useRef} from 'react';
import './navbar.css';
import useOnClickOutside from './useOutside';
import menu_hamburger from './images/hamburger-menu-svgrepo-com.svg'
import menu_cross from './images/cross-svgrepo-com.svg'
import { Link, useLocation } from "react-router-dom";
import ToggleSwitch from '../darklight/toggle.jsx';

function NavBar({vwMode, setVwMode}){
    const [show, setShow] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const base_css_classes = 'font[roboto] text-md hover:text-slate-600 dark:hover:text-slate-300 hover:underline hover:decoration-blue-500 hover:decoration-2 hover:underline-offset-4 transition duration-300'
    const active_css_classes = 'underline decoration-blue-500 decoration-2 underline-offset-4 text-slate-600 dark:text-slate-300';

    const getLinkClasses = (path) => `${base_css_classes} ${activeLink === path ? active_css_classes : ''}`;

    return(
        <nav className='my-4'>
            <div className='flex justify-between items-center'>
            <div><h3 className="text-3xl font-[lora]">Abhishek Soni</h3></div>
            <ul className='max-md:hidden md:flex md:gap-4 gap-2 items-baseline'>
                <li><Link to='/' className={getLinkClasses('/')} onClick={() => setActiveLink('/')}>Home</Link></li>
                <li><Link to='/tech-interests' className={getLinkClasses('/tech-interests')} onClick={() => setActiveLink('/tech-interests')}>Tech-Interests</Link></li>
                <li><Link to='/other-interests' className={getLinkClasses('/other-interests')} onClick={() => setActiveLink('/other-interests')}>Interests</Link></li>
                <li><Link to='/social-links' className={getLinkClasses('/social-links')} onClick={() => setActiveLink('/social-links')}>Other-Links</Link></li>
                <li><ToggleSwitch vwMode={vwMode} setVwMode={setVwMode} /></li>
            </ul>
            <HamburgerMenu show={show} setShow={setShow} vwMode={vwMode} setVwMode={setVwMode} activeLink={activeLink} setActiveLink={setActiveLink}/>
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

    const base_css_classes = 'font[roboto] text-md hover:text-slate-600 dark:hover:text-slate-300 hover:underline hover:decoration-blue-500 hover:decoration-2 hover:underline-offset-4 transition duration-300'
    const active_css_classes = 'underline decoration-blue-500 decoration-2 underline-offset-4 text-slate-600 dark:text-slate-300';

    const getLinkClasses = (path) => `${base_css_classes} ${params.activeLink === path ? active_css_classes : ''}`;
    
    return (
    <div id="hamburger-menu" className='relative md:hidden'>
        <button className="w-8" onClick={onHamburgerClick} ref={ref}><HIcon open={params.show} /></button>
        <div className= {popup_classes} ref={ref2}>
            <div className="my-2" onClick={()=>{params.setShow(false); params.setActiveLink('/');}}><Link to='/' className={getLinkClasses('/')}>Home</Link></div>
            <div className="my-2" onClick={()=>{params.setShow(false); params.setActiveLink('/tech-interests');}}><Link to='/tech-interests' className={getLinkClasses('/tech-interests')}>Tech-Interests</Link></div>
            <div className="my-2" onClick={()=>{params.setShow(false); params.setActiveLink('/other-interests');}}><Link to='/other-interests' className={getLinkClasses('/other-interests')}>Interests</Link></div>
            <div className="my-2" onClick={()=>{params.setShow(false); params.setActiveLink('/social-links');}}><Link to='/social-links' className={getLinkClasses('/social-links')}>Other Links</Link></div>
            <div className="my-2" onClick={()=>params.setShow(false)}><ToggleSwitch vwMode={params.vwMode} setVwMode={params.setVwMode} /></div>
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
