import React from "react";
import { Switch, Route } from "react-router-dom";
import Calculator from "components/calculator";
import Results from "components/results";
import 'App.css';

function App() {
  return (
    <div className="bg-gray-200">
      <header></header>
      <main className="max-w-screen-sm mx-auto">
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
