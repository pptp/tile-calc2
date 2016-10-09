require("normalize.css/normalize.css");
require("styles/main.less");

import React from "react";
import { Map, List } from "immutable"

import Layout from "./layout"
import PageListing from "./pages/listing"
import PageWallAdd from "./pages/wall.add"

import { Router, Route, IndexRoute, browserHistory } from "react-router"

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={PageListing} />
        <Route path="wall/add" component={PageWallAdd} />
      </Route>
    </Router>
    
  }
}

MainComponent.defaultProps = {
};

