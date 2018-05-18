import React from 'react';
import Img from './Img.jsx';
import img1 from '../assets/images/test.jpg';
import img2 from '../assets/images/Sunset_2007-1.jpg';

const mockApiResponse = [
    {
        id: '1',
        src: img1
    },
    {
        id: '2',
        src: img2
    }
];

const App = () => {
  return (

    <div className="header" id="circle">
      <h2 className="title">Switcheroo Gallery!</h2>
      <button className="upload"> Upload an image!</button>

    { mockApiResponse.map((apiResponseImage,index) => (
        <Img
            key={index}
            src={apiResponseImage.src}
        />
    ))}
    </div>

  );
};

export default App;
