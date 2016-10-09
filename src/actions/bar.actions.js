import {
  SAVE_WALL,

  ADD_BAR,
  EDIT_BAR,
  REMOVE_BAR,
  
  UPDATE_TILES,
} from "./consts"


export function addBar(payload) {
  return dispatch => {
    dispatch({type: ADD_BAR, payload: payload});
    dispatch({type: UPDATE_TILES, payload: payload});
  }
}
export function editBar(payload) {
  return dispatch => {
    dispatch({type: EDIT_BAR, payload: payload});
    dispatch({type: UPDATE_TILES, payload: payload});
  }
}
export function removeBar(payload) {
  return dispatch => {
    dispatch({type: REMOVE_BAR, payload: payload});
    dispatch({type: UPDATE_TILES, payload: payload});
  }
}
