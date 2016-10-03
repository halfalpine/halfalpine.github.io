var Colors = (function() {
  var squares,

  init = function(element) {
    squares = document.getElementsByClassName(element);
    Array.prototype.forEach.call(squares, newColorToSquare);
    setInterval(() => newColorToRandom(), 2000);
  },

  // Applies pickColor to pickSquare
  newColorToRandom = function() {
    var square = pickSquare(squares.length);
    newColorToSquare(square);
  },

  newColorToSquare = function(square) {
    square.style.backgroundColor="rgba(" + pickColor().join(',') + ", 1)";
  },

  // Creates random RGB value
  pickColor = function(){
    var randRed = random256();
    var randGreen = random256(randRed);
    var randBlue = random256(randBlue);
    function random256(prevColor) {
      var randomColor = Math.floor(Math.random()*255).toString(10);
      return Math.abs(randomColor - prevColor) < 16 ? randomColor += 72 : randomColor;
    }
    return [randRed, randBlue, randGreen];
  },

  // Returns a random element from the contact links
  pickSquare = function(numSquares) {
    return squares[Math.floor(Math.random() * numSquares)];
  };

  return {
    init: init
  };
})();

window.onload = function() {
  Colors.init('contact');
};
