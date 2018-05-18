import React from 'react';
import img from '../assets/images/test.jpg';
import image from '../assets/images/Sunset_2007-1.jpg';
import Img from './Img.jsx';


const App = () => {
  return (

    <div className="header" id="circle">
      <h2 className="title">Switcheroo Gallery!</h2>
      <button className="upload"> Upload an image!</button>
      <img
        className="image"
        style={{ margin: '0.5em' }}
           height="40"
        className="img-circle"
        src={img}
        alt="test"

      />
      <Img
      src={image}
      />
    </div>

  );
};

export default App;
