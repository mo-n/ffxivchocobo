import React from "react";
import { Routes, Route } from "react-router-dom";
import Calculator from "components/calculator";
import Results from "components/results";
import Header from "components/header";
import 'App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-screen-sm mx-auto px-4 sm:px-2">
        <h1 className="text-2xl mt-6 mb-8">FFXIV 陆行鸟染色计算器</h1>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/:from/:to" element={<Results/>} />
        </Routes>
      </main>
      <footer className="text-center text-sm text-gray-500 my-2">
        <p>最终幻想14陆行鸟染色计算器<span className="px-1">·</span>
          <a href="https://github.com/mo-n/ffxivchocobo/blob/master/LICENSE.txt" target="_blank" rel="noreferrer">License</a><span className="px-1">·</span>
          <a href="https://github.com/mo-n/ffxivchocobo" target="_blank" rel="noreferrer">Code</a>
        </p>
      </footer>
      <div className="h-1"></div>
    </div>
  );
}

export default App;
