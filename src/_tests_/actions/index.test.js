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

  it('addTag should create ADD_OR_UPDATE_TAG action', () => {
    expect(actions.addOrUpdateTag({
      tagStatus: true,
      nickName: "nick one",
      placeName: "place name",
      description: "tester place desc",
      address: "123 Street",
      coordinates: "xxx,yyy",
      personalNote: "testing testing",
      id: 1
    })).toEqual({
      type: 'ADD_OR_UPDATE_TAG',
      tagStatus: true,
      nickName: "nick one",
      placeName: "place name",
      description: "tester place desc",
      address: "123 Street",
      coordinates: "xxx,yyy",
      personalNote: "testing testing",
      id: 1
    });
  });
});