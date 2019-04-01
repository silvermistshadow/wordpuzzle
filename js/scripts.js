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
//user interface
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentInput").val();

    var puzzle = withoutVowels(sentence);

    $("#puzzleOut").text(puzzle);
    $("#output").show();
    $("#formBox").hide();

  });
  $("#clearOut").click(function(){
    $("#formBox").show();
    $("#output").hide();
  });

});
