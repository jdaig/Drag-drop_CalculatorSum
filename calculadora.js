// *****************************************************
// DE ESTA FORMA SE DA PARA UN EJEMPLO NO ORIENTADO A OBJETOS

// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     console.log(data);
//     // var para = document.getElementById("cardSlots");
//     // para.appendChild(document.getElementById(data));
//     $("#"+data).clone().appendTo("#cardSlots");

//     };

// ****************************************************

// ORIENTADO A OBJETOS 
$(document).ready(function(){
  
  for(i=0; i < 10; i++){
    card = new Card(i);
    $("#cardPile").append(card.element);
  }; // se crean las targetas de numeros

  $(".digit").draggable({
    helper: "clone"
  }); // se le agrega el attr draggable con el helper clone

  $("#cardSlots").droppable({
    accept: ".digit",
    drop: Drop
  }); // indica la clase que acepta e indica que acer despues del drop
  // en este caso se llama a la funcion Drop

  function Drop(event, ui){
    // console.log(event)
    var length = $("#cardSlots > div").length;

    if (length < 10){
    ui.draggable.clone().detach().appendTo($("#cardSlots"));
    var droppableValue = parseInt(ui.draggable.html());
    var sum = parseInt($("#total_sum").html());
    total_sum = sum + droppableValue;
    $("#total_sum").html(total_sum);
    
    };
  }

});

var Card = function(number){
  this.element = "<div class='digit'>" + number + "</div>"
};

var cardSlot = function () { //realmente no se ocupo pues ya lo daba
  //por default el html
  console.log("entraste al display calc");
  this.card_array = []
};

