let choix=true;
function change1(){
    if(choix==true){
        bloc1.style.backgroundColor = "green";
        bloc2.style.backgroundColor = "green";
        bloc3.style.backgroundColor = "green";
        bloc4.style.backgroundColor = "green";
        p1.style.color="yellow";
        p2.style.color="yellow";
        p3.style.color="yellow";
        p4.style.color="yellow";
        choix=false;
    }
    else{
        bloc1.style.backgroundColor = "red";
        bloc2.style.backgroundColor = "red";
        bloc3.style.backgroundColor = "red";
        bloc4.style.backgroundColor = "red";
        p1.style.color="white";
        p2.style.color="white";
        p3.style.color="white";
        p4.style.color="white";
        choix=true;
    }
}
function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var nom_prenom = document.getElementById("name").value;
    if (nom_prenom.length==0){
        alert("veuiller entrer ton prenom et nom");
    }
    var numéro = document.getElementById("number").value;
    if (numéro.length==0 ){
        alert("veuiller entrer ton numéro");
    }
    var mail = document.getElementById("email").value;
        var index = mail.indexOf("@");    
        if(index === -1){
             alert("il manque @");
        } 
    var para=document.getElementById('norme');
    para.innerHTML= nom_prenom+' '+numéro+' '+mail;
    let tab=[{prenom:nom_prenom,
              num:numéro,
              email:mail}];
    console.table(tab);          
    //const divText = document.getElementById("tab");
   // const pl = document.createElement(p);

   // p.innerHTML="jkkkkk";

  //  divText.appendChild(pl);

}



