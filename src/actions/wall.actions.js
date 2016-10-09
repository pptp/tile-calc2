import {
  SET_EDITABLE_WALL,
  SET_EDITABLE_NEW_WALL,
  CANCEL_EDIT_WALL,
  SAVE_WALL,

  ADD_WALL,
  EDIT_WALL,
  REMOVE_WALL,
  
  UPDATE_TILES,
} from "./consts"

export function setEditableWall(payload) {
  return {type: SET_EDITABLE_WALL, payload: payload}
}
export function setNewEditableWall(payload) {
  return {type: SET_EDITABLE_NEW_WALL, payload: payload}
}
export function cancelEditWall(payload) {
  return {type: CANCEL_EDIT_WALL, payload: payload}
}


export function addWall(payload) {
  return dispatch => {
    dispatch({type: ADD_WALL, payload: payload});
  }
}
export function editWall(payload) {
  return dispatch => {
    dispatch({type: EDIT_WALL, payload: payload});
    dispatch({type: UPDATE_TILES, payload: payload});
  }
}
export function removeWall(payload) {
  return dispatch => {
    dispatch({type: REMOVE_WALL, payload: payload});
  }
}

export function saveWall(payload) {
  return dispatch => 
    dispatch({type: SAVE_WALL, payload})
}
