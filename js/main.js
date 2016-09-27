window.onload = function() {
  var squares = document.getElementsByClassName('contact');
  // Applies pickColor to pickSquare
  var newColor = function() {
    var color = pickColor();
    var s = pickSquare(squares.length);
    s.style.backgroundColor="rgba(" + pickColor().join(',') + ", 1)";
    console.log(s);
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
  console.log('squares', squares);
  console.log('square1', squares[0]);
  console.log('square2', squares[1]);
  console.log('square3', squares[2]);
  console.log('square4', squares[3]);
  console.log(pickSquare(squares.length));
  console.log(pickSquare(squares.length));
  console.log(pickSquare(squares.length));
  console.log(pickSquare(squares.length));
  setInterval(() => newColor(), 5000);
};
