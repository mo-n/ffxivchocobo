import React from "react";
import { Switch, Route } from "react-router-dom";
import Calculator from "components/calculator";
import Results from "components/results";
import 'App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header>

      </header>
      <main className="max-w-screen-sm mx-auto">
        <h1>陆行鸟染色计算器</h1>
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
