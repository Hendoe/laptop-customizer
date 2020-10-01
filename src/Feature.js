import React, { Component } from 'react';
import FEATURES from './FEATURES';
import FeatureItem from './Feature_Item';

class Feature extends Component {
  render() {
    const features = Object.keys(FEATURES).map((feature, idx) => {
      const featureToPass = feature
      console.log(featureToPass)
      const featureHash = feature + '-' + idx;
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <FeatureItem feature={featureToPass} USCurrencyFormat={this.props.USCurrencyFormat} selected={this.props.selected} updateFeature={this.props.updateFeature}/>
        </fieldset>
      );
    });

    return <div>{features}</div>
  };
};

export default Feature;