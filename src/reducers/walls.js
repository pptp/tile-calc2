import {
  ADD_WALL,
  EDIT_WALL,
  REMOVE_WALL,

  SET_EDITABLE_WALL,
  SET_EDITABLE_NEW_WALL,
  CANCEL_EDIT_WALL,

  ADD_BAR,
  EDIT_BAR,
  REMOVE_BAR,

  UPDATE_TILES,
  ADD_TILE_TO_WALL,
  REMOVE_TILE_FROM_WALL,
} from "../actions/consts.js"

import {
  init,
  addWall,
  editWall,
  
  removeWall,
  setEditableWall,
  setNewEditableWall,
  cancelEditWall,
  saveEditableWall
} from "../core/walls"

import {
  updateTiles,
  addTileToWall,
  removeTileFromWall,
} from "../core/tiles"

import {
  addBar,
  editBar,
  removeBar,
} from "../core/bars"


const initialState = init()

export default function walls(state = initialState, action) {
  const callbacks = {
    ADD_WALL:               addWall,
    EDIT_WALL:              editWall,
    REMOVE_WALL:            removeWall,

    SET_EDITABLE_NEW_WALL:  setNewEditableWall,
    SET_EDITABLE_WALL:      setEditableWall,
    CANCEL_EDIT_WALL:       cancelEditWall,
    
    ADD_WALL:               addWall,
    EDIT_WALL:              editWall,
    REMOVE_WALL:            removeWall,
    
    ADD_BAR:                addBar,
    EDIT_BAR:               editBar,
    REMOVE_BAR:             removeBar,
    
    UPDATE_TILES:           updateTiles,
    ADD_TILE_TO_WALL:       addTileToWall,
    REMOVE_TILE_FROM_WALL:  removeTileFromWall,
  };

  const callback = callbacks[action.type]
  if (callback) {
    return callback.call(this, state, action.payload);
  }

  return state;
}