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
    const image = this.props.highlightedImage ? (<img
                                                  className="imageHighlight"
                                                  src={`public/images/${this.props.image.thumb_url}`}
                                                  onClick={this.handleClick} />) : (
                                                 <img
                                                  className="imageNotHighlight"
                                                  src={`public/images/${this.props.image.thumb_url}`}
                                                  onClick={this.handleClick} />);
    return image;
  }
}

Thumbnail.propTypes = {
  handleThumbnailClick: PropTypes.func.isRequired,
  imageid: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  highlightedImage: PropTypes.bool.isRequired,
};
