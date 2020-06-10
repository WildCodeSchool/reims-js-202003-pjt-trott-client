import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const Form = () => {
  return (
    <div>
      <h1 className='Trott_Logo'>TROTT</h1>
      <p className='Enter_Number'>Entre ton numéro de téléphone</p>
      <p>Puis rentre ton code de confirmation</p>
      <input type="tel" id="phone" name="phone"
        pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}"
        required />
      <div>
        <button>Suivant</button>
      </div>
      <p>Nous allons t'envoyé un code de confirmation par sms</p>
      <div>
        <button>Autre moyen de Connexion</button>
      </div>
      <Link className='Without_Connect' to="/home">Continuez sans se connecter</Link>
    </div>
  );
}

export default Form;