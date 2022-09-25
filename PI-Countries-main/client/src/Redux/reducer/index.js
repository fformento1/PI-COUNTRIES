import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY,
  GET_COUNTRY_BY_NAME,
  CREATE_ACTIVITY,
  GET_ALL_ACTIVITIES,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
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
        countries: action.payload,
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
    case FILTER_BY_CONTINENT:
      const allCountries = state.allCountries;
      let countriesFiltered = [];
      if (action.payload === "All continents") {
        countriesFiltered = allCountries;
      } else {
        countriesFiltered = allCountries.filter(
          (el) => el.continents === action.payload
        );
      }

      return {
        ...state,
        countries: countriesFiltered,
      };
    case FILTER_BY_ACTIVITY:
      const countriesActivities = state.allCountries;
      let countriesActivitiesFiltered = [];
      if (action.payload === "All activities") {
        countriesActivitiesFiltered = countriesActivities;
      } else {
        countriesActivitiesFiltered = countriesActivities.filter((el) => {
          for (let i = 0; i < el.activities.length; i++) {
            if (el.activities[i].name === action.payload) {
              return true;
            }
          }
        });
      }
      return {
        ...state,
        countries: countriesActivitiesFiltered,
      };
    default:
      return state;
  }
};

export default rootReducer;
