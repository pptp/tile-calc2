import {
  UPDATE_TILES,
  ADD_TILE_TO_WALL,
  REMOVE_TILE_FROM_WALL
} from "./consts.js"


export function addTileToWall(payload) {
  return dispatch => {
    dispatch({type: ADD_TILE_TO_WALL, payload: payload});
    dispatch({type: UPDATE_TILES, payload: payload});
  }
}

export function removeTileFromWall(payload) {
  return dispatch => {
    dispatch({type: REMOVE_TILE_FROM_WALL, payload: payload});
    dispatch({type: UPDATE_TILES, payload: payload});
  }
}