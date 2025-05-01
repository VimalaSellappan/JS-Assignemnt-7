// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;
let timer;
function addWordToDOM()
 {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerHTML = randomWord;
}
function updateScore() 
{
  score++;
  scoreEl.innerHTML = score;
}
function updateTime()
{
  if (time > 0) 
  {
    time--; 
    timeEl.innerHTML = `${time}s`; 
  } 
  else
  {
    gameOver(); 
  }
}
function gameOver() 
{

  endgameEl.innerHTML = `<h1>Game Over!</h1>
    <p>Your final score is: ${score}</p>
    <button onclick="location.reload()">Restart Game</button>
`;
    endgameEl.style.display = "flex";
    clearInterval(timer); 
}
addWordToDOM();
timer = setInterval(updateTime, 1000); 
text.addEventListener("input", () => {
  const typedText = text.value;
  if (typedText === randomWord)
 {
    addWordToDOM();         
    updateScore();          
    text.value = "";        
    time += 5;              
    updateTime();           
  }
});


