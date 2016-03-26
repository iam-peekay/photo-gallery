import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from './../actions/index';
import ThumbnailList from './../components/ThumbnailList';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
    this.thumbnailClick = this.thumbnailClick.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  thumbnailClick(id) {
    const { dispatch } = this.props;
    const action = ActionCreators.updateCurrentImage(id);
    dispatch(action);
  }

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

  renderImage() {
    const currentImageStyle = {
      backgroundImage: `url(public/images/${this.props.currentImage.url})`,
      backgroundPosition: 'center',
      backgroundSize: 'auto',
      width: 896,
      height: 672,
      margin: 'auto',
    };

    const headerStyle = {
      color: 'white',
      margin: 0,
      width: 896,
      height: 100,
      textAlign: 'center',
      fontSize: 40,
      background: 'rgba(25, 25, 25, .5)'
    };

    const footerStyle = {
      position: 'relative',
      color: '#fff',
      bottom: -380,
      margin: 0,
      width: 896,
      height: 115,
      textAlign: 'center',
      background: 'rgba(25, 25, 25, .5)'
    };

    const footerHeaderStyle = {
      fontSize: 28,
      color: '#fff',
    };

    const footerBodyStyle = {
      fontSize: 18,
      color: '#fff',
    };

    const rightArrowStyle = {
      textAlign: 'center',
    };

    return (
      <div>
        <div style={currentImageStyle}>
          <p style={headerStyle}>{this.props.albumName}</p>
          <img src="public/images/right.png" style={rightArrowStyle} onClick={this.goToNext}/>
          <img src="public/images/left.png" onClick={this.goToPrev}/>
          <div style={footerStyle}>
            <p style={footerHeaderStyle}> {this.props.currentImage.title}</p>
            <p style={footerBodyStyle}>Taken on {this.props.currentImage.date} in the {this.props.currentImage.location}</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container" style={{padding: 20}}>
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

MainPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  albumName: PropTypes.string.isRequired,
  currentImage: PropTypes.object.isRequired,
  photos: PropTypes.array.isRequired,
};


function select(state) {
  return {
    albumName: state.album.albumName !== undefined ? state.album.albumName : 'Default',
    photos: state.album.photos !== undefined ? state.album.photos : [],
    currentImage: state.album.currentImage !== undefined ? state.album.currentImage : {},
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(MainPage);
