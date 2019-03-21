import Store from '../../store/contents';

export const initialState = Store;

export default function contentsReducer(state = initialState, action) {
  switch (action.type) {
    case 'CONTENTS_DATA': {
      if (action.data) {
        return {
          ...state,
          contents: action.data
        };
      }
      return initialState;
    }


    default:
      return state;
  }
}