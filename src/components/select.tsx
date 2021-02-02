import React from 'react';
import { colours } from 'data/colours';

function Select() {
  return <div>
    <select
      name="current-colour"
      id="current-colour"
      className="w-full block border rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    >
      {
        Array.from(colours.values()).map(c => 
          <option value={c.value}>{c.label}</option>
        )
      }
    </select>
  </div>
}

export default Select;
