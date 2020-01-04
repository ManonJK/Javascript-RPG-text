// let myStoryBoucle; //Variable pour la boucle de mon histoire
let TheHero;
let TheEnnemi;
let histoire = 1;
let Texte;
let end = false;

// function displayElements(){
//     document.getElementById("myherostats").style.display = 'flex';
//     document.getElementById("ennemistats").style.display = 'flex';
// }

function ChooseHero(value){
    EraseChoices();
    TheHero = value;
    WriteTxt("heroname", TheHero.nom);
    WriteTxt("herohp", TheHero.hp);
    WriteTxt("heroxp", TheHero.xp);
    WriteTxt("heroforce", TheHero.force);
    WriteTxt("herores", TheHero.resistence);
    document.getElementById("myherosgif").innerHTML = "<img alt='" + TheHero.nom + "' src='Personnages/" + TheHero.nom + ".gif'/>";
    begin();
}

function EnnemiStats() {
    let gif_name = TheEnnemi.nom.replace(/ /g, "_");
    document.getElementById("myennemigif").innerHTML = "<img alt='" + TheEnnemi.nom + "' src='Personnages/" + gif_name + ".gif'/>";
    WriteTxt("enneminame", TheEnnemi.nom);
    WriteTxt("ennemihp", TheEnnemi.hp);
    WriteTxt("ennemiforce", TheEnnemi.force);
    WriteTxt("ennemires", TheEnnemi.resistence);
}

function WriteTxt(id, txt){
    document.getElementById(id).innerHTML = txt;
}

function EraseChoices(){
    $(".choice").hide();
    document.getElementsByClassName("choice").innerHTML = '';
}

function replay(){
    window.location.reload();
}
