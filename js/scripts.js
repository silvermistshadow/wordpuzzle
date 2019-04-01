//Back end logic
var output = [];
function withoutVowels(sentence) {
  var vowels = ['a', 'i', 'u', 'e', 'o']
  var withoutVowels = "";
  var letter;
  for (var i = 0; i < sentence.length-1; i++) {
  		vowels.forEach(function(letter) {
        if (vowel) {
          sentence[i] = "-"
        }
      })
    }
    return output.join("");
  }

var sentence = "This is an example."

console.log(withoutVowels(sentence));


//user interface
