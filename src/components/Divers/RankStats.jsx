import React from 'react';

class RankStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="block_playerOutPodium">
        <p>{this.props.position}</p>
        <div className="block_info_OutPodium">
          <img className="img_player img_outPodium" src={this.props.img} alt=" user" />
          <p>{this.props.name}</p>
          <div className="bg_scoreOutPodium">
            <p>{this.props.score}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RankStats;
