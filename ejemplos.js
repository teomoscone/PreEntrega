

/*class Alumno_fm{

    constructor ( nombre, apellido, cedula, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.email = email;
        this.cuota = 0;
        this.frecuencia = 0;
        this.formaDepago = "";

    }

    calcularCuota(frecuencia){
        let cuota; 
        if( frecuencia == 2 ){
            cuota = 1500;
        }
        else if( frecuencia == 3 ){
            cuota = 1800;
        }
        else if( frecuencia > 3 ){
            cuota = 2000;
        }
    
        return cuota;
    }

    calcularTotal(frecuencia, formaDePago){
        let total;
        let cuota = this.calcularCuota(frecuencia);
        this.frecuencia = frecuencia;
        this.formaDePago = formaDePago

        if(formaDePago == "anual"){
            total = cuota * 0.80
        }
        else{ total= cuota;
        }
        return total;
    }

    saludar(){

        console.log( "Bienvenidos a FM TRAINING: ", this.nombre, " ", this.apellido);
    }
}
*/