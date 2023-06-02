export function filterUniqueShop(data: Array<Goods>): Array<string> {
  const unique = new Set<string>();
  data.forEach((element) => {
    unique.add(element.shop);
  });
  return Array.from(unique);
}

export type Goods = {
  shop: string;
  name: string;
  price: number;
  image: string;
  id: number;
};
