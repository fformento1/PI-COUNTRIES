import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY,
  GET_COUNTRY_BY_NAME,
  CREATE_ACTIVITY,
  GET_ALL_ACTIVITIES,
} from "../actions";

const initialState = {
  country: {},
  countries: [],
  allCountries: [],
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        country: action.payload,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
