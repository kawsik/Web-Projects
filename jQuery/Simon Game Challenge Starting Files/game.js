gamePattern = []
var buttonColours = ["red", "blue", "green", "yellow"]
var userClickedPattern = []

var started = false;

level = 0

$(".btn").on( "click", function(event) {
    userChosenColour = this.id
    userClickedPattern.push(userChosenColour)
    animatePress(userChosenColour)
  } );

function nextSequence() {
    level++
    $("h1").text("Level 0" + level)
    let randomNumber = Math.floor(Math.random()*4)
    randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    animatePress(randomChosenColour)
    playSound(randomChosenColour)
}

function playSound(sound) {
    var audio = new Audio('./sounds/'+ randomChosenColour +'.mp3');
    audio.play();
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass(".pressed")
    setTimeout(function(){
        $("#"+currentColour).removeClass(".pressed");
    }, 3000);
}    

$(document).on('keypress',function(event) {
    if (!started) {
        nextSequence()
        $("h1").text("Level 0" + level)
        started = true
}
});





