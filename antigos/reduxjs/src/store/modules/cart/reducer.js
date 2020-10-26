import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, (draft) => {
        // check that the submitted ID exists in the product array
        const prodIndex = draft.findIndex((p) => p.id === action.prod.id);

        if (prodIndex >= 0) {
          draft[prodIndex].amount += 1;
        } else {
          draft.push({
            ...action.prod,
            amount: 1,
          });
        }
      });

    case '@cart/REMOVE': {
      return produce(state, (draft) => {
        const prodIndex = draft.findIndex((p) => p.id === action.id);
        if (prodIndex >= 0) {
          draft.splice(prodIndex, 1);
        }
      });
    }

    case '@cart/CLEAR_CART': {
      return produce(state, (draft) => {
        draft.length = 0;
      });
    }

    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, (draft) => {
        const prodIndex = draft.findIndex((p) => p.id === action.id);

        if (prodIndex >= 0) {
          draft[prodIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
