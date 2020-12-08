document.body.onload = addElemento;

function addElemento(){


   for (var i = 1; i <=10; i++){
    tableCreate(i);
  
   }

   





   
}


function tableCreate(num) {
  //body 
  var body = document.getElementsByTagName("body")[0];

  //elementos <table> e <tbody>
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");
  var j = 0, i = 0;
  var texto, tr, td;
  
  for (j = 1; j<=10; j++){
    //linhas
    tr = document.createElement("tr");
    texto = document.createTextNode(num + "x" + j); 
    for(var i=0; i<2; i++){
        //criar colunas
        td = document.createElement("td");
        
        if(i>0){
          texto = document.createTextNode(j*num);
        }
      td.appendChild(texto);
      tr.appendChild(td);    
      }
  tbody.appendChild(tr);  
}  
  table.appendChild(tbody)
  //colocar table dentro do body
  body.appendChild(table);


  table.setAttribute("border", "2");
  table.setAttribute("class", "w");
  var divAtual = document.getElementById("div1");
  document.body.insertBefore(table, divAtual);

  
}





