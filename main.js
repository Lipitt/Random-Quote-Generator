//creo un array con 30 frases, y otro con sus autores.
var frases = [
  "History never really says goodbye. History says, 'See you later.'",
  "To live is to suffer, to survive is to find some meaning in the suffering.",
  "Try not to become a man of success, but rather try to become a man of value.",
  "I think, therefore I am.",
  "The supreme art of war is to subdue the enemy without fighting.",
  "A leader is a dealer in hope.",
  "Those who lack the courage will always find a philosophy to justify it.",
  "The Universe is under no obligation to make sense to you.",
  "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
  "Freedom is what you do with what's been done to you.",
  "Innovation distinguishes between a leader and a follower.",
  "You want to be the pebble in the pond that creates the ripple for change.",
  "Love all, trust a few, do wrong to none.",
  "The secret of getting ahead is getting started.",
  "Choose a job you love, and you will never have to work a day in your life.",
  "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
  "The weak can never forgive. Forgiveness is the attribute of the strong.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "You will not be punished for your anger, you will be punished by your anger.",
  "We must accept finite disappointment, but never lose infinite hope.",
  "Ignorance, the root and stem of all evil.",
  "We are what we believe we are.",
  "Intelligence is the ability to adapt to change.",
  "The journey of a thousand miles begins with one step.",
  "Start with what is right rather than what is acceptable.",
  "After climbing a great hill, one only finds that there are many more hills to climb.",
  "Changes and progress very rarely are gifts from above. They come out of struggles from below.",
  "The truth is rarely pure and never simple.",
  "Be less curious about people and more curious about ideas.",
  "The best way to find out if you can trust somebody is to trust them."
];

var autores = [
  "Eduardo Galeano",
  "Friedrich Nietzsche",
  "Albert Einstein",
  "Rene Descartes",
  "Sun Tzu",
  "Napoleon Bonaparte",
  "Albert Camus",
  "Neil deGrasse Tyson",
  "Bill Gates",
  "Jean-Paul Sartre",
  "Steve Jobs",
  "Tim Cook",
  "William Shakespeare",
  "Mark Twain",
  "Confucius",
  "Abraham Lincoln",
  "Mahatma Gandhi",
  "Winston Churchill",
  "Buddah",
  "Martin Luther King, Jr.",
  "Plato",
  "C. S. Lewis",
  "Stephen Hawking",
  "Lao Tzu",
  "Franz Kafka",
  "Nelson Mandela",
  "Noam Chomsky",
  "Oscar Wilde",
  "Marie Curie",
  "Ernest Hemingway"
];

var colores = [
  "teal",
  "burlywood",
  "brown",
  "blueviolet",
  "crimson",
  "cadetblue",
  "chocolate",
  "firebrick",
  "fuchsia",
  "forestgreen",
  "indigo",
  "lightpink",
  "maroon",
  "magenta",
  "black",
  "cornflowerblue",
  "violet",
  "navy",
  "salmon",
  "seagreen",
  "rebeccapurple",
  "red",
  "turquoise",
  "olive",
  "orange",
  "peru"
];

$("document").ready(function() {
  generateQuote();
});
$("#quoteBtn").on("click", function() {
  generateQuote();
});

$("#twitterBtn").on("click", function() {
  var quote = '"' + frases[i] + '"';
  var author = autores[i];
  var hashtag = " %23quotes";
  var link =
    "https://twitter.com/intent/tweet?text=" + quote + " " + author + hashtag;
  $("#twitterAnchor").attr("href", link);
});

var quoteArrayValue;
var colorArrayValue;
var i;
var j;

function generateQuote() {
  randomValues();

  if (quoteArrayValue != i && colorArrayValue != j) {
    fadingOut();
    fadingIn();
    quoteArrayValue = i;
    colorArrayValue = j;
  } else {
    generateQuote();
  }

  function randomValues() {
    i = Math.floor(Math.random() * 30);
    j = Math.floor(Math.random() * 26);
  }
  function fadingOut() {
    $("body").fadeOut(0);
    $("#quote").fadeOut(0);
    $("#author").fadeOut(0);
    $("#quoteDiv").fadeOut(0);
    $("#twitterBtn").fadeOut(0);
    $("#quoteBtn").fadeOut(0);
  }
  function fadingIn() {
    $("#quote").fadeIn("slow", replaceValue());
    $("#author").fadeIn("slow", replaceValue());
    $("body").fadeIn("slow", replaceValue());
    $("#quoteDiv").fadeIn("slow", replaceValue());
    $("#twitterBtn").fadeIn("slow", replaceValue());
    $("#quoteBtn").fadeIn("slow", replaceValue());
  }

  function replaceValue() {
    $("#quote").html(frases[i]);
    $("#author").html("- " + autores[i]);
    $("body").css("background-color", colores[j]);
    $("#quoteDiv").css("color", colores[j]);
    $("#twitterBtn").css("background-color", colores[j]);
    $("#quoteBtn").css("background-color", colores[j]);
  }
}
