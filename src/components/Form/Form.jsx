import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <div className='Background_Form'>
      <h1 className='Trott_Logo'>TROTT</h1>
      <p className='Enter_Number'>Entre ton numéro de téléphone</p>
      <p className='Text_Form'>Puis rentre ton code de confirmation</p>
      <input type="tel"
        className="Input_tel"
        pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}"
        required />
      <div>
        <Link className='Without_Connect' to="/sms_de_verification">Suivant</Link>
      </div>
      <p className='Text_Form'>Nous allons t'envoyé un code de confirmation par sms</p>
      <div className="Other_Connect">
        <button>Autre moyen de Connexion</button>
        <Link className='Without_Connect' to="/">Continuez sans se connecter</Link>
      </div>
    </div>
  );
}

export default Form;