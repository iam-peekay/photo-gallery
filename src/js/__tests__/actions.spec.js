import expect from 'expect';
import * as actions from './../actions/index';
import * as ActionTypes from './../constants/ActionTypes';
import * as albumJSON from './../../../gallery.json';

describe('album actions', function() {
  it('requestAlbumData should create LOAD_ALBUM_REQUEST action', function() {
    expect(actions.requestAlbumData()).toEqual({
      type: ActionTypes.LOAD_ALBUM_REQUEST,
    });
  });

  it('receiveAlbumData should create LOAD_ALBUM_SUCCESS action', function() {
    expect(actions.receiveAlbumData(albumJSON)).toEqual({
      type: ActionTypes.LOAD_ALBUM_SUCCESS,
      albumName: albumJSON.album.name,
      photos: albumJSON.photos,
    });
  });

  it('errorLoadingAlbum should create LOAD_ALBUM_ERROR action', function() {
    const error = { error: 'Mock error' };
    expect(actions.errorLoadingAlbum(error)).toEqual({
      type: ActionTypes.LOAD_ALBUM_ERROR,
      error: error,
    });
  });

  it('updateCurrentImage should create UPDATE_CURRENT_IMAGE action', function() {
    const id = '3';
    expect(actions.updateCurrentImage(id)).toEqual({
      type: ActionTypes.UPDATE_CURRENT_IMAGE,
      id,
    });
  });
});
