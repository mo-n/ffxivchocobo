import React  from "react";
import { ColorGroup, colours, categories, Color } from "data/colours";

interface Props {
  label: string;
  selected: string;
  updateColour: Function;
}

function Tabs(props: Props) {
  const { label, selected, updateColour } = props;
  const group = colours.get(selected)?.group

  const handleSwitchGroup = function (_k: ColorGroup, event:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    for (const [key, c] of colours) {
      if (c.group === _k) {
        updateColour(key);
        return;
      }
    }
  };

  const handleSwitchColor = (_c: Color, event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    updateColour(_c.value);
  };

  return (
    <div>
      <label className="block sm:text-base font-medium text-gray-900 my-3">
        {label}
      </label>
      <div className="flex mt-2 select-none">
        {Array.from(categories.keys()).map((key) => (
          <button
            key={key}
            onClick={handleSwitchGroup.bind(null, key)}
            className={`
              ${categories.get(key)!.value}
              w-10 h-10
              mx-1
              border-4 focus:outline-none rounded-full
              ${group === key ? `border-blue-200` : "border-transparent"}
            `}
          >
            <span className="text-transparent">{categories.get(key)!.cn}</span>
          </button>
        ))}
      </div>
      <div style={{ minHeight: "4.75rem" }} className="mt-4 pl-2">
        {Array.from(colours.values())
          .filter((colour) => colour.group === group)
          .map((colour) => (
            <button
              key={colour.value}
              onClick={handleSwitchColor.bind(null, colour)}
              style={{
                background: `rgb(${colour.R}, ${colour.G}, ${colour.B})`,
                color: `rgb(${colour.R}, ${colour.G}, ${colour.B})`,
              }}
              className={`
                w-7 h-7
                ml-1 mr-1
                ring-2 ring-offset-1 focus:outline-none shadow
                ${
                  selected === colour.value
                    ? "ring-current"
                    : "ring-transparent"
                }
            `}
            ></button>
          ))}
      </div>
    </div>
  );
}

export default Tabs;
