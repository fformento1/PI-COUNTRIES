export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";

export const getAllCountries = () => (dispatch) => {
  return fetch("http://localhost:3001/countries")
    .then((data) => data.json())
    .then((data) =>
      dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data,
      })
    )
    .catch((err) => console.log(err.message));
};

export const getCountry = (id) => (dispatch) => {
  return fetch(`http://localhost:3001/countries/${id}`)
    .then((data) => data.json())
    .then((data) =>
      dispatch({
        type: GET_COUNTRY,
        payload: data,
      })
    )
    .catch((err) => console.log(err.message));
};

export const getCountryByName = (name) => (dispatch) => {
  return fetch(`http://localhost:3001/countries?name=${name}`)
    .then((data) => data.json())
    .then((data) =>
      dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: data,
      })
    )
    .catch((err) => console.log(err.message));
};

export const createActivity = () => (dispatch) => {
  return fetch("http://localhost:3001/activities")
    .then((data) => data.json())
    .then((data) =>
      dispatch({
        type: CREATE_ACTIVITY,
        payload: data,
      })
    )
    .catch((err) => console.log(err.message));
};

export const getAllActivities = () => (dispatch) => {
  return fetch("http://localhost:3001/activities")
    .then((data) => data.json())
    .then((data) =>
      dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: data,
      })
    )
    .catch((err) => console.log(err.message));
};
