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
  const resultColor = {
    R: colours.get(from)!.R,
    G: colours.get(from)!.G,
    B: colours.get(from)!.B,
  };

  order.forEach((_key) => {
    const fruit = fruits.get(_key)!;
    resultColor.R += fruit.R;
    resultColor.G += fruit.G;
    resultColor.B += fruit.B;
  });

  let resultKey = "",
    diff = -1;
  colours.forEach((color, _key) => {
    const _d = Math.sqrt(
      (resultColor.R - color.R) ** 2 +
      (resultColor.B - color.B) ** 2 +
      (resultColor.G - color.G) ** 2
    );
    if (diff === -1 || _d < diff) {
      diff = _d;
      resultKey = _key;
    }
  });

  return resultKey;
}

describe("colours calc", () => {
  for (let { fromKey, toKey, order } of calcResult()) {
    const resultColorKey = iscoloring(fromKey, order);
    test(`${fromKey} to ${toKey}`, () => {
      expect(Object.is(toKey, resultColorKey)).toBe(true);
    })
  }
});
