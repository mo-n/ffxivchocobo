import React from "react";
import { Switch, Route } from "react-router-dom";
import Calculator from "components/calculator";
import Results from "components/results";
import Header from "components/header";
import 'App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-screen-sm mx-auto px-4 md:px-0">
        <h1 className="text-2xl mt-6 mb-8">FFXIV 陆行鸟染色计算器</h1>
        <Switch>
          <Route exact path="/" render={(props) => <Calculator />} />
          <Route exact path="/:from/:to" render={(props) => <Results/>} />
        </Switch>
        <div className="h-1"></div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
