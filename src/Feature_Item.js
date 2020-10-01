import React, { Component } from 'react';
import slugify from 'slugify';
import FEATURES from './FEATURES';

class FeatureItem extends Component {
  render() {
    console.log(this.props.feature)
    const options = FEATURES[this.props.feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(this.props.feature)}
            checked={item.name === this.props.selected[this.props.feature].name}
            onChange={e => this.props.updateFeature(this.props.feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });

  return <div>{options}</div>
  };
};

export default FeatureItem;