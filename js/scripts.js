//Back end logic
function withoutVowels(sentence) {
  var vowels = ['a', 'i', 'u', 'e', 'o']
  var withoutVowels = "";
  var letter;
  var splot = sentence.split("");

  for (var i = 0; i < splot.length-1; i++) {
  		vowels.forEach(function(letter) {
        if (splot[i] === letter) {
          splot[i] = "-";
        }
      })
    }
    var puzzle = splot.join("");
    return puzzle;

  }

var sentence = "This is an example."

console.log(withoutVowels(sentence));


//user interface
