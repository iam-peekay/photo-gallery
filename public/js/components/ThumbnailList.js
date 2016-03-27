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
    const thumbnailPhotos = this.props.photos.map(function(photo) {
      let thumbnail;
      if (photo.id === this.props.currentImage.id) {
        thumbnail = (<div className="thumbnailDiv" key={photo.id}>
                     <Thumbnail
                      imageid={photo.id}
                      image={photo}
                      highlightedImage={true}
                      handleThumbnailClick={this.handleThumbnailClick}
                     />
                     </div>);
      } else {
        thumbnail = (<div className="thumbnailDiv" key={photo.id}>
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
      <div className="thumbnailContainer">
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
