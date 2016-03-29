import expect from 'expect';
import deepFreeze from 'deep-freeze';
import album from './../reducers/album';
import * as actions from './../actions/index';
import * as albumJSON from './../../../gallery.json';

describe('album reducer', () => {
  it('should provide the initial state', () => {
    expect(album(undefined, {})).toEqual({});
  });

  it('should handle LOAD_ALBUM_REQUEST action', () => {
    const stateBefore = {};
    const action = actions.requestAlbumData();
    const stateAfter = {
      'error': null,
      'loadedAlbum': false,
      'loadingAlbum': true,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(album(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle LOAD_ALBUM_SUCCESS action', () => {
    const stateBefore = {
      'error': null,
      'loadedAlbum': false,
      'loadingAlbum': true,
    };
    const action = actions.receiveAlbumData(albumJSON);
    const stateAfter = {
      'error': null,
      'loadedAlbum': true,
      'loadingAlbum': false,
      'photos': albumJSON.photos,
      'albumName': 'Around the World',
      'currentImage': albumJSON.photos[0],
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(album(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle LOAD_ALBUM_ERROR action', () => {
    const stateBefore = {
      'error': null,
      'loadedAlbum': false,
      'loadingAlbum': true,
    };
    const action = actions.errorLoadingAlbum(albumJSON);

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(album(stateBefore, action).error).toNotBe(null);
  });

  it('should handle UPDATE_CURRENT_IMAGE action', () => {
    const stateBefore = {
      'currentImage': {
        date: 'December 15, 2009',
        id: '1',
        location: 'the Rocky Mountain',
        thumb_url: 'test_images/thumb1.jpg',
        title: 'Mountain Tunnel',
        url: 'test_images/image1.jpg',
      },
      'photos': albumJSON.photos,
    };
    const action = actions.updateCurrentImage(3);
    const stateAfter = {
      'currentImage': {
        date: 'February 26, 2008',
        id: '3',
        location: 'Paris, France',
        thumb_url: 'test_images/thumb3.jpg',
        title: 'Tree-lined Drive',
        url: 'test_images/image3.jpg',
      },
      'photos': albumJSON.photos,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(album(stateBefore, action)).toEqual(stateAfter);
  });

});
