function sum(a, b) {
  return a + b;
}

//let res = sum(1,2)
//console.log(res)

const fSum = sum;
res = fSum(5, 4);

function operation(fn, a, b) {
  console.log("hola");
  console.log(fn(a, b));
}

operation(sum, 10, 20);

// para este curo usaremos clases con constructor, no con funcion

//CLASE
class Drink {
  constructor(name) {
    this.name = name;
  }

  info() {
    return "La botella tiene : " + this.name;
  }
}

//FUNCION
function Drink2(name) {
  (this.name = name),
    (this.info = function () {
      return "la botella de vidrio, contiene: " + this.name;
    });
}
//------------------------------------------------------------------------------------------

const objDrink = new Drink("agua");
console.log(objDrink.info());

const objDrink2 = new Drink("agua");
console.log(objDrink2.info());

//HERENCIA

class Beer extends Drink {
  constructor(name, alcohol) {// estoy obligado a usar por que la clase padre, usó constructor
    super(name); // el metodo super es el quien se encarga de pasar al constructor padre (linea: 22)
    this.alcohol = alcohol;
  }

  info() {
    return super.info() + " " + this.alcohol;
  }
}

const objBeer = new Beer("erdinger", 8.5);
console.log(objBeer.info());
