import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Upload from "./components/Upload";
import Content from "./components/Content";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Content id="1af0jruup5gu" />;
              }}
            ></Route>
            <Route
              path="/Upload"
              render={props => {
                return <Upload id={props.match.url.slice(1)} />;
              }}
            ></Route>
            <Route
              path="/:id"
              render={props => {
                return <Content id={props.match.url.slice(1)} />;
              }}
            ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
