export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";

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

export const createActivity = (activity) => (dispatch) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(activity),
  };
  return fetch("http://localhost:3001/activities", options)
    .then((data) =>
      alert("Congratulations! Your activity has been successfully created.")
    )
    .catch((err) => alert(err.message));
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

export const filterByContinent = (payload) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
};

export const filterByActivity = (payload) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderByPopulation = (payload) => {
  return {
    type: ORDER_BY_POPULATION,
    payload,
  };
};
