let msg = "Escolha sua jogada: \n 1 - Papel\n 2 - Pedra\n 3 - Tesoura"

let random;
let valor, pont =0;

//CONSOLE
function result(user, pc){
    if(user>3 || user <1){
        return 0;
    }
    if(user == 1 && pc == 1){
        return 0;
    }
    if(user == 2 && pc == 2){
        return 0;
    }
    if(user == 3 && pc == 3){
        return 0;
    }
    if(user == 1 && pc == 2){
        return 1;
    }
    if(user == 1 && pc == 3){
        return 0;
    }
    if(user == 2 && pc == 1){
        return 0;
    }
    if(user == 2 && pc == 3){
        return 1;
    }
    if(user == 3 && pc == 1){
        return 1;
    }
    if(user == 3 && pc == 2){
        return 0;
    }
    
}

function jogo(){
    

    let continua = 1;
    while(continua){
        console.log(msg);
        valor = parseInt(window.prompt("Informe: \n 1 - Papel\n 2 - Pedra\n 3 - Tesoura"));
        random = Math.floor(Math.random() * 3);
        

        if (result(valor, random) == 0) {
            console.log("Computador jogou " + random);
            break; 
        }

        console.log("Computador jogou " + random);
        pont ++;
        


    }
    console.log("Placar final: " + pont);
    
}

jogo();


