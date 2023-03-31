import React from 'react';
import './footer.css';

function Footer() {
    return (
      <footer className="footer">
        <div className="icons">
            <a href="https://www.facebook.com/LaTableDeChantal/">
                <img className='img_icon' src="img/facebook-icon.png" alt="Facebook"></img>
            </a>
            <a href="https://www.instagram.com/">
                <img className='img_icon' src="img/instagram-icon.png" alt="Instagram"></img>
            </a>
        </div>
      </footer>
    );
  }

  export default Footer;