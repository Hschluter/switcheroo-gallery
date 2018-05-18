import React from 'react';
import PropTypes from 'prop-types';

class Img extends React.Component {
  render() {
    return (
      <div className="image-cropper">
        <img
          src={this.props.src}
          alt="pictures"
        />
      </div>
    );
  }
}
Img.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number
};
Img.defaultProps = {
  src: PropTypes.string
};

export default Img;
