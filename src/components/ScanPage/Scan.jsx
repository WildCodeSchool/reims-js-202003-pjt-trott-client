import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Animated } from "react-animated-css";
import QrReader from "react-qr-reader";
import Trottinette1 from "./Trottinette/Trottinette1";
import Trottinette2 from "./Trottinette/Trottinette2";

import '../TrottMap/trott.css'

import code from '../../Image/qr-code_logo.svg'

class Scan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
    };
  }

  trottContent = () => {
    const content = this.state.content;
    if (content === "Trottinette1") {
      return (
        <Trottinette1 />
      );
    } else if (content === "Trottinette2") {
      return (
        <Trottinette2 />
      );
    }
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
    console.log(this.state.content)
    return this.state.content == null ? (
      <Animated animationIn="fadeInLeft" animationInDuration='500' animationOut="fadeOut" isVisible={true}>
        <div className='Bg_QrCode_Reader'>
          <Link to="/trott?page=2" className='cross_style'><FontAwesomeIcon icon={faTimesCircle} /></Link>
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
        </div>
      </Animated>
    ) : this.trottContent()
  }
}

export default Scan;