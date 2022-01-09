const gameContainer = document.getElementById("game");
let cardsPicked = []
let counter = 0;
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    newDiv.classList.add("blank")
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

   

     // call a function handleCardClick when a div is clicked on
     newDiv.addEventListener("click", handleCardClick);
     
      // append the div to the element with an id of game
      gameContainer.append(newDiv);

   
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked" , event.target);
  
  colorToggle(event.target)
  cardsPicked.push(event.target)

  

  if (cardsPicked.length === 2){
    setTimeout(checkMatch,500)
  }
  
}

function checkMatch(){
if (checkColor()){
  
  alert('Match found')
  cardsPicked[0].remove();
  cardsPicked[1].remove();
  counter = counter +1
  if (counter===5){
    alert('Congrats, you won!')
    createDivsForColors(shuffledColors);
  }
}
else {
  alert('Try again')
}
cardsPicked[0].classList.remove('one');
cardsPicked[0].classList.remove('two');
cardsPicked[0].classList.remove('three');
cardsPicked[0].classList.remove('four');
cardsPicked[0].classList.remove('five');
cardsPicked[1].classList.remove('one');
cardsPicked[1].classList.remove('two');
cardsPicked[1].classList.remove('three');
cardsPicked[1].classList.remove('four');
cardsPicked[1].classList.remove('five');
cardsPicked= []

}


function colorToggle(event){
  if (event.classList.contains("red")){
    event.classList.toggle("one")
  }
  if (event.classList.contains("blue")){
    event.classList.toggle("two")
  }
  if (event.classList.contains("green")){
    event.classList.toggle("three")
  }
  if (event.classList.contains("orange")){
    event.classList.toggle("four")
  }
  if (event.classList.contains("purple")){
    event.classList.toggle("five")
  }
}

function checkColor(){
  if (cardsPicked[0].classList.contains("red")&&cardsPicked[1].classList.contains("red")){
    return true
  }
  if (cardsPicked[0].classList.contains("blue")&&cardsPicked[1].classList.contains("blue")){
    return true
  }
  if (cardsPicked[0].classList.contains("green")&&cardsPicked[1].classList.contains("green")){
    return true
  }
  if (cardsPicked[0].classList.contains("orange")&&cardsPicked[1].classList.contains("orange")){
    return true 
  }
  if (cardsPicked[0].classList.contains("purple")&&cardsPicked[1].classList.contains("purple")){
    return true
  }
  else{
    return false
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
