import React from 'react';
import './header.css';

function Header() {
    return (
      <header className="header">
        <a href='/' className="title">La Table de Chantal</a>
        <nav>
          <ul>
            <a href='/carte-plats' className='btnNav'>Carte des plats</a>
            <a href='/carte-boissons' className='btnNav'>Carte des boissons</a>
            <a href='/contact' className='btnNav'>Contact</a>
          </ul>
        </nav>
      </header>

      
    );
  }

  export default Header;
