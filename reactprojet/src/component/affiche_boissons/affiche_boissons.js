import React from 'react';
import './affiche_boissons.css';
import dataCartes from '../datacarte/datacarte';


function AfficheBoissons() {
    return (
     <div className='affiche_boissons'>
        {dataCartes.map(item => (
        item.category === "boissons" &&
          <div className='boissons' key={item.id}>
            <div className='details'>
                <h3>{item.name}</h3>
                <p>{item.price} €</p>
            </div>
            
            <img className='img_boissons' src={item.image} alt={item.name} />
          </div>
        
      ))}
     </div>
    );
  }

  export default AfficheBoissons;