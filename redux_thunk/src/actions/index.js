import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchUsersPosts = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const users = _.uniq(_.map(getState().posts, "userId"));
    users.forEach((id) => dispatch(fetchUser(id)));
  };
};

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: res.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: res.data,
  });
};

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: res.data,
//   });
// });
