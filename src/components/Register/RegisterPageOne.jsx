import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPageOne = () => {
  return (
    <div className="bg_register">
      <img
        className="logoTrott"
        src="https://cdn.discordapp.com/attachments/714501146701463636/720283550003363880/TROTT.png"
        alt="logo"
      />
      <div className="divText">
        <h2 className="createProfile">Commence par créer ton profil</h2>
        <p className="pConnect">(ou te reconnecter)</p>
        <p className="pConnect">
          1 étape restante
          <img
            src="https://images.emojiterra.com/google/android-10/512px/1f609.png"
            className="smiley"
            alt="test"
          />
        </p>
      </div>
      <img className="imageConnect" src="https://zupimages.net/up/20/24/wkww.png" alt="PlaceHolder" />
      <Link className="link_button_register" to="/register?step=2">
        S'inscrire
      </Link>
      <Link className="link_button_register" to="/login">
        Se connecter
      </Link>
      <Link className="Without_Connect" to="/trott">
        Continuer sans se connecter
      </Link>
    </div>
  );
};


export default RegisterPageOne;
