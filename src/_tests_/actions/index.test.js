import * as actions from './../../actions';

describe('actions', () => {
  it('deleteTag should create DELETE_TICKET action', () => {
    expect(actions.deleteTag(1)).toEqual({
      type: 'DELETE_TAG',
      id: 1
    });
  });

  it('toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

});