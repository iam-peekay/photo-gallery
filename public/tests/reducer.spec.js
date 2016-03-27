import expect from 'expect';
import deepFreeze from 'deep-freeze';
import album from './../reducers/album';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      album(undefined, {})
    ).toEqual([])
  })
});
