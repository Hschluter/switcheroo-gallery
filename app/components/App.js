import React from 'react';
import Img from './Img.jsx';
import img1 from '../assets/images/test.jpg';
import img2 from '../assets/images/Sunset_2007-1.jpg';
import img3 from '../assets/images/hikingclub.jpg';
import img4 from '../assets/images/greg.jpg';

const mockApiResponse = [
    {
        id: '1',
        src: img1
    },
    {
        id: '2',
        src: img2
    },
    {
        id: '3',
        src: img3
    },
    {
        id: '4',
        src: img4
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
