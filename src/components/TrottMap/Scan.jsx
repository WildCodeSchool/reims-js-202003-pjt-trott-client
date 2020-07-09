import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import QrReader from "react-qr-reader";

import './trott.css'

import trott2 from '../../Image/TROTT_2.png'

class Scan extends Component {
  state = {
    result: []
  };

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      });
    }
  };

  handleError = err => {
    console.error(err);
  };

  render() {
    console.log(this.state.result)
    return (
      <div className='Bg_QrCode_Reader'>
        <Link to="/trott?page=2" className='cross_style'><FontAwesomeIcon icon={faTimesCircle} /></Link>
        <div className='Cnt_Logo'>
          <img src={trott2} alt="TROTT_2" className='logo_trott_2' />
          <h2 className='Title_Scan'>SCAN</h2>
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
      </div>
    );
  }
}

export default Scan;