import { Size } from "./size";
import { Topping } from "./topping";

const Product = {
  id : number,
  name: string,
  price: number,
  description: string,
  imageUrl: string,
  toppings: Topping[],
  sizes: Size[],

}