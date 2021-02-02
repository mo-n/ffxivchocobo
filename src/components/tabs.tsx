import React, { useState } from 'react';
import { ColorGroup, colours, categories } from 'data/colours';

function Tabs() {
  const [group, setGroup] = useState(ColorGroup.White)
  const [color, setColor] = useState(colours.get('snow-white'))

  const handleSwitchGroup = function(_k:ColorGroup) {
    setGroup(_k)
  }

  const handleSwitchColor = (_c:typeof color) => {
    return () => setColor(_c)
  }

  return(
    <div>
      <div className="flex">
        {
          Array.from(categories.keys()).map((key) => (
            <button key={key} onClick={() => handleSwitchGroup(key)} className={`
              bg-${categories.get(key)!.value}
              w-10 h-10
              ml-1 mr-1
              border-2 focus:outline-none rounded-full
              ${group === key ? `border-blue-500` : 'border-transparent'}
            `}>
              <span className="text-transparent">{categories.get(key)!.cn}</span>
            </button>
          ))
        }
      </div>
      <div style={{ minHeight: '4.75rem' }} className="mt-4 pl-2">
        {
          Array.from(colours.values())
            .filter(colour => colour.group === group)
            .map(colour => (
              <button key={colour.value}
              onClick={handleSwitchColor(colour)}
              style={{background: `rgb(${colour.r}, ${colour.b}, ${colour.g})`, color: `rgb(${colour.r}, ${colour.b}, ${colour.g})`}} className={`
                w-8 h-8
                ml-1 mr-1
                ring-2 ring-offset-1 focus:outline-none shadow-2xl
                ${color === colour ? 'ring-current' : 'ring-transparent'}
            `}></button>
            ))
        }
      </div>
    </div>
  )
}

export default Tabs;