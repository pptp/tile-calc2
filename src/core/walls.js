import Immutable, {Map, List} from "immutable"

export function init() {
  return Immutable.fromJS({
    editableWall: null,
    editableWallIndex: null,
    walls: [],
    tiles: [
      {
        id: 1,
        name: "adolf",
        size: {
          width: 150,
          height: 300
        }
      },
      {
        id: 2,
        name: "josef",
        size: {
          width: 300,
          height: 300
        }
      }
    ]

    /*
      walls: List.of(
        Map({
          name: 'Моя любимая стена',
          size: Map({
            width: 1500,
            height: 2000
          })
        }),
        Map({
          name: 'Моя нелюбимая стена',
          size: Map({
            width: 750,
            height: 1000
          }),

          // bars
          bars: List.of(
            Map({
              name: "Вентиляция",
              position: Map({
                width: 100,
                height: 100,
                top: 50,
                left: 50
              })
            })
          ),

          // tileMap
          tileMap: List.of(
            Map({
              tileId: 1,
              count: 2
            })
          )

          // tiles
          tiles: List.of(
            Map({
              tileId: 1,
              position: Map({
                top: 100,
                left: 100
              }),
              bars: List.of(
                Map({x: 25, h: 25, w: 25, y: 25})
              ),
            }),
            Map({
              tileId: 1,
              position: Map({
                top: 100,
                left: 200
              }),
              bars: List.of(
                Map({x: 5, h: 5, w: 5, y: 5})
              ),
            })
          ),

        }),
      ),

      tiles: List.of(
        Map({
          id: 1,
          name: 'adolf',
          size: Map({
            width: 150,
            height: 300
          })
        }),
        Map({
          id: 2,
          name: 'josef',
          size: Map({
            width: 300,
            height: 300
          })
        })
      ),
    */
  });
}

function checkWall(_wall = {}) {
  return Object.assign({
    name: "",
    size: {
      width: 0,
      height: 0
    },
    bars: [],
    tileMap: [],
    tile: []
  }, _wall);
}

export function addWall(state, payload) {
  let {wall: _wall} = payload;
  const _iWall = Immutable.fromJS(checkWall(_wall));
  return state.update("walls", walls => walls.push(_iWall));
}

export function editWall(state, payload) {
  const {
    wallIndex: _wallIndex,
    wall: _wall
  } = payload;

  return state.update("walls", walls => {
    return walls.update(_wallIndex, wall => {
      return wall.mergeDeep(Immutable.fromJS(_wall))
    });
  });
}

export function removeWall(state, payload) {
  const {wallIndex: _wallIndex} = payload;
  return state.update("walls", walls => walls.delete(_wallIndex));
} 



export function setNewEditableWall(state, payload) {
  const wall = Immutable.fromJS(checkWall())

  state = state.update("editableWall", () => wall);
  state = state.update("editableWallIndex", () => 0);

  return state;
}

export function setEditableWall(state, payload) {
  const {wallIndex: _wallIndex} = payload;

  const editWall = state.get("walls").get(_wallIndex);

  state = state.update("editableWall", () => editWall);
  state = state.update("editableWallIndex", () => _wallIndex);

  return state;
}


export function cancelEditWall(state, payload) {
  state = state.update("editableWall", () => null)
  state = state.update("editableWallIndex", () => null)

  return state
}

export function saveEditableWall(state, payload) {
  const _wallIndex = (payload.wallIndex == undefined) ?
    state.get('edit') :
    payload.wallIndex;


  const wall = state.get('editableWall')
  if (!wall) {
    return state
  }

  return state.update("walls", walls => 
    walls.set(_wallIndex, wall));
}


