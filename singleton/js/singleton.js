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

// Caso de la semana 

class WeekDays{
    daysES= [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Sabado",
        "Domingo"
    ];
    daysEN=[
        "Monday",
        "Tuesday",
        "Wedneday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    constructor(lang){
        this.lang = lang;
        if(WeekDays.instance){
            return WeekDays.instance
        }
        WeekDays.instance = this
    }

    getDays(){
        return this.lang ==="es"? this.daysES : this.daysEN
    }
}

//AHORA DECLARO una instancia de la clase 

const weekDays = new WeekDays("es")  //aqui le paso el lang 
const weekDays2 = new WeekDays("en") // ya no se puede cambiar la configuracion inicial 

console.log(weekDays.getDays())
console.log(weekDays2.getDays())   // observamos que se mantinene la configuracion incial de "es"


//SINGLETON ES UNA TECNICA PARA CREAR SOLO UN OBEJTO Y QUE ESTE OBJETO VA A SER EL MISMO EN TODAS LAS INSTANCIAS O EN TODA MI APLICACION
