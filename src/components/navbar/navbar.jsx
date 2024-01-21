import {useState, useRef,  } from 'react';
import './navbar.css';
import useOnClickOutside from './useOutside';
import menu_hamburger from './images/hamburger-menu-svgrepo-com.svg'
import menu_cross from './images/cross-svgrepo-com.svg'


function NavBar({compSelect}){
    const [show, setShow] = useState(false);

    function handle_home(e){
        e.preventDefault();
        compSelect('home');
        setShow(false);
    }

    function handle_tech_interests(e){
        e.preventDefault();
        compSelect('tech-interests');
        setShow(false);
    }

    function handle_interests(e){
        e.preventDefault();
        compSelect('interests');
        setShow(false);
    }

    function handle_other_links(e){
        e.preventDefault();
        compSelect('other-links')
        setShow(false);
    }

    return(
        <nav className='my-2'>
            <div className='flex justify-between items-center'>
            <div><h4 className="font-bold text-slate-500">Abhishek Soni</h4></div>
            <ul className='hidden gap-2 md:flex md:gap-4'>
                <li><a href='/' onClick={handle_home} className='text-slate-500'>Home</a></li>
                <li><a href='/' onClick={handle_tech_interests} className='text-slate-500'>Tech Interests</a></li>
                <li><a href='/' onClick={handle_interests} className='text-slate-500'>Interests</a></li>
                <li><a href='/' onClick={handle_other_links} className='text-slate-500'>Other Links</a></li>
            </ul>
            <HamburgerMenu handle_home={handle_home}
                           handle_tech_interests={handle_tech_interests}
                           handle_interests={handle_interests}
                           handle_other_links={handle_other_links}
                           show={show}
                           setShow={setShow} 
                            />
            </div>
        </nav>
    );
}


function HamburgerMenu(params){
    const ref = useRef(null);
    const ref2 = useRef(null);

    //const [show, setShow] = useState(false);

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
            <div className="my-1 text-slate-500"><a href='/' onClick={params.handle_home}>Home</a></div>
            <div className="my-1 text-slate-500"><a href='/' onClick={params.handle_tech_interests}>Tech Interests</a></div>
            <div className="my-1 text-slate-500"><a href='/' onClick={params.handle_interests}>Interests</a></div>
            <div className="my-1 text-slate-500"><a href='/' onClick={params.handle_other_links}>Other Links</a></div>
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
