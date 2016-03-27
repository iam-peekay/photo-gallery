/*
  This components holds a single thumbnail image.
*/

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
    /*
      The thumbnail image we render depends on whether it is the current
      image or not. Because we want current image to be highlighted, we
      set its css class to be "imageHighlight". If not current image,
      set its css class to be "imageNotHighlight"
    */
    const image = this.props.highlightedImage ? (<img
                                                  className="thumbnailImage imageHighlight"
                                                  src={`public/images/${this.props.image.thumb_url}`}
                                                  onClick={this.handleClick} />) : (
                                                 <img
                                                  className="thumbnailImage imageNotHighlight"
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
