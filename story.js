function begin() {
    switch (histoire) {
        case 1 :
            affichetout();
            document.getElementById("thebeggining").innerHTML = "Continuer";
            // document.getElementById("thebeggining").onclick = begin;
            Texte = "Bonjour. <br>Vous vous réveillez dans votre chambre, tranquillement. <br> Vous vous levez, et vous placez devant votre mirroir. <br> Que voyez-vous ?";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='Homer' onclick='ChooseHero(Homer)'>Homer</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='Marge' onclick='ChooseHero(Marge)'>Marge</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='Bart' onclick='ChooseHero(Bart)'>Bart</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='Lisa' onclick='ChooseHero(Lisa)'>Lisa</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='Maggie' onclick='ChooseHero(Maggie)'>Maggie</button>";
            document.getElementById("thebeggining").style.display = "none";
        break;
        case 2 :
            Texte = "Vous êtes avec votre famille, et décidez d'aller acheter des BD au magasin (de BD, CQFD)<br>Jeff (le vendeur) ne vous juge pas digne d'acheter le dernier Green Lantern.<br>Vous le défiez dans un combat";
            TheEnnemi = vendeur_BD;
            DisplayAttack();
        break;
        case 3:
            document.getElementById("thebeggining").style.display = "none";
            Texte = "Après ce dur combat, vous décidez d'aller vous ressourcer...";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='the' onclick='histoire=4;EraseChoices(); begin();'>...au salon de thé</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='moe' onclick='histoire=5;EraseChoices(); begin();'>...chez Moe</button>";
        break;
        case 4:
            document.getElementById("thebeggining").style.display = "flex";
            Texte = "Quelle ambiance agréable ! Vous gagnez 3 hp";
            TheHero.hp +=3;
            WriteTxt("herohp", TheHero.hp);
            histoire = 6;
        break;
        case 5:
            Texte = "En allant chez Moe, vous rencontrez un homme alcoolisé qui refuse que vous vous asseyiez au bar. <br> Votre rage l'emporte et vous décidez de l'affronter lui aussi";
            TheEnnemi = alcoholic_man;
            DisplayAttack();
        break;
        case 6 :
            Texte = "Vous avez vaincu l'homme bourré ! La bière que vous pouvez enfin déguster vous rapporte 1hp !";
            TheHero.hp +=1;
            WriteTxt("herohp", TheHero.hp);
        break;
        case 7 :
            document.getElementById("thebeggining").style.display = "none";
            Texte = "Vous rentrez chez vous après cette balade et...";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='jeu' onclick='histoire=8;EraseChoices(); begin();'>...jouez à un jeu de société</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='tele' onclick='histoire=11;EraseChoices(); begin();'>...partez regarder la télévision</button>";
        break;
        case 8 :
            Texte = "En jouant, votre esprit se renforce et vous gagnez 2 de résistence !<br>Vous pourriez facilement gagner la partie en trichant un peu...";
            TheHero.resistence += 2;
            WriteTxt("herores", TheHero.resistence);
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='triche' onclick='histoire=9;EraseChoices(); begin();'>Gagner à tout prix !</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='sympa' onclick='histoire=10;EraseChoices(); begin();'>Jouer fair play !</button>";
        break;
        case 9 :
            document.getElementById("thebeggining").style.display = "flex";
            Texte = "Vous êtes très doué ! Et hop, + 2 de force !";
            TheHero.force +=2;
            WriteTxt("heroforce", TheHero.force);
            histoire = 18;
        break;
        case 10 :
            document.getElementById("thebeggining").style.display = "flex";
            Texte = "Vous laissez gagner votre adversaire et perdez 1 de résistence mais gagnez 3 de gentillesse (ça ne risque pas de vous servir..)";
            TheHero.resistence -= 1;
            WriteTxt("herores", TheHero.resistence);
            histoire = 18;
        break;
        case 11:
            Texte = "Vous n'êtes pas seul(e) à vouloir regarder la télé ! Battez-vous pour savoir qui aura la télécommande";
            TheEnnemi = family_member;
            DisplayAttack();
        break;
        case 12:
            document.getElementById("thebeggining").style.display = "none";
            Texte = "Une fois la télécommande en main, vous...";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='itchy' onclick='histoire=13;EraseChoices(); begin();'>Regardez Itchy et Scratchy</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='cacahuetes' onclick='histoire=14;EraseChoices(); begin();'>Allez chercher des cacahuètes avant d'allumer la télé</button>";
        break;
        case 13 :
            Texte = "Vous êtes un gros flemmard, dommage : - 1 de résistence";
            TheHero.resistence -=1;
            WriteTxt("herores", TheHero.resistence);
            histoire = 18;
        break;
        case 14 :
            document.getElementById("thebeggining").style.display = "none";
            Texte = "Vous avez récupéré les cacahuètes Néanmoins en les mangeant vous avez grossi (-2 de réssitence) ! Que souhaitez-vous regarder ?";
            TheHero.resistence -=2;
            WriteTxt("herores", TheHero.resistence);
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='itchy' onclick='histoire=15;EraseChoices(); begin();'>Itchy et Scratchy</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='mouches' onclick='histoire=16;EraseChoices(); begin();'>Un documentaire sur la vie sexuelle des mouches au Wakanda</button>";
        break;
        case 15 :
            Texte = "Votre cerveau est tout ramolo maintenant ! Regardez, il coule ! -1 de résistence";
            TheHero.resistence -= 1;
            WriteTxt("herores", TheHero.resistence);
            histoire = 18;
        break;
        case 16 :
            document.getElementById("thebeggining").style.display = "none";
            Texte = "Vous avec beaucoup de courage pour voir une telle émission ! +1 de force<br>Souhaitez-vous regarder jusqu'au bout ?";
            TheHero.force +=1;
            WriteTxt("heroforce", TheHero.force);
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='interet' onclick='histoire=17;EraseChoices(); begin();'>Oui, c'est intéressant !</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='trauma' onclick='histoire=18;EraseChoices(); begin();'>Heuuuu... STOP !!</button>";
        break;
        case 17 :
            document.getElementById("thebeggining").style.display = "flex";
            Texte = "Qu'elle force d'esprit ! Vous gagnez 5 points de résistence";
            TheHero.resistence += 5;
            WriteTxt("herores", TheHero.resistence);
            histoire = 18;
        break;
        case 18 :
            Texte = "Vous avez le droit à un bonus de 2hp. Vous en aurez bien besoin pour passer un tel traumatisme...";
            TheHero.hp += 2;
            WriteTxt("herohp", TheHero.hp);
        break;
        case 19 :
            document.getElementById("thebeggining").style.display = "none";
            Texte = "La nuit commence à tomber. Vous finissez par être seul(e) et avez faim";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='manger' onclick='histoire=20;EraseChoices(); begin();'>Aller faire chauffer une pizza au micro-ondes</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='chercher' onclick='histoire=21;EraseChoices(); begin();'>Chercher les membres de la famille</button>";
        break;
        case 20:
            document.getElementById("thebeggining").style.display = "flex";
            Texte = "La graisse de la pizza vous empli : -2 de force";
            TheHero.force -= 2;
            WriteTxt("heroforce", TheHero.force);
            histoire = 27;
        break;
        case 21 :
            document.getElementById("thebeggining").style.display = "none";
            Texte = "Toutes les lumières sont éteintes, vous ne voyez que très peu. Que faire ?";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='lumières' onclick='histoire=22;EraseChoices(); begin();'>Allumer toutes les lumières</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='torche' onclick='histoire=25;EraseChoices(); begin();'>Utiliser une lampe torche</button>";
        break;
        case 22 :
            document.getElementById("thebeggining").style.display = "none";
            Texte = "Vous allumez toutes les lumières, et surprenez Monsieur Burns dans votre maison qui sse pense chez lui";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='manger' onclick='histoire=23;EraseChoices(); begin();'>Le chasser</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='chercher' onclick='histoire=24;EraseChoices(); begin();'>Le laisser dans la maison</button>";
        break;
        case 23 :
            TheEnnemi = Mr_Burns;
            histoire = 26;
            DisplayAttack();
        break;
        case 24 :
            document.getElementById("thebeggining").style.display = "flex";
            Texte = "Vous le laissez déambuler dans la maison, continuant de se perdre..";
            histoire = 26;
        break;
        case 25 :
            Texte = "Vous tombez sur Tahiti Bob !! Vous savez très bien pour qui est-ce qu'il est venu...";
            TheEnnemi = Tahiti_Bob;
            DisplayAttack();
        break;
        case 26 :
            document.getElementById("thebeggining").style.display = "flex";
            Texte = "Félicitations ! Vous êtes enfin débarassé de lui ! +1 de force";
            TheHero.force += 1;
            WriteTxt("heroforce", TheHero.force);
        break;
        case 27 :
            document.getElementById("thebeggining").style.display = "flex";
            Texte = "Vous entendez du bruit dans le sous-sol...<br>En vous rapprochant vous vous rendez compte qu'il s'agit de votre famille !<br>Vous ouvrez la porte et les sortez de là-dessous.<br>Vous allez ensuite vous coucher, et vous récupérez beaucoup d'hp";
            TheHero.hp = TheHero.max_hp;
            WriteTxt("herohp", TheHero.hp);
        break;
        case 28 :
            document.getElementById("thebeggining").style.display = "none";
            Texte = "Le lendemain, après le petit déjeuner, votre famille va faire des courses";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='manger' onclick='histoire=29;EraseChoices(); begin();'>Accompagner la famille au supermarché</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='chercher' onclick='histoire=30;EraseChoices(); begin();'>Rester tranquille à la maison</button>";
        break;
        case 29 :
            document.getElementById("thebeggining").style.display = "flex";
            Texte = "Vous avez quelques problèmes avec la sécurité du magasin, mais finissez par passer. Vous gagnez 5 xp (ouais c'est pas un combat et alors ?)";
            TheHero.xp += 5;
            WriteTxt("heroxp", TheHero.xp);
            histoire = 30;
        break;
        case 30 :
            document.getElementById("thebeggining").style.display = "flex";
            Texte = "Vous profitez d'être seul(e) pour faire ce que bon vous semble et traîner dans la maison.<br>L'ennui vous guette...<br>- 2 de résistence et -1 de force";
            TheHero.resistence -= 2;
            TheHero.force -= 1;
            WriteTxt("herores", TheHero.resistence);
            WriteTxt("heroforce", TheHero.force);
        break;
        case 31 :
            document.getElementById("thebeggining").style.display = "none";
            Texte = "Une fois tout le monde de retour à la maison, toute la famille décide d'aller à l'église";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='manger' onclick='histoire=32;EraseChoices(); begin();'>Vous vous repentissez de toute la violence dont vous avez fait preuve</button>";
            document.getElementById("mesboutons").innerHTML += "<button class='choice button' value='chercher' onclick='histoire=33;EraseChoices(); begin();'>Vous vouez votre âme au diable</button>";
        break;
        case 32 :
            document.getElementById("thebeggining").style.display = "flex";
            Texte = "Le révérant LoveJoy vous absout de tous vos pêchés. Vous vous sentez bien.<br>+ 5 hp bonus";
            TheHero.hp += 5;
            WriteTxt("herohp", TheHero.hp);
            histoire = 34;
        break;
        case 33 :
            Texte = "Le révérant LoveJoy ne vous laissera pas faire, il va falloir lui passer sur le corps !";
            TheEnnemi = reverant;
            DisplayAttack();
        break;
        case 34 :
            document.getElementById("thebeggining").style.display = "flex";
            Texte = "Vous êtes désormais un serviteur de Satan. La puissance vous submerge<br>- 5 de résistence, +100 hp et + 10000 de force";
            TheHero.resistence -= 5;
            TheHero.hp += 100;
            TheHero.force += 10000;
            WriteTxt("herores", TheHero.resistence);
            WriteTxt("herohp", TheHero.hp);
            WriteTxt("heroforce", TheHero.force);
        break;
        case 35 :
            Texte = "Quelqu'un se rappoche de vous, vous sentez sa présence...<br>Plus rien. Il n'y a plus rien.<br>Vous vous retournez.... et votre mère se tient debout devant vous, le regard froid<br>Elle est énervée que vous n'ayez pas fait vos devoirs et à débranché votre PC.<br>Vous n'avez plus d'autre choix que d'aller travailler, et laisser Les Simpson...";
        break;
        case 36 :
            end = true;
            Texte = "A une prochaine fois peut-être !";
            document.getElementById("mesboutons").innerHTML = "<button class='button' onclick='replay()'>Recommencer</button>"; //On met un bouton qui reload la page pour replay
        break;
        default:
            Texte = "Il semblerait qu'il y ait un problème dans le script...dommage...";
        break;
    }
    WriteStory(Texte);
    histoire ++;
    if (end === true){
        confettis();
    }
}
