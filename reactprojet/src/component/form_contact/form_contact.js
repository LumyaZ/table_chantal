import React from 'react';
import Maps from '../maps/maps';
import './form_contact.css';

function FormContact() {

    const formSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const telephone = formData.get('telephone');
        const objet = formData.get('objet');
        const message = formData.get('message');

        const messageText = `Votre message a bien été envoyé !\n
        Nom complet : ${name}
        Adresse e-mail : ${email}
        Numéro de téléphone : ${telephone}
        Objet : ${objet}
        Message : ${message}`;
        alert(messageText);
      };

    return (
        <div className='formContact'>
            <form onSubmit={formSubmit} name="form" >
                <div className='form-group'>
                    <input type="text" id="name" name="name" className='contactText' placeholder='Nom' required></input> 
                </div>
                <br />
                <div className='form-group'>
                    <input type="email" id="email" name="email" className='contactText' placeholder='Adresse e-mail' required></input>
                </div>
                <br />
                <div className='form-group'>
                    <input type="tel" id="telephone" name="telephone" placeholder='Numéro de téléphone' className='contactText'></input>
                </div>
                <br />
                <div className='form-group'>
                    <input type="text" id="objet" name="objet" placeholder='Objet' className='contactText' required></input> 
                </div>
                <br />
                <div className='form-group'>
                    <textarea id="message" name="message" placeholder='Message' className='contactTextarea' required></textarea>
                </div>
                <br />
                <button type="submit" className='btnsubmit'>Envoyer</button>
            </form>   
            <div className='infos'>
                <span>Adresse du restaurant :297 Chau. Fernand Forest, 59200 Tourcoing</span> <br />
                <span>Tel : 03 20 23 84 65</span>
                <Maps></Maps>
            </div>   
        </div>
       
       
        
    );
  }

  export default FormContact;