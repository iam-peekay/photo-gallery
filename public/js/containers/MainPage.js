import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from './../actions/index';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.getAlbum = this.getAlbum.bind(this);
  }

  componentWillMount() {

  }
  getAlbum() {
    const { dispatch } = this.props;
    dispatch(fetchAlbum());
  }

  handleThumbnailClick() {

  }

  goToPrev() {

  }

  goToNext() {

  }


  render() {
    return (
      <div>
        <h1>Hello Worsfld!</h1>
        <button onClick={this.getAlbum}>Get album</button>
      </div>
    );
  }
}

function select(state) {
  return {
    albumName: state.albumName !== undefined ? state.albumName : 'Default',
    photos: state.photos !== undefined ? state.photos : [],
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(MainPage);
