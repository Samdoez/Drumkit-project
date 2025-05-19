// this code listen out for button presses
let Drumbutton = document.querySelectorAll(".drum");
for(let i = 0; i < Drumbutton.length; i++){
    Drumbutton[i].addEventListener("click", function(){ // i changed from handleclick a normal function to an anonymus function
        let buttonclicked = this.innerHTML;
        playSound(buttonclicked, this);
    });
    // noteabove it seems the anonymous function is more sophisticated, than just using an ordinary function for a particular reason
}

/* code that listen for keyboard presses
    this keyboard stuff stress me ehnn bro, so what i was doing before was that i wasnt checking if element exists before implementing the .style line of code, because if the 
    the element does not exist the code will throw an error, and the keyboard press womt work*/
   document.addEventListener("keydown", function(event){//note: the event is just a parameter that was passed to have acess to the keyboard key that was pressed 
       playSound(event.key, null); //note: the .key attached to the event object(bcoz we have changed from parameter to object, bcoz of the dot notation) is property of the object
  });// that can be accessed to know or print the keyboard key that was pressed

/* i can use this code below to attend to the first button in the list of buttons Drumbutton[0].addEventListener("click", handleClick);*/
//this is the function that evaluate the button or key pressed to know the corresponding sound to play
function playSound(key, element){ // note: this entry is the variable that is recieved from 1. buttonclicked from above
        if (element) {
        element.style.color = "yellow"; // only change color if element exists
    }
    
    switch(key){
        case "w":
        let tom11 = new Audio("sounds/tom-1.mp3");
        tom11.play();
        break;

        case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "k":
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

        case "l":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

        default: console.log(key);
    }
}
