import expect from 'expect';
import deepFreeze from 'deep-freeze';
import album from './../reducers/album';
import * as actions from './../actions/index';
import * as albumJSON from './../../../gallery.json';

describe('todos reducer', () => {
  it('should provide the initial state', () => {
    expect(
      album(undefined, {})
    ).toEqual({})
  });

  it('should handle LOAD_ALBUM_REQUEST action', () => {
    const stateBefore = {};

    const action = actions.requestAlbumData();

    const stateAfter = {
      'error': null,
      'loadedAlbum': false,
      'loadingAlbum': true,
    };

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(album(stateBefore, action)).toEqual(stateAfter)
  });

  it('should handle UPDATE_CURRENT_IMAGE action', () => {
    const stateBefore = {
      'currentImage': {
        date: 'December 15, 2009',
        id: '1',
        location: 'the Rocky Mountain',
        thumb_url: 'test_images/thumb1.jpg',
        title: 'Mountain Tunnel',
        url: 'test_images/image1.jpg'
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

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(album(stateBefore, action)).toEqual(stateAfter)
  });

});
