// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import '../App.css';
import Contacts from '../data/contacts.json';

const Contact = () => {
    return (
        <div className="dummy">
        
             {
                Contacts.map(Contac => {
                    return(
                        <div className="contact" key={Contact.id}>
                            <div className="contact-container">
                <div className="image">
                    <img src={Contac.photo}></img>
                </div>
                <div className="content">
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