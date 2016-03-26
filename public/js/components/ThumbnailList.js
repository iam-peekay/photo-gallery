import React, { Component, PropTypes } from 'react';
import Thumbnail from './Thumbnail';

export default class ThumbnailList extends Component {
  constructor(props) {
    super(props);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  handleThumbnailClick(imageid) {
    this.props.thumbnailClick(imageid);
  }

  render() {
    const thumbnailBlockStyle = {
      display: 'inline-block',
      margin: 14,
    };

    const thumbnailContainerStyle = {
      background: '#ccc',
      width: 896,
      height: 157,
      margin: 'auto',
    };

    const thumbnailPhotos = this.props.photos.map(function(photo) {
      return <div style={thumbnailBlockStyle} key={photo.id}> <Thumbnail imageid={photo.id} image={photo} handleThumbnailClick={this.handleThumbnailClick}/></div>;
    }.bind(this));
    return (
      <div style={thumbnailContainerStyle}>
        {thumbnailPhotos}
      </div>
    );
  }
}

ThumbnailList.propTypes = {
  thumbnailClick: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
};
