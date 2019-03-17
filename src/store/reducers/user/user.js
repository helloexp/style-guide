import Store from '../../store/user';

export const initialState = Store;

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN': {
      if (action.data) {
        return {
          ...state,
          login: action.data
        };
      }
      return initialState;
    }

    default:
      return state;
  }
}