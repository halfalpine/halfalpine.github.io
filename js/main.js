window.onload = function() {
  var Colors = function() {
    this.squares = document.getElementsByClassName('contact');
  };
  Colors.prototype = {
    init: function() {
      Array.prototype.forEach.call(squares, (square) => {square.style.backgroundColor="rgba(" + pickColor().join(',') + ", 1)"});
      setInterval(() => newColor(), 2000);
    },
    // Applies pickColor to pickSquare
    newColor: function() {
      // Remove?
      // var color = pickColor();
      var square = pickSquare(squares.length);
      square.style.backgroundColor="rgba(" + pickColor().join(',') + ", 1)";
    },
    // Creates random RGB value
    pickColor: function(){
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
    pickSquare: function(numSquares) {
      return squares[Math.floor(Math.random() * numSquares)];
    },
  };
  Colors.init();
};
