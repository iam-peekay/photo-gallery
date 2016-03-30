import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ThumbnailList from './../components/ThumbnailList';
import Thumbnail from './../components/Thumbnail';
import * as albumJSON from './../../../gallery.json';

describe('<ThumbnailList /> component', function() {
  beforeEach(function() {
    const onThumbnailClick = sinon.spy();
    this.component = shallow(
          <ThumbnailList
            photos={albumJSON.photos}
            currentImage={albumJSON.photos[0]}
            thumnailClick={onThumbnailClick}
           />);
  });

  it('renders 6 thumbnails in <ThumbnailList /> component', function() {
    expect(this.component.find(Thumbnail)).to.have.lengthOf(albumJSON.photos.length);
  });

  it('renders 1 div with className of thumbnailContainer', function() {
    expect(this.component.find('.thumbnailContainer')).to.have.lengthOf(1);
  });
});

describe('<Thumbnail /> component', function() {
  beforeEach(function() {
    this.handleThumbnailClick = sinon.spy();
    this.component = shallow(
          <Thumbnail
            handleThumbnailClick={this.handleThumbnailClick}
            imageid={albumJSON.photos[3].id}
            image={albumJSON.photos[3]}
            highlightedImage={false}
           />);
  });

  it('simulates click event on thumbnail photo', function() {
    this.component.find('img').simulate('click');
    expect(this.handleThumbnailClick.calledOnce).to.equal(true);
  });

  it('should have className "imageNotHighlight" when "highlightedImage" prop is false', function() {
    expect(this.component.find('.imageNotHighlight')).to.have.lengthOf(1);
    expect(this.component.find('.imageHighlight')).to.have.lengthOf(0);
  });

  it('should have className "imageHighlight" when "highlightedImage" prop is true', function() {
    const handleThumbnailClick = sinon.spy();
    const component = shallow(
          <Thumbnail
            handleThumbnailClick={handleThumbnailClick}
            imageid={albumJSON.photos[3].id}
            image={albumJSON.photos[3]}
            highlightedImage={true}
           />);
    expect(component.find('.imageHighlight')).to.have.lengthOf(1);
    expect(component.find('.imageNotHighlight')).to.have.lengthOf(0);
  });
});

//
// describe('<GalleryPage /> component', function() {
//
//   beforeEach(function() {
//     this.component = shallow(
//           <GalleryPage
//             photos={albumJSON.photos}
//             currentImage={albumJSON.photos[0]}
//             albumName={albumJSON.album.name}
//             store={store}
//            />);
//   });
//
//   it('has photos prop which is an array of length 6', function() {
//     expect(this.component.props().photos).to.be.instanceof(Array);
//     expect(this.component.props().photos).to.have.lengthOf(6);
//   });
//
//   it('renders 1 div with className of thumbnailContainer', function() {
//     expect(this.component.props().currentImage).to.contain.all.keys(['id', 'url', 'thumb_url', 'date', 'title', 'location']);
//   });
