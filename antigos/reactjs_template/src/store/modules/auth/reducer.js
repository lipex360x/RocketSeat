import produce from 'immer';

const INITIAL_STATE = {
  message: null,
  signed: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.message = action.payload.message;
        draft.signed = true;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.message = 'Usuário Deslogado';
        draft.signed = null;
        break;
      }

      default:
    }
  });
}
