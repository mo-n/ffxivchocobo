import { useState } from 'react';
import Tabs from "components/tabs";
import Select from "components/select";
import { useHistory } from "react-router-dom";

function Calculator() {
  const [ fromColour, setFromColour ] = useState('desert-yellow')
  const [ toColour, setToColour ] = useState('snow-white')
  let history = useHistory();

  const handleClick = function () {
    history.push(`/${fromColour}/${toColour}`);
  }

  return (
    <div className="max-w-screen-sm mx-auto">
      <form onSubmit={() => (false)}>
        <Select label="当前颜色" name="from-colour" selected={fromColour} updateColour={setFromColour} />
        <Tabs label="选中你想要的颜色" selected={toColour} updateColour={setToColour} />
        <Select label="目标颜色" name="to-colour" selected={toColour} updateColour={setToColour} />
        <button onClick={handleClick} className="w-full px-3 py-2 border rounded-md focus:outline-none bg-indigo-500 text-white">计算</button>
      </form>
    </div>
  );
}

export default Calculator;
