import user from './user/user';
import contents from './contents/contents';
const rehydrated = (state = false, action) => {
    switch (action.type) {
      case 'persist/REHYDRATE':
        return true;
      default:
        return state;
    }
  };

  export default {
      rehydrated,
      user,
      contents
  }