/*
  Main page which contains our image gallery.
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from './../actions/index';
import ThumbnailList from './../components/ThumbnailList';

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
    this.thumbnailClick = this.thumbnailClick.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  // Dispatch action to update current image if thumbnail is clicked
  thumbnailClick(id) {
    const { dispatch } = this.props;
    const action = ActionCreators.updateCurrentImage(id);
    dispatch(action);
  }

  // Dispatch action to go to previous image if left arrow is clicked
  goToPrev() {
    const { dispatch } = this.props;
    const { currentImage, photos } = this.props;
    let prevPhotoId = Number(currentImage.id) - 1;
    if (prevPhotoId < 1) {
      prevPhotoId = photos.length;
    }
    const action = ActionCreators.updateCurrentImage(prevPhotoId);
    dispatch(action);
  }

  // Dispatch action to go to next image if right arrow is clicked
  goToNext() {
    const { dispatch } = this.props;
    const { currentImage, photos } = this.props;
    let nextPhotoId = Number(currentImage.id) + 1;
    if (nextPhotoId > photos.length) {
      nextPhotoId = 1;
    }
    const action = ActionCreators.updateCurrentImage(nextPhotoId);
    dispatch(action);
  }

  // Renders our current image container, including header, footer and arrows
  renderImage() {
    // Inline our images
    const currentImageUrl = require(`./../../images/${this.props.currentImage.url}`);
    const rightArrowUrl = require('./../../images/right.png');
    const leftArrowUrl = require('./../../images/left.png');

    return (
      <div>
        <div className="currentImageContainer">
          <img src={currentImageUrl} className="currentImage" />
          <p className="imageHeader" >{this.props.albumName}</p>
          <img src={rightArrowUrl} className="rightArrow" onClick={this.goToNext}/>
          <img src={leftArrowUrl} className="leftArrow" onClick={this.goToPrev}/>
          <div className="imageFooter">
            <p className="imageFooterTitle"> {this.props.currentImage.title}</p>
            <p className="imageFooterBody">Taken on {this.props.currentImage.date} in the {this.props.currentImage.location}</p>
          </div>
        </div>
      </div>
    );
  }

  // Renders main image container and thumbnails list
  render() {
    return (
      <div className="container-fluid galleryContainer">
        <div className="row">
          <div>
            {this.renderImage()}
          </div>
        </div>
        <div className="row">
          <ThumbnailList
            thumbnailClick={this.thumbnailClick}
            photos={this.props.photos}
            currentImage={this.props.currentImage}
          />
        </div>
      </div>
    );
  }
}

GalleryPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  albumName: PropTypes.string.isRequired,
  currentImage: PropTypes.object.isRequired,
  photos: PropTypes.array.isRequired,
};


// Here we define the state variables that we want access as props
function select(state) {
  // Because the initial state hydration requires an asynchronous call, we
  // should set a default currentImage so that the user is not left hanging
  // with a blank screen until the initial state of the app hydrates.
  const defaultCurrentImage = {
    'id': '1',
    'url': 'test_images/image1.jpg',
    'thumb_url': 'test_images/thumb1.jpg',
    'title': 'Mountain Tunnel',
    'date': 'December 15, 2009',
    'location': 'the Rocky Mountains'
  };
  return {
    albumName: state.album.albumName !== undefined ? state.album.albumName : 'Default',
    photos: state.album.photos !== undefined ? state.album.photos : [],
    currentImage: state.album.currentImage !== undefined ? state.album.currentImage : defaultCurrentImage,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(GalleryPage);
