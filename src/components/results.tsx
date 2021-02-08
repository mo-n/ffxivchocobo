import { useRouteMatch, match } from "react-router-dom";
import Calculator from "calculator";
import fruitsList, { Fruit } from "data/fruits";
import { colours } from "data/colours";
import { ReactComponent as Right } from "assets/right.svg";

interface MatchParams {
  from: string;
  to: string;
}

function Results() {
  const match = useRouteMatch("/:from/:to") as match<MatchParams>;

  const { from, to } = match.params;
  const fromColor = colours.get(from)!,
    toColor = colours.get(to)!;

  const Calc = new Calculator(from, to);
  const { fruits, order } = Calc.calc();

  return (
    <div>
      <p
        className="font-serif text-shadow-md font-extrabold text-4xl"
        style={{ textShadow: "1px 1px 1px #515151" }}
      >
        <span
          style={{ color: `rgb(${fromColor.r} ${fromColor.g} ${fromColor.b})` }}
        >
          {fromColor.label}
        </span>
        <Right className="inline-block w-10 h-10" />
        <span style={{ color: `rgb(${toColor.r} ${toColor.g} ${toColor.b})` }}>
          {toColor.label}
        </span>
      </p>
      <p>一次性喂入以下食物改变陆行鸟的颜色</p>
      <ul>
        {Array.from(fruits.entries()).map(([fruitkey, number]) => {
          const fruitname = Fruit[fruitkey];
          const fruit = fruitsList.get(fruitkey)!;

          if (number > 0) {
            return (
              <li key={fruitkey} className="align-bottom text-base font-medium">
                <img
                  src={`/fruits/${fruitname}.png`}
                  className="inline-block w-6 h-6 rounded-md mr-2"
                  alt={fruitname}
                />
                <span className="underline text-blue-500">
                  {fruit["zh-hans"]}
                </span>
                <span className="px-2">x</span>
                <span className="">{number}</span>
              </li>
            );
          }
          return null;
        })}
        <li></li>
      </ul>
      <ul>
        {order.map((fruitKey, index) => {
          const fruit = fruitsList.get(fruitKey)!;
          const fruitname = Fruit[fruitKey];
          return (
            <ol key={index}>
              <input
                type="checkbox"
                name={`${fruitname}-${index}`}
                id={`${fruitname}-${index}`}
                className="absolute -ml-96 fruit-checkout"
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
    </div>
  );
}

export default Results;
