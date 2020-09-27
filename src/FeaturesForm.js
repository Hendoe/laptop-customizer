import React, { Component } from 'react';
import FeatureItem from './Feature_Item';

class FeaturesForm extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <FeatureItem USCurrencyFormat={this.props.USCurrencyFormat} selected={this.props.selected} updateFeature={this.props.updateFeature}/>
      </form>
    );
  };
};

export default FeaturesForm;