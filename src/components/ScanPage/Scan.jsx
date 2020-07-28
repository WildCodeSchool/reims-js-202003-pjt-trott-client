import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Animated } from "react-animated-css";
import QrReader from "react-qr-reader";
import ResultScan from "./Trottinette/ResultScan";

import '../TrottMap/trott.css'

import code from '../../Image/qr-code_logo.svg';
import UnlockTrott from "./Trottinette/UnlockTrott";

class Scan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
    };
  }

  handleScan = data => {
    if (data) {
      this.setState({
        content: data
      });
    }
  };

  handleError = err => {
    console.error(err);
  };

  render() {
    return (
        <div className={this.state.content == null ? 'Bg_QrCode_Reader' : 'Reader'} >
          <Link to="/trott?page=2" className='cross_style'>
            <FontAwesomeIcon icon={faTimesCircle} />
          </Link>
          <div className='Cnt_Logo'>
            <h2 className='Title_Scan'>SCANNE LE QR CODE</h2>
            <img src={code} alt="TROTT_2" className='logo_trott_2' />
            <div className='ctn_link_Phone'>
              <Link className='link_Phone' to="/register?step=5">ou entre le code du vehicule</Link>
            </div>
          </div>
          <div>
            <QrReader
              className='QrReader'
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: "100%" }}
            />
          </div>
          {this.state.content != null && <UnlockTrott />}
        </div>
    );
  }
}

export default Scan;