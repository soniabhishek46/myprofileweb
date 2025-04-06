import {useState, useRef} from 'react';
import './navbar.css';
import useOnClickOutside from './useOutside';
import menu_hamburger from './images/hamburger-menu-svgrepo-com.svg'
import menu_cross from './images/cross-svgrepo-com.svg'
import { Link } from "react-router-dom";

function NavBar({compSelect}){
    const [show, setShow] = useState(false);

    return(
        <nav className='my-2'>
            <div className='flex justify-between items-center'>
            <div><h3 className="text-slate-500 text-3xl font-serif">Abhishek Soni</h3></div>
            <ul className='hidden gap-2 md:flex md:gap-4'>
                <li><Link to='/' className='text-slate-500'>Home</Link></li>
                <li><Link to='/tech-interests' className='text-slate-500'>Tech-Interests</Link></li>
                <li><Link to='/other-interests' className='text-slate-500'>Interests</Link></li>
                <li><Link to='/social-links' className='text-slate-500'>Other-Links</Link></li>
            </ul>
            <HamburgerMenu show={show} setShow={setShow} />
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
    popup_classes = `flex flex-col absolute right-2 bg-white shadow-lg rounded-md z-40 px-4 w-40 ${popup_classes}`;
    
    return (
    <div id="hamburger-menu" className='relative block md:hidden'>
        <button className="w-8" onClick={onHamburgerClick} ref={ref}><HIcon open={params.show} /></button>
        <div className= {popup_classes} ref={ref2}>
            <div className="my-1 text-slate-500" onClick={()=>params.setShow(false)}><Link to='/' >Home</Link></div>
            <div className="my-1 text-slate-500" onClick={()=>params.setShow(false)}><Link to='/tech-interests' >Tech Interests</Link></div>
            <div className="my-1 text-slate-500" onClick={()=>params.setShow(false)}><Link to='/other-interests' >Interests</Link></div>
            <div className="my-1 text-slate-500" onClick={()=>params.setShow(false)}><Link to='/social-links' >Other Links</Link></div>
        </div>
    </div>
    );
}

function HIcon({open}){
    let imgobj = !open ? <img src={menu_hamburger} alt="hamburger"></img> : <img src={menu_cross} alt="cross"></img>

    return (
        imgobj
    );
}
export default NavBar;
