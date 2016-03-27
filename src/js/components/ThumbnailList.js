/*
  This components holds our thumbnail images.
*/
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
    const thumbnailPhotos = this.props.photos.map((photo) => {
      let thumbnail;
      /*
        The thumbnail we render depends on whether it is the current image
        or not. Because we want current image to be highlighted, we
        set its "highlightedImage" prop value to be true. If it's not
        current image, we set it to be false. The styling for the image
        highlight is applied via a css class which is set in the thumbnail
        component.
      */
      if (photo.id === this.props.currentImage.id) {
        thumbnail = (<div className="thumbnailDiv" key={photo.id}>
                     <Thumbnail
                      imageid={photo.id}
                      image={photo}
                      highlightedImage={true} // highlight current image
                      handleThumbnailClick={this.handleThumbnailClick}
                     />
                     </div>);
      } else {
        thumbnail = (<div className="thumbnailDiv" key={photo.id}>
                     <Thumbnail
                      imageid={photo.id}
                      image={photo}
                      highlightedImage={false} // don't highlight
                      handleThumbnailClick={this.handleThumbnailClick}
                     />
                     </div>);
      }
      return thumbnail;
    });

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
