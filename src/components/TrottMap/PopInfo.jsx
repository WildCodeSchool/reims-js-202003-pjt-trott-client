import React from 'react';
import Distance from './Distance';

function PopInfo(props) {
  return (
    <div className="general_popup">
      <div className="bg_popup-block">
        <div className="pop-trott_img">Image Trott</div>
        <div>
          <p className="trott_id">TIER n°25678</p>
          <p className="trott_distance"><Distance posUser={props.posUser} posTrott={props.posTrott} /></p>
          <p className="trott_battery">20%</p>
        </div>
        <img className="trott_provider-logo" src={props.logo} alt="" />
      </div>
      <div className="start_button">
        Démarrer
      </div>
    </div>
  );
}

export default PopInfo;
