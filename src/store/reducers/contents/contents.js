import Store from '../../store/contents';

export const initialState = Store;

export default function contentsReducer(state = initialState, action) {
  switch (action.type) {
    case 'CONTENTS_COMPONENTS': {
      if (action.data) {
        return {
          ...state,
          components: action.data
        };
      }
      return initialState;
    }
    case 'CONTENTS_STYLE': {
      if (action.data) {
        return {
          ...state,
          style: action.data
        };
      }
      return initialState;
    }

    default:
      return state;
  }
}