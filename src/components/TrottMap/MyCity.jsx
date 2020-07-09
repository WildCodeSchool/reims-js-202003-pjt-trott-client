import React from 'react';
import { Link } from 'react-router-dom';


const MyCity = () => {
  return (
    <div className="bg_mycity">
      <div className="Page_Container">
        <div className="Home_Title_container">
          <div className="Flex_Title">
            <h1 className="Home_Title">Bienvenue à Paris !</h1>
          </div>
        </div>
        <div className="Logo_Container">
          <div className="Button_Container">
            <Link className="button_Go" to="/trott?page=2">c'est parti !</Link>
          </div>
          <img
            src="https://cdn.discordapp.com/attachments/714501146701463636/720283550003363880/TROTT.png"
            className="logo_Landing"
            alt="logo"
          />
          <div className="button_Bar_Home" />
        </div>

      </div>
    </div>
  );
};

export default MyCity;
