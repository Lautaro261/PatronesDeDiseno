class Singleton{
    constructor(){
        console.log('Entre a constructor')
        if(Singleton.instance){
            console.log('true if, ya existe')
            return Singleton.instance
        }

        console.log('false if, no existe, ahora se crea')
        Singleton.instance= this;
    }
}

const singliiss = new Singleton()
const singliiss2 = new Singleton()