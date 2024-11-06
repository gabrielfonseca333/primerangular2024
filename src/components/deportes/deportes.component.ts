import {Component} from "@angular/core";

@Component ({
    selector: "app-deportes",
    templateUrl:"./deportes.component.html",
    styleUrl:"./deportes.component.css"
})

export class DeportesComponent {

    public sports: Array<string>;
    public numeros: Array<number>

    constructor(){
        this.sports = ["Canicas", "Padel", "Petanca", "Curling", "Galleta 🍪"]
        this.numeros = [27,3,101,69,2024]
    }

}