import { useRouteMatch, match } from "react-router-dom";
import Calculator from "calculator";
import fruitsList, { Fruit } from "data/fruits";
import { colours } from "data/colours";
import { ReactComponent as Right } from "assets/right.svg";
import { ReactComponent as ChevronDown } from "assets/chevron-down.svg";
import { ReactComponent as ChevronRight } from "assets/chevron-right.svg";
import { useState } from "react";

interface MatchParams {
  from: string;
  to: string;
}

function Results() {
  const match = useRouteMatch("/:from/:to") as match<MatchParams>;
  const [toggle, setToggle] = useState(false);

  const { from, to } = match.params;
  const fromColor = colours.get(from)!,
    toColor = colours.get(to)!;

  const Calc = new Calculator(from, to);
  const { fruits, order } = Calc.calc();

  const handleToggle = function (
    event: React.SyntheticEvent<HTMLElement, Event>
  ) {
    const target = event.target as (EventTarget & {open: boolean});
    setToggle(target.open)
  };

  return (
    <div>
      <p
        className="font-serif text-shadow-md font-extrabold text-4xl"
        style={{ textShadow: "1px 1px 1px #515151" }}
      >
        <span
          style={{ color: `rgb(${fromColor.R} ${fromColor.G} ${fromColor.B})` }}
        >
          {fromColor.label}
        </span>
        <Right className="inline-block w-10 h-10 align-text-bottom" />
        <span style={{ color: `rgb(${toColor.R} ${toColor.G} ${toColor.B})` }}>
          {toColor.label}
        </span>
      </p>
      <p className="my-3">一次性喂入以下食物改变陆行鸟的颜色</p>
      <ul>
        {Array.from(fruits.entries()).map(([fruitkey, number]) => {
          const fruitname = Fruit[fruitkey];
          const fruit = fruitsList.get(fruitkey)!;

          if (number > 0) {
            return (
              <li key={fruitkey} className="text-base font-medium mb-2">
                <img
                  src={`/fruits/${fruitname}.png`}
                  className="inline-block w-6 h-6 rounded-md mr-2 relative -top-0.5"
                  alt={fruitname}
                />
                <span className="underline text-blue-500">
                  <a
                    href={`https://ff14.huijiwiki.com/wiki/物品:${fruit["zh-hans"]}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {fruit["zh-hans"]}
                  </a>
                </span>
                <span className="px-2">x</span>
                <span className="">{number}</span>
              </li>
            );
          }
          return null;
        })}
      </ul>
      <div>
        <img className="mx-auto my-10" src={`/colours/${to}.png`} alt="" />
      </div>
      <div className="prose">
        <p className="my-2">
          <b>提示</b>
        </p>
        <p className="my-2 text-gray-700">
          每次喂食必定成功，即RGB值产生变化，但是要注意RGB中某一值若超过255或低于0，染色失败。
          <br />
        </p>
        <p className="my-2 text-gray-700">
          若RGB其中任意值超过255或者低于0，则此次染色失败，6小时后陆行鸟不会变色。因此，玩家喂果实的顺序至关重要。
        </p>
        <p className="my-2 text-gray-700">
          喂食中如果出现错误，玩家可以让陆行鸟离开陆行鸟房以取消之前所有喂下的果实的效果。
          <br />
          再次喂食时，陆行鸟会进入全新的6小时换羽期。
        </p>
        <p className="my-2 text-gray-700">注：喂陆行鸟拉札罕柠檬可使其变回沙漠黄。</p>
      </div>
      <details onToggle={handleToggle}>
        <summary className="flex items-center relative justify-center mt-4 mx-auto bg-blue-500 rounded-md text-white list-none focus:outline-none cursor-pointer text-center w-full py-2">
          <span className="flex-auto">推荐喂食顺序</span>
          {
            toggle ? <ChevronRight className="absolute right-3 w-4 h-4" /> : <ChevronDown className="absolute right-3 w-4 h-4" />
          }
        </summary>
        <ul className="mt-4">
          {order.map((fruitKey, index) => {
            const fruit = fruitsList.get(fruitKey)!;
            const fruitname = Fruit[fruitKey];
            return (
              <ol key={index}>
                <input
                  type="checkbox"
                  name={`${fruitname}-${index}`}
                  id={`${fruitname}-${index}`}
                  className="absolute hidden fruit-checkout"
                />
                <label
                  htmlFor={`${fruitname}-${index}`}
                  className="bg-white py-2 px-4 mb-1 flex rounded-sm shadow-md hover:bg-gray-200 cursor-pointer"
                >
                  <img
                    src={`/fruits/${fruitname}.png`}
                    className="block w-6 h-6 rounded-md"
                    alt=""
                  />
                  <span className="relative ml-4">{fruit["zh-hans"]}</span>
                </label>
              </ol>
            );
          })}
        </ul>
      </details>
    </div>
  );
}

export default Results;
