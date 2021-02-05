import Calculator from "./calculator";
import { colours } from "./data/colours";
import fruits, { Fruit } from "./data/fruits";

function* calcResult() {
  for (const [fromKey] of colours) {
    for (const [toKey] of colours) {
      if (fromKey === toKey) continue;
      const calculator = new Calculator(fromKey, toKey);
      const calc = calculator.calc();
      yield {
        fromKey,
        toKey,
        ...calc,
      };
    }
  }
}

function iscoloring(from: string, order: Array<Fruit>) {
  const fromColor = {
    r: colours.get(from)!.r,
    g: colours.get(from)!.g,
    b: colours.get(from)!.b,
  };

  order.forEach((_key) => {
    const fruit = fruits.get(_key)!;
    fromColor.r += fruit.r;
    fromColor.g += fruit.g;
    fromColor.b += fruit.b;
  });
  //raisin-brown vs chestnut-brown
  let toKey = "",
    diff = -1;
  colours.forEach((color, _key) => {
    const _d = Math.sqrt(
      (fromColor.b - color.b) ** 2 +
        (fromColor.g - color.g) ** 2 +
        (fromColor.r - color.r) ** 2
    );
    if (diff === -1 || _d < diff) {
      diff = _d;
      toKey = _key;
    }
  });

  return toKey;
}

describe("colours calc", () => {
  for (let { fromKey, toKey, order, fruits } of calcResult()) {
    const calcColor = iscoloring(fromKey, order);
    test(`${fromKey} to ${toKey}`, () => {
      expect(Object.is(toKey, calcColor)).toBe(true);
    })
  }
});
