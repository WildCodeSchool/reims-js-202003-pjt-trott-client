import React from 'react';
import './SmsVerif.css';

const Sms = () => {
  return (
    <div className='Background_Sms'>
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/714501146701463636/720283550003363880/TROTT.png"
          className="logo"
          alt="logo"
        />
      </div>
      <div className='Enter_Sms-Container'>
        <p className='Enter_Sms'>Entre le code de confirmation reçu par SMS</p>
      </div>
    </div>
  );
}

export default Sms;