for (i = 0 ; i < document.querySelectorAll("button").length ; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
    makeSound(this.textContent)
    ButtonAnimation(this.textContent)
    }
)}

document.addEventListener("keydown",function(event) {
    makeSound(event.key)
    ButtonAnimation(event.key)
}
)


    
function makeSound(sound) {
    switch (sound) {
        case "w":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            break;
    }
}
    

function ButtonAnimation(pressedbutton) {
    document.querySelector("." + pressedbutton).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("." + pressedbutton).classList.remove("pressed")
    }, 100)
}