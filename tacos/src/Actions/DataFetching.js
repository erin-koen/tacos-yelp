import axios from "axios";

export const FETCHING_RESTAURANTS = "FETCHING_RESTAURANTS";
export const RESTAURANT_SUCCESS = "RESTAURANT_SUCCESS";
export const FETCHING_REVIEWS = "FETCHING_REVIEWS";
export const REVIEW_SUCCESS = "REVIEW_SUCCESS";

export const getRestaurants = () => dispatch => {
  // get request from server for tacos data
  dispatch({ type: FETCHING_RESTAURANTS });

  const endpoint = "https://yelpfeelers-server.herokuapp.com/api/restaurants";

  return axios
    .get(endpoint, { headers: { Authorization: localStorage.getItem("jwt") } })
    .then(res =>
      dispatch({
        type: RESTAURANT_SUCCESS,
        payload: res.data.sort((a, b) => (a.true_score < b.true_score ? 1 : (a.true_score===b.true_score) ? ((a.name > b.name) ? 1 : -1) : -1))
      })
    )
    .catch(err => console.log(err));
};

export const getReviews = id => dispatch => {
  // get request from server for tacos data
  dispatch({ type: FETCHING_REVIEWS });

  const endpoint =
    "https://yelpfeelers-server.herokuapp.com/api/restaurants/" +
    id +
    "/reviews";

  return axios
    .get(endpoint, { headers: { Authorization: localStorage.getItem("jwt") } })
    .then(res => dispatch({ type: REVIEW_SUCCESS, payload: res.data.reviews }))
    .catch(err => console.log(err));
};

//

export const sortByAdju = () => dispatch => {
  dispatch({ type: FETCHING_RESTAURANTS });

  const endpoint = "https://yelpfeelers-server.herokuapp.com/api/restaurants";

  return axios
    .get(endpoint, { headers: { Authorization: localStorage.getItem("jwt") } })
    .then(res =>
      dispatch({
        type: RESTAURANT_SUCCESS,
        payload: res.data.sort((a, b) => (a.adju_score < b.adju_score ? 1 : (a.adju_score===b.adju_score) ? ((a.name > b.name) ? 1 : -1) : -1))
      })
    )
    .catch(err => console.log(err));
}