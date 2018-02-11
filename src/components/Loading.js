import React from 'react';
import '../assets/css/loader.scss';

const Loading = props => {
  if (props.pastDelay) {
    return (
      <div className="sk-cube-container">
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1" />
          <div className="sk-cube sk-cube2" />
          <div className="sk-cube sk-cube3" />
          <div className="sk-cube sk-cube4" />
          <div className="sk-cube sk-cube5" />
          <div className="sk-cube sk-cube6" />
          <div className="sk-cube sk-cube7" />
          <div className="sk-cube sk-cube8" />
          <div className="sk-cube sk-cube9" />
        </div>
      </div>
    );
  }
  return null;
};

export default Loading;
