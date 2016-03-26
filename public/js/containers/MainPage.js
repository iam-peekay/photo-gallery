import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  handleThumbnailClick() {

  }

  goToPrev() {

  }

  goToNext() {

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
      padding: 20,
      width: 896,
      height: 100,
      textAlign: 'center',
      background: 'rgba(25, 25, 25, .5)'
    };

    const footerStyle = {
      position: 'absolute',
      color: 'white',
      bottom: -282,
      margin: 0,
      width: 896,
      height: 100,
      textAlign: 'center',
      background: 'rgba(25, 25, 25, .5)'
    };

    const rightArrowStyle = {
      textAlign: 'center',
    };

    return (
      <div style={{padding: 40}}>
        <div style={currentImageStyle}>
          <h1 style={headerStyle}>{this.props.albumName}</h1>
          <img src="public/images/right.png" style={rightArrowStyle}/>
          <img src="public/images/left.png" />
          <div style={footerStyle}>
            <h3> {this.props.currentImage.title}</h3>
            <p>`Taken on {this.props.currentImage.date} in the {this.props.currentImage.location}`</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const props = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div>
            {this.renderImage()}
          </div>
        </div>
        <div className="row">
          <div className="col-md-1">{props.photos[0].thumb_url}</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    albumName: state.loadAlbum.albumName !== undefined ? state.loadAlbum.albumName : 'Default',
    photos: state.loadAlbum.photos !== undefined ? state.loadAlbum.photos : [],
    currentImage: state.loadAlbum.photos !== undefined ? state.loadAlbum.photos[0] : {},
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(MainPage);
