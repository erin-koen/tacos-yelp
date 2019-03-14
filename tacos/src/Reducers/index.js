import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOG_OUT
} from "../Actions/LoginAndSignup";
import {
  FETCHING_RESTAURANTS,
  RESTAURANT_SUCCESS,
  FETCHING_REVIEWS,
  REVIEW_SUCCESS
} from "../Actions/DataFetching";

const initialState = {
  restaurants: [],
  reviews: [],
  loggedIn: false,
  loggingIn: false,
  signingUp: false,
  fetchingTacos: true,
  error: null,
  token: localStorage.getItem('jwt'),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: null,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        token: action.payload
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case SIGNUP_START:
      return {
        ...state,
        error: null,
        signingUp: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
        signingUp: false,
        loggedIn: true,
        token: action.payload
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      };
    case FETCHING_RESTAURANTS:
      return {
        ...state,
        fetchingTacos: true
      };
    case RESTAURANT_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        fetchingTacos: false,
        restaurants: action.payload,
        reviews: []
      };
    case FETCHING_REVIEWS:
      return {
        ...state,
        fetchingReviews: true
      };
    case REVIEW_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
        fetchingReviews: false
      };
    case LOG_OUT:
      return {
        ...state,
        loggedIn: false,
        token: null
      };
    default:
      return state;
  }
};

export default reducer;
