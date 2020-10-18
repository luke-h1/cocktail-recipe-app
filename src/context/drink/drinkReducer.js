import { SEARCH_DRINKS, SET_LOADING, GET_DRINK, CLEAR_DRINKS } from '../types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;

    case GET_DRINK:
      return {
        ...state,
        drinks: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_DRINKS:
      return {
        ...state, 
        drinks: action.payload,
        loading: false,
      };

    case CLEAR_DRINKS:
      return {
        ...state,
        drinks: '',
        loading: false,
      };
  }
};
