export type Goods = {
  shop: string;
  name: string;
  price: number;
  image: string;
  id: number;
};

export type OrderType = {
  id: number;
  goodsId: number;
  count: number;
};
