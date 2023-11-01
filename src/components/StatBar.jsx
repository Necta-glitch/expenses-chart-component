import React from 'react';

const StatBar = ({ value, maxValue }) => {
  const barWidth = (value / maxValue) * 100 + '%';
  const barStyle = {
    width: barWidth,
  };

  return (
    <div className="stat-bar">
      <div className="bar" style={barStyle}></div>
    </div>
  );
};

export default StatBar;
