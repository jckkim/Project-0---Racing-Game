// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
console.log('Testing Consolelog')

$(this).on("keydown", function(e){
  if (e.keyCode == 65) {
    $('#car1').css({"padding-left": "+=50px"})
    console.log("You pressed A!");
  }
    else if (e.keyCode == 74) {
      $('#car2').css({"padding-left": "+=50px"})
      console.log("You pressed J!");
    }
  });
});
