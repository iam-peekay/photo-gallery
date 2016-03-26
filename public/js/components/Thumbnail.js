import React, { Component, PropTypes } from 'react';

export default class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleThumbnailClick(this.props.imageid);
  }

  render() {
    const imageStyle = {
      height: 75,
      width: 100,
      position: 'relative',
    };

    return (
      <img style={imageStyle} src={`public/images/${this.props.image.thumb_url}`} onClick={this.handleClick} />
    );
  }
}

Thumbnail.propTypes = {
  handleThumbnailClick: PropTypes.func.isRequired,
  imageid: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};
