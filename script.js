

const code = "698733652348"
const pass = "647668777954"

  let inscrit = document.getElementById("inscrit");
 let identifiant = document.getElementById("identifiant");
 let identifian = document.getElementById("identifian");

 let valider = document.getElementById("valider");
 let valide = document.getElementById("valide");



 

 function validerIdentifiant (){
    valider.addEventListener("click", () => {

    if( identifiant.value === (pass)  ){
        window.location.href= "compte.html";
    }else {
      let para = document.getElementById("para");
    para.innerHTML = "identifiant incorrect";
    para.style.color = 'red' 

    // identifiant.value.desables = tru
    }


})
 }
 validerIdentifiant();
 

 function validerIdentifiante (){
    valider.addEventListener("click", () => {

    if( identifian.value === (code)  ){
        window.location.href= "solde.html";
    }else {
      let para = document.getElementById("para");
    para.innerHTML = "mot de passe incorrect";
    para.style.color = 'red' 


    }


})
 }
 validerIdentifiante();

















 


