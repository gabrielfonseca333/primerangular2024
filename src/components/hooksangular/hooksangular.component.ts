import { Component, OnInit, DoCheck } from "@angular/core";

@Component ({
    selector: "hooks-angular",
    templateUrl: "./hookangular.component.html"
})

export class HooksAngular implements OnInit {
    constructor() {
        console.log("Soy el constructor de Hooks Angular");
    }

    ngOnInit(): void {
        console.log("Soy el metodo NgOnInit");
    }

    ngDoCheck(): void {
        console.log("Ejecutando método ngDoCheck");
    }
}