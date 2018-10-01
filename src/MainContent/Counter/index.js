import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  return (
    <div className="counter">

      <div className="counterRow attendingRow">
        <div className="counterLegend">Attending:</div>
        <div className="counterData">{props.numberAttending}</div>
      </div>
      <div className="counterRow">
        <div className="counterLegend">Unconfirmed:</div>
        <div className="counterData">{props.numberUnconfirmed}</div>
      </div>
      <div className="counterRow totalRow">
        <div className="counterLegend">Total:</div>
        <div className="counterData">{props.totalInvited}</div>
      </div>

    </div>
  );
};

Counter.PropTypes = {
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  totalInvited: PropTypes.number.isRequired,
};

export default Counter;