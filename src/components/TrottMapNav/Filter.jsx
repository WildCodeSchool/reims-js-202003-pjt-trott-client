/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Select from 'react-select';
import { slide as Menu } from 'react-burger-menu';
import Slider from '../../Image/sliders.svg3x.png';

const options = [
  { value: 'la + d\'autonomie', label: 'la + d\'autonomie' },
  { value: 'la + proche', label: 'la + proche' },
  { value: 'trottinette', label: 'trottinette' },
  { value: 'velo', label: 'velo' },
];

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  handleChange = (selectedOption) => {
    this.setState(
      { selectedOption },
    );
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <>
        <Menu right width="100vw" customBurgerIcon={<img src={Slider} style="width: 60%; height: 100%;" alt="icon" />} className="size" burgerButtonClassName="button_position" itemClassName="filter_item">
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            isMulti
          />
          <div className="filter_content_display">
            <div className="block_filter_content">
              <p>70m</p>
              <img src="https://cdn.fluctuo.com/providers/tier.jpg" alt="Tier" />
              <div className="block_filter_info">
                <p>20km</p>
                <p>60%</p>
              </div>
              <div className="filter_rating">
                4.8
                &#127775;
              </div>
            </div>
            <div className="block_filter_content">
              <p>100m</p>
              <img src="https://cdn.fluctuo.com/providers/dott.jpg" alt="Dott" />
              <div className="block_filter_info">
                <p>12km</p>
                <p>28%</p>
              </div>
              <div className="filter_rating">
                3.9
                &#127775;
              </div>
            </div>
            <div className="block_filter_content">
              <p>100m</p>
              <img src="https://cdn.fluctuo.com/providers/dott.jpg" alt="Dott" />
              <div className="block_filter_info">
                <p>12km</p>
                <p>28%</p>
              </div>
              <div className="filter_rating">
                4.2
                &#127775;
              </div>
            </div>
          </div>
        </Menu>
      </>
    );
  }
}

export default Filter;
