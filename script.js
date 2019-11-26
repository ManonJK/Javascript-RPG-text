let story = [
    "Bonjour.\nVous vous réveillez dans votre chambre, tranquillement.",
    "Vous vous levez, et vous placez devant votre mirroir.",
    "\nQue voyez-vous ?",
];
let nb_story = 0;

function begin(){
    document.getElementById("mesboutons").innerHTML='';
    document.getElementById("story").innerHTML=story[nb_story];
    nb_story ++;
    let_story();
}

function let_story(){
    setTimeout(function () {
        document.getElementById("story").innerHTML += story[nb_story];
        if (nb_story !== 3){
            nb_story ++;
            let_story();
        }

    }, 3000)
}
