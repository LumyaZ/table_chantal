import React, { useState } from 'react';
import dataCartes from '../datacarte/datacarte';
import './plats_choice.css';

function PlatsChoice() {

    const [selectedCategory, setSelectedCategory] = useState('entrées');

    const catagerieClick = (categorie) => {
        setSelectedCategory(categorie);
        document.querySelectorAll('.btnCarte button').forEach(button => {
            if (button.textContent === categorie) {
              button.classList.add('active');
            } else {
              button.classList.remove('active');
            }
          });
        }

    return (
     <div className='choice_categorie_plats'>
        <div className='btnCarte'>
            <button className={`CategorieEntrées ${selectedCategory === 'entrées' ? 'active' : ''}`}onClick={() => catagerieClick('entrées')}>
            <b><span>Entrées</span></b>
            </button>
            <button className={`CategoriePlats ${selectedCategory === 'plats' ? 'active' : ''}`}onClick={() => catagerieClick('plats')}>
                <b><span>Plats</span></b>
            </button>
            <button className={`CategorieDessert ${selectedCategory === 'desserts' ? 'active' : ''}`}onClick={() => catagerieClick('desserts')}>
                <b><span>Desserts</span></b>
            </button>
        </div>
        <div className='affiche_cartes'>
            {dataCartes.map(item => (
                item.category === selectedCategory &&
                <div className={`carte ${selectedCategory}`} key={item.id}>
                    <div className='details'>
                        <h3>{item.name}</h3>
                        <p>{item.price} €</p>
                    </div>
                    <img className='img_cartes' src={item.image} alt={item.name} />
                </div>
            ))}
        </div>
    </div>
    );
  }

  export default PlatsChoice;