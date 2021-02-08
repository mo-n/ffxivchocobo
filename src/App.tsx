import React from "react";
import { Switch, Route } from "react-router-dom";
import Calculator from "components/calculator";
import Results from "components/results";
import { ReactComponent as Home } from "assets/home.svg";
import 'App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex">
        <span><Home /></span>
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
