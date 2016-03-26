import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from './../actions/index';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  handleThumbnailClick() {
    const { dispatch } = this.props;
    const action = ActionCreators.updateCurrentImage(4);
    dispatch(action);
  }

  goToPrev() {

  }

  goToNext() {

  }

  renderThumbnails() {
    const { photos } = this.props;

    const thumbnailContainerStyle = {
      background: '#ccc',
      width: 896,
      height: 157,
      margin: 'auto',
    };

    const thumbnailBlockStyle = {
      display: 'inline-block',
      margin: 14,
    };

    const imageStyle = {
      height: 75,
      width: 100,
      position: 'relative',
    };

    const thumbnailPhotos = photos.map(function(photo) {
      return <div style={thumbnailBlockStyle} key={photo.id} onClick={this.handleThumbnailClick}><img style={imageStyle} src={`public/images/${photo.thumb_url}`} /></div>;
    }.bind(this));

    return (
      <div style={thumbnailContainerStyle}>
        {thumbnailPhotos}
      </div>
    );
  }


  renderImage() {
    console.log(this.props.currentImage);
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
      position: 'absolute',
      color: '#fff',
      bottom: -280,
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
      <div style={{paddingTop: 40}}>
        <div style={currentImageStyle}>
          <p style={headerStyle}>{this.props.albumName}</p>
          <img src="public/images/right.png" style={rightArrowStyle}/>
          <img src="public/images/left.png" />
          <div style={footerStyle}>
            <p style={footerHeaderStyle}> {this.props.currentImage.title}</p>
            <p style={footerBodyStyle}>`Taken on {this.props.currentImage.date} in the {this.props.currentImage.location}`</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    // const props = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div>
            {this.renderImage()}
          </div>
        </div>
        <div className="row">
          {this.renderThumbnails()}
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    albumName: state.album.albumName !== undefined ? state.album.albumName : 'Default',
    photos: state.album.photos !== undefined ? state.album.photos : [],
    currentImage: state.album.currentImage !== undefined ? state.album.currentImage : {},
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(MainPage);
