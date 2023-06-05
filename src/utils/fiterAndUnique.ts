import { Goods } from "./types";

export function filterUniqueShop(data: Array<Goods>): Array<string> {
  const unique = new Set<string>();
  data.forEach((element) => {
    unique.add(element.shop);
  });
  return Array.from(unique);
}
