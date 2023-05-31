//Darle la bienvenida al usuario; ingresar datos como: Nombre Completo, Edad y si es nuevo o no.
//Brindar el servivcio de pagar online la suscripción al gimnasio; 
//Tendra la opción de realizar el pago anual, lo cual tendra un descuento del 20% en su totalidad.
let lista_alumnos = [];

function buscar_alumno(cedula){
    let alumno;
    for(let i = 0; i < lista_alumnos.length; i = i + 1){
        if (cedula == lista_alumnos[i].cedula) {
            alumno = lista_alumnos[i];
            break;
        }
    }

    return alumno;
}

function agregar_alumno(nombre, apellido, cedula, email){
    let alumno = new Alumno_fm(nombre, apellido, cedula, email);
    lista_alumnos.push(alumno);
    return alumno;
}



class Alumno_fm{

    constructor( nombre, apellido, cedula, email ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.email = email;
        this.cuota = 0;
        this.frecuencia = 0;
        this.formaDePago = "";
        
    }

    calcularCuota(frecuencia){
        let cuota;
        if(frecuencia == 2){
            cuota = 1500;
        }else if(frecuencia == 3){
            cuota = 1800
        }else if(frecuencia > 3){
            cuota = 2000
        }
        return cuota;
    }

    calcularTotal(frecuencia, formaDePago){
        let total;
        let cuota = this.calcularCuota(frecuencia);
        this.frecuencia = frecuencia;
        this.formaDePago = formaDePago;
        if(formaDePago == "anual"){
            total = cuota * 0.80
        }else{total = cuota;
        }
        this.cuota = total;
        return total;
    }

    saludar(){

        console.log("Bienvenidos a FM TRAINING: ", this.nombre, " ", this.apellido) ;
    }

    mostrarInformacion(){
        console.log("Informacion del alumno:");
        console.log("Nombre y apellido: ", this.nombre, " ", this.apellido);
        console.log("Frecuencia semanal: ", this.frecuencia);
        console.log("Valor cuota: ", this.cuota);
        console.log("Forma de pago: ", this.formaDePago);
    }

}

//para pruebas
agregar_alumno("gonzalo", "rodriguez", "4555", "lala@gmail.com");
lista_alumnos[0].calcularTotal(3, "anual");
agregar_alumno("mateo", "moscone", "5555", "lala2@gmail.com");
lista_alumnos[1].calcularTotal(4, "anual");
agregar_alumno("facundo", "cordero", "6555", "lala3@gmail.com");
lista_alumnos[2].calcularTotal(2, "mensual");

//////
let respuesta = "";
do {
    respuesta = prompt( "Ingrese su cedula");
    let alumno = buscar_alumno(respuesta);
    if (alumno != null){
        alumno.mostrarInformacion();
    }
    else if(respuesta != "salir") {
    let nombre = prompt( "Ingrese su nombre");
    let apellido = prompt( "Ingrese su apellido");
    let cedula = prompt( "Ingrese su cedula");
    let email = prompt( "Ingrese su email");
    let formaDePago = prompt("Ingrese forma de pago (anual / mensual)")
    let frecuencia = prompt("Cuantos dias a la semana va a concurrir? (2/3/4/5)")
    alumno = agregar_alumno(nombre, apellido, cedula, email)
    alumno.calcularTotal(frecuencia, formaDePago);
    alumno.mostrarInformacion();
    }
} while (respuesta != "salir");


function ordernar_alumnos(alumno){
    return alumno.formaDePago == "anual";
}

let resultado_filter = lista_alumnos.filter(ordernar_alumnos);

console.log(" / / / / / *********** ");
console.log("Lista de alumnos con forma de pago anual");
for(let i = 0; i < resultado_filter.length; i = i + 1){
    console.log("Nombre: ", resultado_filter[i].nombre);
    console.log("Apellido: ", resultado_filter[i].apellido);
    console.log("Cedula: ", resultado_filter[i].cedula);
    console.log("Email: ", resultado_filter[i].email);
    console.log("Frecuencia: ", resultado_filter[i].frecuencia);
    console.log("Importe cuota: ", resultado_filter[i].cuota);
    console.log("-------------------");
}


console.log(" / / / / / *********** ")
let total = 0;
for(let i = 0; i < resultado_filter.length; i = i + 1){
    total = total + resultado_filter[i].cuota;
}

console.log("Total a cobrar:", total * 12)










// agregar_alumno(nombre, apellido, cedula, email)

// usuario.calcularTotal(frecuencia, formaDePago)

// usuario.mostrarInformacion();





// function calcular_interes( monto , cuotas){

//     let interes = 0;
    
//         if( cuotas == 1){
//             interes = 0;
//         }
//         else if( cuotas == 3){
//             interes = monto * 0.10;
//         }
//         else if( cuotas == 6){
//             interes = monto * 0.20;
//         }
    
//         return interes;
//     }
    
//     function mostrar_datos(monto, cuotas, total){
    
//         console.log("Pagarás: ", monto);
//         console.log("Cuotas: ", cuotas);
//         console.log("Total con interes: ", total);
//         console.log("Pagas por cuotas: ",  total/cuotas);
    
//     }
    
    
    
//     console.log( "Bienvenido/a a FM TRAINING" );
    
//     let nombre = prompt( "Ingrese su nombre y apellido o Salir");
//     let edad = prompt( "Ingrese su edad o Salir");
//     edad = parseInt (edad);
//     let usuario_nuevo = prompt ("¿Es tu primera experiencia en FM TRAINING? / Salir");
    
//     while(nombre != "Salir"){
//         console.log( "Nombre completo: ", nombre);
//         console.log( "Edad: ", edad);
//         console.log( "Primera experiencia: ", usuario_nuevo);
    
//         nombre = prompt( "Ingrese su nombre y apellido o Salir");
//         if(nombre != "Salir"){
//             edad = prompt( "Ingrese su edad o Salir");
//             if(edad != "Salir"){
//                 edad = parseInt (edad);
//                 usuario_nuevo = prompt ("¿Es tu primera experiencia en FM TRAINING? Si / No");
//             }
//         }
//     }
    
//     let anual = prompt ( "¿Le interesa pago anual con 20% de DESCUENTO? Si / No");
    
//     if ( anual == "Si"){
        
//         let frecuencia = prompt( " ¿Que frecuencia semanal quiere pagar?; 2 / 3 / 5 ");
        
//         if( frecuencia == 2 ){
//             console.log( "La frecuencia semanal es 2");
//             console.log( "El monto a pagar es de $14400 (Descuento Incluido)");
            
//         }
        
//         else if( frecuencia == 3 ){
//             console.log( "La frecuencia semanal es 3");
//             console.log( "El monto a pagar es de $17280 (Descuento Incluido)");
//         }
        
//         else if( frecuencia == 5 ){
//             console.log( "La frecuencia semanal es 5");
//             console.log( "El monto a pagar es de $19200 (Descuento Incluido)");
//         }
//         else {
//             console.log( "Ingresa una frecuencia correcta")
//             let frecuencia = prompt( " ¿Que frecuencia semanal quiere pagar?; 2 / 3 / 5 ");
//         }
//     }
    
//     else if ( anual == "No"){
        
//         let mes = prompt( "Ingrese que mes quiere pagar");
//         console.log( "El mes a abonar es: ", mes);
        
//         let frecuencia = prompt( " ¿Que frecuencia semanal quiere pagar?; 2 / 3 / 5 ");
        
//         if( frecuencia == 2 ){
//             console.log( "La frecuencia semanal es 2");
//             console.log( "El monto a pagar es de $1500");
            
//         }
        
//         else if( frecuencia == 3 ){
//             console.log( "La frecuencia semanal es 3");
//             console.log( "El monto a pagar es de $1800");
//         }
        
//         else if( frecuencia == 5 ){
//             console.log( "La frecuencia semanal es 5");
//             console.log( "El monto a pagar es de $2000");
//         }
//         else {
//             console.log( "Ingrese una frecuencia correcta")
//             frecuencia = prompt( " ¿Que frecuencia semanal quiere pagar?; 2 / 3 / 5 ");
//         }
//     }
    
//     let monto = prompt( "Ingrese el monto a abonar según la frecuencia semanal" );
//     monto = parseInt (monto);
    
//     let cuotas = prompt("Ingrese en cuantas cuotas quiere abonar: 1 o 3 o 6");
//         while ( cuotas != 1 || cuotas != 3 || cuotas != 6){
            
//             cuotas = prompt("Ingrese plan de cuotas correcto: 1 o 3 o 6");
//         }
//     let total = monto + calcular_interes( monto, cuotas )
//     mostrar_datos(monto, cuotas, total)
    
    // function esperoRespuesta(texto){
    //     let respuesta = ""
    //     respuesta = prompt(texto)
    //     return respuesta
    // }
    