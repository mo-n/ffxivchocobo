import React from "react";
import { Switch, Route } from "react-router-dom";
import Calculator from "components/calculator";
import Results from "components/results";

function App() {
  return (
    <div>
      <header></header>
      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Calculator />} />
          <Route exact path="/:from/:to" render={(props) => <Results/>} />
        </Switch>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
