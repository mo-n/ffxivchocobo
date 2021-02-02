import { colours, Color } from "data/colours";
import fruits, { Fruit } from "data/fruits";

class Calculator {
  _from: Color;
  _to: Color;
  order: Array<Fruit>;
  fruits: Map<Fruit, number>;
  constructor(from: string, to: string) {
    this._from = colours.get(from)!;
    this._to = colours.get(to)!;

    this.order = [];
    this.fruits = new Map([
      [Fruit.Apple, 0],
      [Fruit.Pear, 0],
      [Fruit.Berrie, 0],
      [Fruit.Plum, 0],
      [Fruit.Valfruit, 0],
      [Fruit.Pineapple, 0],
    ]);
  }

  addOrder(times: number, fruits: Array<Fruit>) {
    for (let i = 1; i < Math.abs(times); i++) {
      this.order.push(...fruits);
    }
  }

  addFruit(times: number, fruit: Fruit) {
    const currentTimes = this.fruits.get(fruit)!;
    this.fruits.set(fruit, times + currentTimes);
  }

  removeOrder(freduce: Fruit, fclear: Fruit, t: number) {
    for (let i = this.order.length - 1; i >= 0; i--) {
      if (this.order[i] === freduce && t > 0) {
        this.order.splice(i, 1);
        t--;
      }

      if (this.order[i] === fclear) {
        this.order.splice(i, 1);
      }
    }
  }

  calc() {
    // raw
    const rDiffRaw = this._to.r - this._from.r,
      gDiffRaw = this._to.g - this._from.g,
      bDiffRaw = this._to.b - this._from.b;
    // diff
    const rDiff = 10 * Math.round(rDiffRaw / 10),
      gDiff = 10 * Math.round(gDiffRaw / 10),
      bDiff = 10 * Math.round(bDiffRaw / 10);
    // remainders
    const rRem = 5 * Math.round((rDiff - rDiffRaw) / 5),
      gRem = 5 * Math.round((gDiff - gDiffRaw) / 5),
      bRem = 5 * Math.round((bDiff - bDiffRaw) / 5);

    if (rDiff > 0) {
      this.addOrder(rDiff / 10, [Fruit.Valfruit, Fruit.Pineapple]);
      this.addFruit(rDiff / 10, Fruit.Valfruit);
      this.addFruit(rDiff / 10, Fruit.Pineapple);
    } else {
      this.addOrder(rDiff / 10, [Fruit.Berrie, Fruit.Pear]);
      this.addFruit(rDiff / 10, Fruit.Berrie);
      this.addFruit(rDiff / 10, Fruit.Pear);
    }

    if (gDiff > 0) {
      this.addOrder(gDiff / 10, [Fruit.Pineapple, Fruit.Plum]);
      this.addFruit(gDiff / 10, Fruit.Pineapple);
      this.addFruit(gDiff / 10, Fruit.Plum);
    } else {
      this.addOrder(gDiff / 10, [Fruit.Apple, Fruit.Berrie]);
      this.addFruit(gDiff / 10, Fruit.Apple);
      this.addFruit(gDiff / 10, Fruit.Berrie);
    }

    if (bDiff > 0) {
      this.addOrder(bDiff / 10, [Fruit.Plum, Fruit.Valfruit]);
      this.addFruit(bDiff / 10, Fruit.Plum);
      this.addFruit(bDiff / 10, Fruit.Valfruit);
    } else {
      this.addOrder(bDiff / 10, [Fruit.Apple, Fruit.Pear]);
      this.addFruit(bDiff / 10, Fruit.Apple);
      this.addFruit(bDiff / 10, Fruit.Pear);
    }

    if (rRem && gRem && bRem) {
      for (const [fruit, fruitInfo] of fruits) {
        if (
          fruitInfo.r === rRem &&
          fruitInfo.g === gRem &&
          fruitInfo.b === bRem
        ) {
          this.addOrder(1, [fruit]);
          this.addFruit(1, fruit);
        }
      }
    }

    // remove redundant fruit
    const apple = this.fruits.get(Fruit.Apple)!,
      pear = this.fruits.get(Fruit.Pear)!,
      berrie = this.fruits.get(Fruit.Berrie)!,
      plum = this.fruits.get(Fruit.Plum)!,
      valfruit = this.fruits.get(Fruit.Valfruit)!,
      pineapple = this.fruits.get(Fruit.Pineapple)!;

    if (pineapple === 0 && berrie === 0) {
    } else if (pineapple > berrie) {
      this.fruits.set(Fruit.Pineapple, pineapple - berrie);
      this.fruits.set(Fruit.Berrie, 0);
      this.removeOrder(Fruit.Pineapple, Fruit.Berrie, berrie);
    } else if (pineapple < berrie) {
      this.fruits.set(Fruit.Berrie, berrie - pineapple);
      this.fruits.set(Fruit.Pineapple, 0);
      this.removeOrder(Fruit.Berrie, Fruit.Pineapple, pineapple);
    } else {
      this.fruits.set(Fruit.Pineapple, 0);
      this.fruits.set(Fruit.Berrie, 0);
      this.removeOrder(Fruit.Pineapple, Fruit.Berrie, 1024);
    }

    if (valfruit === 0 || pear === 0) {
    } else if (valfruit > pear) {
      this.fruits.set(Fruit.Valfruit, valfruit - pear);
      this.fruits.set(Fruit.Pear, 0);
      this.removeOrder(Fruit.Valfruit, Fruit.Pear, pear);
    } else if (valfruit < pear) {
      this.fruits.set(Fruit.Pear, pear - valfruit);
      this.fruits.set(Fruit.Valfruit, 0);
      this.removeOrder(Fruit.Pear, Fruit.Valfruit, valfruit);
    } else {
      this.fruits.set(Fruit.Valfruit, 0);
      this.fruits.set(Fruit.Pear, 0);
      this.removeOrder(Fruit.Valfruit, Fruit.Pear, 1024);
    }

    if (plum === 0 || apple === 0) {
    } else if (plum > apple) {
      this.fruits.set(Fruit.Plum, plum - apple);
      this.fruits.set(Fruit.Apple, 0);
      this.removeOrder(Fruit.Plum, Fruit.Apple, apple);
    } else if (plum < apple) {
      this.fruits.set(Fruit.Apple, apple - plum);
      this.fruits.set(Fruit.Plum, 0);
      this.removeOrder(Fruit.Apple, Fruit.Plum, plum);
    } else {
      this.fruits.set(Fruit.Apple, 0);
      this.fruits.set(Fruit.Plum, 0);
      this.removeOrder(Fruit.Apple, Fruit.Plum, 1024);
    }

    return {
      fruits: this.fruits,
      order: this.order
    }
  }
}

export default Calculator;
