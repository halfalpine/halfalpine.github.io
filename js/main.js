window.onload = function() {
  var squares = document.getElementsByClassName('contact');
  // Applies pickColor to pickSquare
  var newColor = function() {
    var color = pickColor();
    var square = pickSquare(squares.length);
    square.style.backgroundColor="rgba(" + pickColor().join(',') + ", 1)";
  };
  // Creates random RGB value
  var pickColor = function(){
    var randRed = random256();
    var randGreen = random256(randRed);
    var randBlue = random256(randBlue);
    function random256(prevColor) {
      var randomColor = Math.floor(Math.random()*255).toString(10);
       return Math.abs(randomColor - prevColor) < 16 ? randomColor += 72 : randomColor;
    }
    return [randRed, randBlue, randGreen];
  };
  // Returns a random element from the contact links
  var pickSquare = function(numSquares) {
    return squares[Math.floor(Math.random() * numSquares)];
  };
  // squares is an object, not an array
  //squares.forEach((square) => console.log(square));
  console.log(squares);
  Array.prototype.forEach.call(squares, (square) => {square.style.backgroundColor="rgba(" + pickColor().join(',') + ", 1)"});
  setInterval(() => newColor(), 2000);
};
