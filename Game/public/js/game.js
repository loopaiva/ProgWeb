
(function () {

    const FPS = 1; 
    let gameDimensions = [1243, 960];
    let focoDimensions = [100, 130];
    let probFoco = 25;
    let reserva;
    let pontuacao;
    let vida;
    let focos = [];
    let gameLoop;
   
  
    function init() {
      pontuacao = new Pontuacao();
      vida = new Vida();
        
      reserva = new Reserva();
     
  
  
      window.addEventListener("keydown", function (e) {
        if (e.key === 's') {
          console.log("iniciar");
          gameLoop = setInterval(run, 1000/FPS);
        }
      })
    
     // gameLoop = setInterval(run, 1000/FPS);
    }
  
    window.addEventListener("keydown", function (e) {
      if (e.key === 'p') {
        console.log("pausar");
        clearInterval(gameLoop);
      }
    })
  
  
  
  
  
    class Reserva {
      constructor () {
  
        this.element = document.createElement("div");
        this.element.className = "reserva";
        this.element.style.width = `${gameDimensions[0]}px`;
        this.element.style.height = `${gameDimensions[1]}px`;
        document.getElementById("jogo-div").appendChild(this.element);
      }
    }
  
    class Pontuacao {
      constructor(){
        let pont = document.createTextNode("00000")
        this.element = document.createElement("div");
        this.element.className = "pontuacao";
        this.element.appendChild(pont);
        document.getElementById("jogo-div").appendChild(this.element);
     
  
      }
    }
  
    class Vida {
  
      constructor(){
        for (let i =0; i<5; i++){
          let v = document.createElement("div");
          v.className = "vida";
          document.getElementById("jogo-div").appendChild(v);
        }
        
       /* this.element = document.createElement("div");
        this.element.className = "vida";
        this.element.style.width = `100px`;
        this.element.style.height = `100px`;
        document.body.appendChild(this.element);*/
      }
  
  
    }
  
  
  
    
  
    class FocoIncendio {
      constructor () {
        this.element = document.createElement("div");
        this.element.className = "foco-incendio";
        this.element.style.width = `${focoDimensions[0]}px`;
        this.element.style.height = `${focoDimensions[1]}px`;
        this.element.style.left = `${Math.floor((Math.random() * (gameDimensions[0]-focoDimensions[0])))}px`;
        this.element.style.top = `${Math.floor((Math.random() * (gameDimensions[1]-focoDimensions[1])))}px`;
        reserva.element.appendChild(this.element);
  
        
  
        setTimeout(() =>{
          if(this.element != null){
            this.element.style.backgroundImage = "url('/img/devastacao.png')";
            this.element.style.backgroundSize = `${focoDimensions[1]}px`;
            this.element.onclick = null;
    
  
          }
        }, 2000/FPS);
  
      }
  
  
  
    }
  
    function run () {
      if (Math.random() * 100 < probFoco) {
        let foco = new FocoIncendio();
        focos.push(foco); 
        
      }
    }
  
   
  
    document.getElementById("jogo-div").addEventListener('click', function(e) {
      if (!e.target.classList.contains('foco-incendio')) return;
      console.log("cliked");
      e.target.classList.remove('foco-incendio');
      let example = document.querySelector(".pontuacao");
      document.querySelector(".pontuacao").innerHTML = parseInt(example.innerHTML)+10 ; 
          
      
     
    }); 
    
    
    init();
  })();
  