import { useState } from 'react';
import Tabs from "components/tabs";
import Select from "components/select";
import { useHistory } from "react-router-dom";

function Calculator() {
  const [ fromColour, setFromColour ] = useState('desert-yellow')
  const [ toColour, setToColour ] = useState('snow-white')
  let history = useHistory();

  const handleClick = function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();
    history.push(`/${fromColour}/${toColour}`);
  }

  return (
    <div className="max-w-screen-sm mx-auto">
      <form>
        <p className="my-1">根据以下表单计算从当前颜色到目标颜色所需要的陆行鸟果实</p>
        <Select label="当前颜色" name="from-colour" selected={fromColour} updateColour={setFromColour} />
        <Tabs label="选中你想要的颜色" selected={toColour} updateColour={setToColour} />
        <img className="mx-auto" src={`${process.env.PUBLIC_URL}/colours/${toColour}.png`} alt={toColour} />
        <Select label="目标颜色" name="to-colour" selected={toColour} updateColour={setToColour} />
        <button onClick={handleClick} className="w-full mt-6 px-3 py-2 border rounded-md focus:outline-none bg-blue-500 text-white">计算</button>
      </form>
    </div>
  );
}

export default Calculator;
