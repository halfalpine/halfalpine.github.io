window.onload = function() {
  var squares = document.getElementsByClassName('contact');
  var getSquares = function(){

  };
  var newColor = function() {
    var squares = document.getElementsByClassName('contact');
  };
  var pickColor = function(prevColor){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  };
  var pickSquare = function(numSquares) {
    var randomSquare = Math.floor(Math.random()* numSquares) + 1;
    return randomSquare;
  };
  newColor();
  console.log('squares', squares);
  console.log('square1', squares[0]);
  console.log('square2', squares[1]);
  console.log('square3', squares[2]);
  console.log('square4', squares[3]);
  window.setInterval(newColor, 5000);
};
