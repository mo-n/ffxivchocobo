

export enum Fruit {
  apple,
  pear,
  berrie,
  plum,
  valfruit,
  pineapple
};

export interface FruitInfo {
  "zh-hans": string,
  r: number,
  g: number,
  b: number,
}

const fruits: Map<Fruit, FruitInfo> = new Map([[
  Fruit.apple, {
    "zh-hans": '塞尔法特尔沙果',
    r: +5,
    g: -5,
    b: -5,
  }], [
  Fruit.pear, {
    "zh-hans": '辉鳞油梨',
    r: -5,
    g: +5,
    b: -5,
  }], [
  Fruit.berrie, {
    "zh-hans": '奥·哥摩罗浆果',
    r: -5,
    g: -5,
    b: +5,
  }], [
  Fruit.plum, {
    "zh-hans": '多玛青梅',
    r: -5,
    g: +5,
    b: +5,
  }], [
  Fruit.valfruit, {
    "zh-hans": '瓦尔醋栗',
    r: +5,
    g: -5,
    b: +5,
  }],[
  Fruit.pineapple, {
    "zh-hans": '谢尔达莱凤梨',
    r: +5,
    g: +5,
    b: -5,
  }]
]);

export default fruits;
