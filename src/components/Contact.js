// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import '../App.css';
import Contacts from '../data/contacts.json';

const Contact = () => {
    return (
        <div class="dummy">
        
             {
                Contacts.map(Contac => {
                    return(
                        <div className="contact">
                            <div class ="contact-container">
                <div class="image">
                    <img src={Contac.photo}></img>
                </div>
                <div class="content">
                    <h2>{Contac.name}</h2>
                    <p>{Contac.phone}</p>
                    <p>{Contac.email}</p>
                </div>
                </div>

            </div>
           
                    )
                })
             }

            
            </div>
    )
}

export default Contact;