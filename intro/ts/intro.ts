class DrinkTs {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  info(): string {
    return this.name;
  }
}

const objDrinkTs = new DrinkTs("agua");
console.log(objDrinkTs.info());

//INTERFACE -------------------------------------------------------------------
interface Product {
  price: number;
  getPrice(): string;
}

//HERENCIA ------------------------------------------------------------------------------------

class BeerTs extends DrinkTs implements Product {
  private alcohol: number;
  price: number; //implementacion de interface

  constructor(name: string, alcohol: number, price: number) {
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }

  getPrice(): string { // implementacion de interface
    return "$" + this.price;
  }
  info(): string {
    return super.info() + " " + this.alcohol;
  }
}

const objBeerTs = new BeerTs("erdinger", 8.6, 1);
console.log(objBeerTs.info());

//IMPLEMENTACION DE INTERFACE EN OTRA CLASE

class Snack implements Product {
  price: number;
  name: string;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): string {
    return "El precio es: $" + this.price;
  }
}

const products: Product[] = [
  new BeerTs("corona", 4.5, 600),
  new Snack("papas", 500),
];

function getPrices(items: Product[]) {
  for (const item of items) {
    console.log(item.getPrice());
  }
}

getPrices(products);
