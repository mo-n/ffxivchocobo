import React, { useState } from 'react';

function Tabs() {
  const [index, setindex] = useState(0)
  const categories:Map<string, any> = new Map([
    ['white', {
      cn: '白',
      value: 'gray-100'
    }],
    ['red', {
      cn: '红',
      value: 'red-700'
    }],
    ['brown', {
      cn: '棕',
      value: 'yellow-800'
    }],
    ['yellow', {
      cn: '黄',
      value: 'yellow-300'
    }],
    ['green', {
      cn: '绿',
      value: 'green-400'
    }],
    ['blue', {
      cn: '蓝',
      value: 'blue-500'
    }],
    ['purple', {
      cn: '紫',
      value: 'purple-700'
    }]
  ])

  return(
    <div>
      <div className="flex">
        {
          Array.from(categories.keys()).map((key) => (
            <button key={key} className={
              `bg-${categories.get(key).value}
              w-10 h-10
              rounded-full
              ml-1 mr-1
              focus:outline-none
            `} >
              <span className="text-transparent">{categories.get(key).cn}</span>
            </button>
          ))
        }
      </div>
      <div>
        {/* {
          Array.from(categories.keys()).map(() => (
            <div if></div>
          ))
        } */}
      </div>
    </div>
  )
}

export default Tabs;