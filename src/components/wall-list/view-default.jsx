import React, { PropTypes, Component } from "react"
import { Map, List } from "immutable"
import ReactDOM from "react-dom"

import Slider from "react-motion-slider"
import Wall from "../wall"
import WallAdd from "../wall-add"

require("../../styles/slider.less")
import style from "./styles.less"

const wallMaxWidth = 200;

export default class Presentation extends Component {

  updateZoom(props = this.props) {
    const slider = $(ReactDOM.findDOMNode(this.refs.slider))

    const maxHeight = slider.height()
    const maxWidth = wallMaxWidth;

    const walls = props.walls

    const zoom = walls.count() ? walls.reduce((zoom, wall) => {
      const size = wall.get("size").toJS()
      const currentZoom = Math.min(maxWidth / size.width, maxHeight / size.height)
      return zoom ? Math.min(zoom, currentZoom) : currentZoom
    }, false) : 1;

    this.setState({ zoom: zoom })
  }

  updateDimensions() {
    this.setState({
      screen: {
        width: $(window).width(),
        height: $(window).height()
      }
    })
    this.updateZoom()
  }

  componentWillMount() {
    this.updateDimensions.call(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this))
    this.updateZoom()
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this))
  }
  componentWillReceiveProps(nextProps) {
    this.updateZoom(nextProps)
  }

  constructor(props) {
    super(props);
    this.state = {
      zoom: 1,
      screen: {
        width: $(window).width(),
        height: $(window).height()
      }
    }
  }


  render() {
    const {
      addWall,
      editWall,
      walls
    } = this.props

    const slidesToShow = Math.max(1, Math.floor(this.state.screen.width / wallMaxWidth));

    return <div className={style.container} ref="slider">
      <Slider autoHeight={true}
          slidesToShow={slidesToShow}>
        { walls.map((wall, i) => <li className={style.slide + " slide"} key={`wall=${i}`}>
          <Wall onSubmit={editWall}
              editable={false}
              zoom={this.state.zoom}
              wall={wall}
              wallKey={i}
          />
        </li>)}
        <li className={style.slide + " slide"}>
          <WallAdd onAdd={addWall} />
        </li>
      </Slider>
    </div>
  }
}

Presentation.propTypes = {
  walls: PropTypes.instanceOf(List).isRequired,

  editWall: PropTypes.func.isRequired,
  addWall: PropTypes.func.isRequired,
}