export enum Fruit {
  Apple,
  Pear,
  Berrie,
  Plum,
  Valfruit,
  Pineapple
};

export interface FruitInfo {
  "zh-hans": string,
  r: number,
  g: number,
  b: number,
}

const fruits: Map<Fruit, FruitInfo> = new Map([[
  Fruit.Apple, {
    "zh-hans": '塞尔法特尔沙果',
    r: +5,
    g: -5,
    b: -5,
  }], [
  Fruit.Pear, {
    "zh-hans": '辉鳞油梨',
    r: -5,
    g: +5,
    b: -5,
  }], [
  Fruit.Berrie, {
    "zh-hans": '奥·哥摩罗浆果',
    r: -5,
    g: -5,
    b: +5,
  }], [
  Fruit.Plum, {
    "zh-hans": '多玛青梅',
    r: -5,
    g: +5,
    b: +5,
  }], [
  Fruit.Valfruit, {
    "zh-hans": '瓦尔醋栗',
    r: +5,
    g: -5,
    b: +5,
  }],[
  Fruit.Pineapple, {
    "zh-hans": '谢尔达莱凤梨',
    r: +5,
    g: +5,
    b: -5,
  }]
]);

export default fruits;
