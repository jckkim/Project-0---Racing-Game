// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
console.log('Testing Consolelog')

$(this).on("keydown", function(e){
  if (e.keyCode == 65) {
    $('#car1').css({"padding-left": "+=50px"})
    var yellowPadding = $('#car1').css("padding-left");
    console.log(yellowPadding);
    console.log("You pressed A!");
    if (yellowPadding === "950px"){
      alert("Yellow Car Wins!")
    }
  }
    else if (e.keyCode == 74) {
      $('#car2').css({"padding-left": "+=50px"})
      var bluePadding = $('#car2').css("padding-left");
      console.log("You pressed J!");
      console.log(bluePadding);
      if (bluePadding === "950px"){
        alert ("Blue Car Wins!")
      }



    }
  });

  $(".resetButton").click(function(){
    location.reload();
  });

/*$( "#target" ).click(function() {
  alert( "Handler for .click() called." );
  */


});
