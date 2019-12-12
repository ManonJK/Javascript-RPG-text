let HeroDegats=0;
let EnnemiDegats=0;

function Calculate_Degats(ennemi) {
    //Calcul des dégats ennemis
    if (TheHero.resistence <= ennemi.force) {
        EnnemiDegats = ennemi.force - TheHero.resistence;
    } else if (TheHero.resistence > ennemi.force) {
        EnnemiDegats = 1;
    }
    //Calcul des dégats du héros
    if (ennemi.resistence <= TheHero.force) {
        HeroDegats = TheHero.force - ennemi.resistence;
    } else if (ennemi.resistence > TheHero.force) {
        HeroDegats = 1;
    }
}

function attack(ennemi) {
    Calculate_Degats(ennemi);
    ennemi.hp -= HeroDegats;
    TheHero.hp -= EnnemiDegats;
    document.getElementById("herohp").innerHTML = TheHero.hp;
    document.getElementById("ennemihp").innerHTML = ennemi.hp;
    if (TheHero.hp <=0){
        document.getElementById("story").innerHTML += "Vous n'avez malheureusement pas survécu...."; //On affiche la défaite
        document.getElementById("mesboutons").innerHTML = "<button onclick='replay()'>Recommencer</button>"; //On met un bouton qui reload la page pour replay
    }
    if(ennemi.hp <=0){
        //On a fini le combat, on continue l'histoire
        DisplayTxt("enneminame", '');
        DisplayTxt("ennemihp", '');
        DisplayTxt("ennemiforce", '');
        DisplayTxt("ennemires", '');
        DisplayTxt("myennemigif", '');
        document.getElementById("mesactions").innerHTML = '';
        document.getElementById("story").innerHTML += "Félicitations! Vous avez vaincu " + ennemi.nom + ". Vous gagnez 5xp"; //On affiche la victoire
        TheHero.xp +=5;
        document.getElementById("heroxp").innerHTML = TheHero.xp;
        if(continueStory === true) {
            let_story();
        } else {

        }
    }
}
