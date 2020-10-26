import produce from 'immer';

const INITIAL_STATE = {};

export default function search(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      // case '@search/##ACTION_SUCCESS##':{
      // draft.STATE = action.payload.VALUE;
      // break;
      // }

      default:
    }
  });
}
