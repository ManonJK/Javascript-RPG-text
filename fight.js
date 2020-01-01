let HeroDegats=0;
let EnnemiDegats=0;

function Calculate_Degats() {
    //Calcul des dégats ennemis
    if (TheHero.resistence < TheEnnemi.force) {
        EnnemiDegats = TheEnnemi.force - TheHero.resistence;
    } else if (TheHero.resistence >= TheEnnemi.force) {
        EnnemiDegats = 1;
    }
    //Calcul des dégats du héros
    if (TheEnnemi.resistence < TheHero.force) {
        HeroDegats = TheHero.force - TheEnnemi.resistence;
    } else if (TheEnnemi.resistence >= TheHero.force) {
        HeroDegats = 1;
    }
}

function DisplayAttack() {
    EraseChoices();
    document.getElementById("thebeggining").style.display = "none";
    document.getElementById("theattack").style.display = "flex";
    EnnemiStats();
    Calculate_Degats();
    document.getElementById("herohp").innerHTML = TheHero.hp;
    document.getElementById("ennemihp").innerHTML = TheEnnemi.hp;
    if (TheHero.hp <=0){
        document.getElementById("story").innerHTML += "Vous n'avez malheureusement pas survécu...."; //On affiche la défaite
        document.getElementById("theattack").style.display = "none";
        document.getElementById("mesboutons").innerHTML = "<button class='button' onclick='replay()'>Recommencer</button>"; //On met un bouton qui reload la page pour replay
    }
    if(TheEnnemi.hp <=0){
        //On a fini le combat, on continue l'histoire
        console.log("l'ennemi est mort");
        WriteTxt("enneminame", '');
        WriteTxt("ennemihp", '');
        WriteTxt("ennemiforce", '');
        WriteTxt("ennemires", '');
        WriteTxt("myennemigif", '');
        document.getElementById("theattack").style.display = "none";
        document.getElementById("thebeggining").style.display = "flex";
        document.getElementById("story").innerHTML = "Félicitations! Vous avez vaincu " + TheEnnemi.nom + ". Vous gagnez 5xp"; //On affiche la victoire
        TheHero.xp +=5;
        document.getElementById("heroxp").innerHTML = TheHero.xp;
    }
}

function attack(){
    TheEnnemi.hp -= HeroDegats;
    TheHero.hp -= EnnemiDegats;
    DisplayAttack();
}
