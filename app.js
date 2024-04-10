import { Github } from "./scripts/api.js";
import { elements } from "./scripts/halper.js";
import { UI } from "./scripts/ui.js";

//!githup class alma
const github = new Github();

//! UI classın örneği
const ui = new UI();
github.fetchUserData();

const getInput = (e) => {
  e.preventDefault();
  const value = elements.searchInput.value;
  if (value == "") {
    ui.showAlert("Form alanını doldurunuz.", "alert alert-warning");
    return;
  }
  
  if(value) {
    github.fetchUserData(value).then((res) => {
      //!eğer kullanıcı bulunamadıysa 
      if(res.message === "Not Found"){
        ui.showAlert("Aradığınız kullanıcı bulunamadı","alert alert-danger")
        //!kullanıcı bulunduysa
      }else{
        ui.showAlert("Kullanıcı bulundu", "alert alert-success");
        ui.renderProfile(res.data);
        console.log(res);
        ui.renderProjects(res.repos)
        
        
      }
  });
  
  return;

  }
}




//! olay izleyicileri

elements.searchBtn.addEventListener("click", getInput);