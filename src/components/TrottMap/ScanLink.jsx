import React from 'react';
import { Link } from 'react-router-dom';

import ScanLogo from "../../Image/Logos_trott_1_.png"

const ScanLink = () => {
  return (
    <div className='ScanLogo'>
      <Link to="/scan" >
        <img src={ScanLogo} alt="scan" />
        <p className='Text_Scan'>Scan</p>
      </Link>
    </div>
  );
}

export default ScanLink; 