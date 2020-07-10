import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import {Animated} from "react-animated-css";
import QrReader from "react-qr-reader";
import Trottinette1 from "../Trottinette/Trottinette1";
import Trottinette2 from "../Trottinette/Trottinette2";

import './trott.css'

import trott2 from '../../Image/TROTT_2.png'

class Scan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
    };
    this.handleScanValide = this.handleScanValide.bind(this);
  }

  trottContent = () => {
    const content = this.state.content;
    if (content === "Trottinette1") {
      return (
        <div>
          <Trottinette1 />
        </div>
      );
    } else if (content === "Trottinette2") {
      return (
        <div>
          <Trottinette2 />
        </div>
      );
    }
  }

  handleScanValide = () => {
    this.setState(state => ({
    }));
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
          <button onClick={this.handleScanValide}>OK</button>
        </div>
      </Animated>
    ) : this.trottContent()
  }
}

export default Scan;