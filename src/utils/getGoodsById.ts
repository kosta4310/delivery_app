import { GOODS } from "./constants";
import { Goods } from "./types";
// import { Goods } from "./fiterAndUnique";

export async function getGoodsById(ids: Array<number>): Promise<Array<Goods>> {
  const data = [...ids];
  let query = `?id=${data.splice(0, 1)}`;
  data.forEach((el) => {
    query += `&id=${data.splice(0, 1)}`;
  });
  const goods = (await fetch(GOODS + query)).json();
  return goods;
}
