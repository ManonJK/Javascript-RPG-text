let myStoryBoucle; //Variable pour la boucle de mon histoire
let TheHero;
let TheEnnemi;
let continueStory = true; // Variable qui définie la fin d'un combat (si on continue l'histoire ou si on reste sur d'autres choix)

//Ce tableau contient toutes les phrases de mon histoire
let story = [
    "Bonjour.",
    "Vous vous réveillez dans votre chambre, tranquillement.",
    "Vous vous levez, et vous placez devant votre mirroir.",
    "Que voyez-vous ?",
    "Vous êtes avec votre famille, et décidez d'aller acheter des BD au magasin (de BD CQFD)",
    "Il ne vous juge pas digne d'acheter le dernier GreenLantern",
    "Vous décidez de le défier dans un combat",
    "Après ce dur combat vous décidez d'aller vous ressourcer....",
    "Vous rentrez chez vous et vous dirigez dans la maison. Vous hésitez entre...", //J'EN SUIS LAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    "La nuit commence à tomber. Vous avez faim mais êtes seul(e)...",
    "Vous entendez du bruit provenant du sous-sol.",
    "Vous vous rendez compte que c'est votre famille qui était enfermée dedans. Vous les libérez",
    "Après cette journée mouvementée, vous décidez d'aller vous coucher. Vus récupérez tous vos hp",
    "Quelqu'un se rapproche de vous, vous sentez sa présence...",
    "Plus rien. Il n'y a plus rien.",
    "Vous vous retournez.... et votre mère se tient debout devant vous, le regard froid",
    "Elle est énervée que vous n'ayez pas fait vos devoirs et à débranché votre console.",
    "Vous n'avez plus d'autre choix que d'aller travailler, et laisser Les Simpson...",
    "A bientôt !"
];
let nb_story = 0; //Cette variable est un compteur qui va nous permettre l'affichage de l'histoire

//La fonction qui lance le jeu
function begin(){
    document.getElementById("mesboutons").innerHTML='';
    document.getElementById("story").innerHTML=story[nb_story];
    nb_story ++;
    let_story();
}

//Fonction qui set la position de l'histoire en fonction du choix fait précedemment
function makeChoice(value){
    EraseTxt("mesboutons");
    if (value === 'Homer'){
        TheHero = Homer;
        document.getElementById("myherosgif").innerHTML = "<img alt='homer' src='Personnages/homer.gif'/>"
    } else if (value === 'Marge'){
        TheHero = Marge;
        document.getElementById("myherosgif").innerHTML = "<img alt='marge' src='Personnages/marge.gif'/>"
    } else if (value === 'Bart'){
        TheHero = Bart;
        document.getElementById("myherosgif").innerHTML = "<img alt='bart' src='Personnages/bart.gif'/>"
    } else if (value === 'Lisa'){
        TheHero = Lisa;
        document.getElementById("myherosgif").innerHTML = "<img alt='lisa' src='Personnages/lisa.gif'/>"
    } else if (value === 'Maggie'){
        TheHero = Maggie;
        document.getElementById("myherosgif").innerHTML = "<img alt='maggie' src='Personnages/maggie.gif'/>"
    } else if (value === 'thé'){
        DisplayTxt("story", "Quelle ambiance agréable ! Vous récupérez 3hp");
        TheHero.hp += 3;
    } else if (value === 'moe'){
        TheEnnemi = alcoholic_man;
        DisplayTxt("story", "En allant chez Moe, vous rencontrez un homme alcoolisé qui refuse que vous vous asseyiez au bar. <br> Votre rage l'emporte et vous décidez de l'affronter lui aussi");
        EnnemiStats(TheEnnemi);
        DisplayAttack(TheEnnemi);
    } else if (value === 'télé'){
        TheEnnemi = family_member;
        EnnemiStats(TheEnnemi);
        DisplayTxt("story", "Vous n'êtes pas seul(e) à vouloir regarder la télé ! Vous affrontez un membre de votre famille pour avoir la télécommande");
        DisplayAttack(family_member);
    } else if (value === 'jeu_société'){
        DisplayTxt("story", "Vous jouez au Monopoly avec les membres de votre famille. Vous gagnez 2 de résistence");
        TheHero.resistence += 2;
        DisplayTxt("story", "Vous êtes sur le point de gagner, mais vous devez tricher pour ça...");
        DisplayChoices("mesboutons","...Vous gagnez à tout prix!","winwin");
        DisplayChoices("mesboutons", "...Vous laissez gagner votre adversaire", "sosweet");
    } else if (value === 'winwin'){
        DisplayTxt("story", "Vous êtes très doué(e) dans la triche ! +2 de force !");
        TheHero.force += 2;
    } else if (value === 'sosweet'){
        DisplayTxt("story", "Vous laissez gagner votre adversaire et perdez 1 de résistence mais gagnez 3 de gentillesse (ça ne risque pas de vous servir..)");
        TheHero.resistence -= 1;
    }
    HeroStats();
    // nb_story = value-1;
    let_story();
}

//La fonction qui affiche l'histoire en sautant des lignes à chaque fois
function let_story(){
    myStoryBoucle = setTimeout(function () {
        document.getElementById("story").innerHTML += "<br>" + story[nb_story];
        if (nb_story !== -1){
            nb_story ++;
            let_story();
        }
        if (nb_story === 4){
            StopTheStoryBoucle();
            DisplayChoices("mesboutons", "Homer", 'Homer');
            DisplayChoices("mesboutons", "Marge", 'Marge');
            DisplayChoices("mesboutons", "Bart", 'Bart');
            DisplayChoices("mesboutons", "Lisa", 'Lisa');
            DisplayChoices("mesboutons", "Maggie", 'Maggie');

        }
        if(nb_story === 7){
            StopTheStoryBoucle();
            TheEnnemi = vendeur_BD;
            document.getElementById("myennemigif").innerHTML = "<img alt='jeff' src='Personnages/jeff.gif'/>";
            EnnemiStats(TheEnnemi);
            DisplayAttack(TheEnnemi);
        }
        if(nb_story === 8){
            StopTheStoryBoucle();
            DisplayChoices("mesboutons", "...au salon de thé", 'thé');
            DisplayChoices("mesboutons", "...chez Moe", 'moe');
        }
        if(nb_story === 9){
            StopTheStoryBoucle();
            DisplayChoices("mesboutons","...regarder la télévision", 'télé');
            DisplayChoices("mesboutons","...jouer à un jeu de société",'jeu_société');
        }
        if (story[nb_story] === undefined){
            StopTheStoryBoucle();
        }

    }, 1000)
}

function StopTheStoryBoucle() {
    clearTimeout(myStoryBoucle);
}

//La fonction qui affiche du texte, où je veux dans ma page HTML
function DisplayTxt(myid,Txt)
{
    document.getElementById(myid).innerHTML = Txt;
}

function EraseTxt(myid){
    document.getElementById(myid).innerHTML = '';
}

//La fonction qui affiche mes différents choix
function DisplayChoices(myid, choice, value) {
    document.getElementById(myid).innerHTML += "<button value='" + value + "' onclick='makeChoice(\"" + value + "\")'>" + choice + "</button>";
}

function DisplayAttack(){
    document.getElementById("mesactions").innerHTML += "<button onclick='attack(TheEnnemi)'>Attaquer</button>"
}

//La fonction qui permet d'afficher les stats du héros
function HeroStats() {
    DisplayTxt("heroname", TheHero.nom);
    DisplayTxt("herohp", TheHero.hp);
    DisplayTxt("heroxp", TheHero.xp);
    DisplayTxt("heroforce", TheHero.force);
    DisplayTxt("herores", TheHero.resistence);
}

function EnnemiStats(ennemi) {
    DisplayTxt("enneminame", ennemi.nom);
    DisplayTxt("ennemihp", ennemi.hp);
    DisplayTxt("ennemiforce", ennemi.force);
    DisplayTxt("ennemires", ennemi.resistence);
}
