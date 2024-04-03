import { elements } from "./halper.js";

export class UI {
    constructor(){

    }
    showAlert(message, className) {
        const div = document.createElement("div");
        div.className = className;
        div.textContent = message;
        console.log(div);
        elements.warning.appendChild(div);
        console.log(elements.warning);
    }
    clearAlert(){

    }
}