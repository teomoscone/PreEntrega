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

    let alumnos_JSON = JSON.stringify(lista_alumnos)
    
    localStorage.setItem("alumnos" , alumnos_JSON);
    console.log(alumnos_JSON)
    return alumno;
}



class Alumno_fm{

    constructor( nombre, apellido, cedula, email, esAdministrador ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.email = email;
        this.cuota = 0;
        this.frecuencia = 0;
        this.formaDePago = "";
        this.esAdministrador = esAdministrador;
        
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
agregar_alumno("alumno1", "uno", "1111", "alumno1@gmail.com");
lista_alumnos[0].calcularTotal(3, "anual");
agregar_alumno("alumno2", "dos", "2222", "alumno2@gmail.com");
lista_alumnos[1].calcularTotal(4, "anual");
agregar_alumno("alumno3", "tres", "3333", "alumno3@gmail.com");
lista_alumnos[2].calcularTotal(2, "mensual");


function ordernar_alumnos(alumno){
    return alumno.formaDePago == "anual";
}

let resultado_filter = lista_alumnos.filter(ordernar_alumnos);

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


//  ¡¡¡¡¡¡TERCERA ENTREGAAAAAAAAA!


function ingresar(){

    let cedula = document.getElementById("cedula");
    let msj = document.getElementById("mensaje");
    let menuProfe = document.getElementById("profe");

    let alumno = buscar_alumno(cedula.value);
    if (alumno != null){
        let parrafo = document.createElement("p");
        parrafo.innerText = "Informacion de usuario " + alumno.nombre + " " + alumno.apellido;
        msj.append(parrafo);
    }
    //agregar mensaje de NO ENCUENTRA ALUMNO


}

function registrar(){

    let cedula = document.getElementById("cedula").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let frecuencia = document.getElementById("frecuencia").value;
    let formaDePago = document.getElementById("formaDePago").value;
    let msj = document.getElementById("informacion");

    alumno = agregar_alumno(nombre, apellido, cedula, email)
    alumno.calcularTotal(frecuencia, formaDePago);
    let parrafo = document.createElement("p");
    parrafo.innerText = "Informacion de usuario " + alumno.nombre + " " + alumno.apellido;
    msj.append(parrafo);
}

function verPagosAnuales(){
    let msj = document.getElementById("mensaje");
    let parrafo = document.createElement("p");
    

    let recuperando_lista_alumnos = localStorage.getItem("alumnos");
    recuperando_lista_alumnos = JSON.parse( recuperando_lista_alumnos );
    let resultado_filter = recuperando_lista_alumnos.filter(ordernar_alumnos);
    console.log( resultado_filter );
    let totalAnual = 0
    for (let i = 0; i < resultado_filter.length; i++) {
        const element = resultado_filter[i];
        parrafo.innerText += `${element.nombre} ${element.apellido}`
        totalAnual += element.cuota
    }
    
    parrafo.innerText += `\n Total a cobrar anual: ${totalAnual * 12} \n`

    msj.append(parrafo)
}