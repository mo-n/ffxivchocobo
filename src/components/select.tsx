import { colours } from "data/colours";

interface Props {
  label: string;
  name: string;
  selected: string;
  updateColour: Function;
}

function Select(props: Props) {
  const { label, name, selected, updateColour } = props;

  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const colour = event.target.value;
    if (colours.has(colour)) {
      updateColour(colour)
    }
  }

  return (
    <div className="mb-2">
      <label htmlFor={name} className="block sm:text-sm font-medium text-gray-700">{label}</label>
      <select
        name={name}
        id={name}
        value={selected}
        onChange={handleChange}
        className="w-full block border rounded-md mt-1 px-3 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {Array.from(colours.values()).map((c) => (
          <option key={c.value} value={c.value}>{c.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
