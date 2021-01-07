import React from 'react';

var Banner = ({message}) => {
  return (
    <div className="banner">
      <h1>Connect Four!</h1>
      {message}
    </div>
  );
};



export default Banner;