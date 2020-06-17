import React from "react";
import { Link } from "react-router-dom";
import "./SocialRegister.css";

const SocialRegister = () => {
  return (
    <div className="Background_Form">
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/714501146701463636/720283550003363880/TROTT.png"
          className="logo"
          alt="logo"
        />
      </div>
      <div>
        <p className="Text">Autres Methodes de Connexion</p>
      </div>
      <div className="Btn_Social_Container">
        <Link to="/" className="link_as_button1">
          Continue with Facebook
        </Link>
        <Link to="/" className="link_as_button2">
          Continue with Google
        </Link>
        <Link to="/" className="link_as_button3">
          Continue with Apple
        </Link>
      </div>
    </div>
  );
};

export default SocialRegister;