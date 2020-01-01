class Personnage {
    constructor (nom, hp, resistence, force) {
        this.nom = nom;
        this.hp = hp;
        this.resistence = resistence;
        this.force = force;
    }
}

class Heros extends Personnage{
    constructor (nom, hp, max_hp,  resistence, force, xp){
        super(nom, hp, resistence, force, xp);
        this.xp = xp;
        this.max_hp = max_hp;
    }
}

let Homer = new Heros("Homer", 70, 70,15, 15, 10);
let Marge = new Heros("Marge", 50, 50,60, 7, 10);
let Bart = new Heros("Bart", 40, 40,25, 10, 10);
let Lisa = new Heros("Lisa", 20, 20,50, 5, 10);
let Maggie = new Heros("Maggie", 10, 10,90, 60, 10);

let vendeur_BD = new Personnage("Jeff", 15, 5, 1);
let alcoholic_man = new Personnage("Barney", 1, 3, 5);
let family_member = new Personnage("Membre de la famille", 70, 30, 20);
let Mr_Burns = new Personnage("Monsieur Burns", 10, 10, 1);
let Tahiti_Bob = new Personnage("Tahiti Bob", 20, 13, 6);
let reverant = new Personnage("Révérant Lovejoy", 150, 40, 75);
