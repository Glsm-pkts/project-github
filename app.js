import { Github } from "./scripts/api.js";
import { elements } from "./scripts/halper.js";
import { UI } from "./scripts/ui.js";

//!githup class alma
const github = new Github();
//! UI classın örneği
const ui = new UI();

const getInput = (e) => {
    e.preventDefault();
    const value = elements.searchInput.value;
    if(value == "") 
        return;
   if (value) {
    github.fetchUserData(value).then((res) => {
      if(res.message === "Not Found" ){
      ui.showAlert("Aradığınız kullanıcı bulunamadı.","alert alert-danger" );
    }
  });
   
}
 };
//! olay izleyicileri

elements.searchBtn.addEventListener("click", getInput);