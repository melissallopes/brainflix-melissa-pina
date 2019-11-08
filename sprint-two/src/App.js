import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";

import Upload from "./components/Upload";
import Content from "./components/Content";

function App() {
  return (
    <>
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
            path="/:id"
            render={props => {
              return <Content id={props.match.url.slice(1)} />;
            }}
          ></Route>
          <Route path="/Upload" component={Upload}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
