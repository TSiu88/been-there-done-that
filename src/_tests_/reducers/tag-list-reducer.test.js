import tagListReducer from '../../reducers/tag-list-reducer';

describe('tagListReducer', () => {
  test('Should return default state if no action type passed into reducer', () => {
    expect(tagListReducer({}, {type: null})).toEqual({});
  });
});