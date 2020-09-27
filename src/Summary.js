import React, { Component } from 'react';
import SummaryOption from './Summary_Option';
import SummaryTotal from './Summary_Total';

class Summary extends Component {
  render() {
    return (
      <section className="main__summary">
            <h2>Your cart</h2>
            <SummaryOption USCurrencyFormat={this.props.USCurrencyFormat} selected={this.props.selected} />
            <SummaryTotal USCurrencyFormat={this.props.USCurrencyFormat} selected={this.props.selected} />
          </section>
    );
  };
};

export default Summary;