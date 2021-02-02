import React from 'react';
import Tabs from 'components/tabs';
import Select from 'components/select';
import Calculator from './Calculator';
import './App.css';

function App() {
  return (
    <div>
      <Select></Select>
      <Tabs></Tabs>
      <button className="w-full px-3 py-2 border rounded-md focus:outline-none bg-indigo-500 text-white">计算</button>
    </div>
  );
}

export default App;
