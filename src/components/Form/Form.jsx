import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const Form = () => {
  return (
    <div className='Background_Form'>
      <img
        src="https://cdn.discordapp.com/attachments/714501146701463636/720283550003363880/TROTT.png"
        className="logo"
        alt="logo"
      />
      <div className="Text_Container">
        <p className='Enter_Number'>Entre ton numéro de téléphone</p>
        <p className='Text_Form'>Puis rentre ton code de confirmation
          <img
            src="https://images.emojiterra.com/google/android-10/512px/1f609.png"
            className="smiley"
            alt="test"
          />
        </p>
      </div>
      <div className="Input_Container">
        <div className='Border_Phone'>
          <input type="number" className="Input_Phone" placeholder='Number Phone' />
        </div>
      </div>
      <div className="next_link">
        <Link className="link_as_button" to="/register?step=3">Suivant</Link>
      </div>
      <div className='Text_Form_Align'>
        <p>Nous allons t'envoyé un code de confirmation par sms</p>
      </div>
      <div className="Other_Connect">
        <Link className="link_as_button_Transparent" to="/register?step=4">Autre moyen de Connexion</Link>
        <div className='Border_Continue'>
          <Link className='Without_Connect' to="/home">Continuez sans se connecter</Link>
        </div>
      </div>
    </div>
  );
}

export default Form;