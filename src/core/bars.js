import Immutable, { Map, List } from "immutable"

function init() {
  return Immutable.fromJS({
    name: "",
    position: {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
    }
  });
}


export function addBar(state, payload) {
  let {bar: _bar} = payload;

  _bar = init().mergeDeep(Immutable.fromJS(_bar))

  return state.update("editableWall", wall => 
    wall.update("bars", bars => bars.push(_bar)));
}

export function editBar(state, payload) {
  const {
    barIndex: _barIndex,
    bar: _bar
  } = payload

  return state.update("editableWall", wall => 
    wall.update("bars", bars =>
      bars.update(_barIndex, bar => bar.mergeDeep(_bar))
  ))
}

export function removeBar(state, payload) {
  const {barIndex: _barIndex} = payload

  return state.update("editableWall", wall =>
    wall.update("bar", bars => bars.delete(_barIndex))
  )

}