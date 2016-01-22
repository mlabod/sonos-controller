import React from 'react';

export default () => {

  var imageUrl = '/src/cover.png'

  var divStyle = {
    backgroundImage: 'url(' + imageUrl + ')',
  };

  return (
    <div className="cover" style={divStyle}>
      Hello World
    </div>
  );
};
