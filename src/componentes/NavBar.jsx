import { useState } from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
const NavBar = () => {

    const [ menu , setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu )
    }

    return (
    <header className="NavBar">
        <h1 className="NavBar-h1">
            <p className="NavBar-a">
                Joyeria Sagitario
            </p>
        </h1>

        <button 
            onClick={ toggleMenu }
         className="NavBar-button">
        <svg className='NavBar-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>

        <nav className={ `NavBar-nav ${ menu ? 'isActive' : '' }` }>
            <ul className="NavBar-ul">
                <Link to="/"> Home/ </Link>
                <Link to="/category/:id">Anillos/</Link>
                <Link to="/category/:id">Aretes/</Link>
                <Link to="/category/:id">Collares/</Link>
                <Link to="/carrito"> Carrito de compras </Link>

                
              

            </ul>
        </nav>

    </header>
)
}


export default NavBar