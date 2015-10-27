/* global KeyActions */

$(document).on("keydown", function(e){
  var key = String.fromCharCode(e.keyCode);
  KeyActions.keyPressed(key);
});

$(document).on("keyup", function(e){
  var key = String.fromCharCode(e.keyCode);
  KeyActions.keyReleased(key);
});
