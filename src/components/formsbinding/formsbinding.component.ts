import { Component } from "@angular/core";

@Component({
    selector:"app-forms-binding",
    templateUrl: "./formsbinding.component.html"
})

export class FormsBindingComponent{

    //DECLARAMOS UN OBJETO PARA REALIZAR EL 
    //BINDING EN UN FORM HTML
    public user: any;
    public mensaje: string;

    constructor(){

        //INICIALIZAMOS OBJETOS
        this.mensaje= "";
        this.user={
            nombre: "",
            apellidos: "",
            edad: 0
        }
        
    }

    recibirDatos(): void{
        this.mensaje = "Datos recibidos"
    }

}