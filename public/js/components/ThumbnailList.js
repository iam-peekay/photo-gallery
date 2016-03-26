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
    const thumbnailNoHighlightStyle = {
      display: 'inline-block',
      margin: 14,
    };

    const thumbnailContainerStyle = {
      background: '#ccc',
      width: 896,
      height: 120,
      margin: 'auto',
    };

    const thumbnailHighlightStyle = {
      display: 'inline-block',
      margin: 14,
      boxShadow: '3px 3px 12px #666',
      borderColor: '#C76C0C',
      cursor: 'pointer'
    };

    const thumbnailPhotos = this.props.photos.map(function(photo) {
      let thumbnail;
      if (photo.id === this.props.currentImage.id) {
        thumbnail = (<div style={thumbnailHighlightStyle} key={photo.id}>
                     <Thumbnail
                      imageid={photo.id}
                      image={photo}
                      highlightedImage={true}
                      handleThumbnailClick={this.handleThumbnailClick}
                     />
                     </div>);
      } else {
        thumbnail = (<div style={thumbnailNoHighlightStyle} key={photo.id}>
                     <Thumbnail
                      imageid={photo.id}
                      image={photo}
                      highlightedImage={false}
                      handleThumbnailClick={this.handleThumbnailClick}
                     />
                     </div>);
      }
      return thumbnail;
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
  currentImage: PropTypes.object.isRequired,
};
