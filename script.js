/* Guess the Number Game
DONE: Get the value from user and save it to variable numberGuess
DONE: Generate randon number 1 to 100 and save it to variable correctNumber
DONE: Console Whether the guess too high, too low, or is correct inside playGame fucntion
DONE: Create a function called displayResult to move the logic for if the guess to high, to low orcorrect
DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
DONE: Use he showYouWon... function withh in displayResult to display the correct dialog
DONE: Save the guess history in a variable called guess
DONE: Display the guess history using displayHistory() function
TODO: Use the intiGame() function to restart the game
*/


//Variable to store the list of guess
guesses = [];

//Variable to store randomNum:
let correctNum = getRandomNumber();



//window.onload function = it waits HTML file to load and allows us to execute any functions that we want.
//addEventListener on Click help javascript to execute that function or call that function
window.onload = function(){
    document.getElementById('num-submit').addEventListener("click",playGame);
   document.getElementById('restart-game').addEventListener("click",initGame);
   getRandomNumber();
   //domEvents();
  
}

/*function domEvents(){
    for(let i=0; i < document.body.children.length; i++){
       alert(document.body.children[i].innerText);
    }
   alert(document.body.firstChild.wholeText);
   alert(document.body.firstElementChild.innerHTML);
   alert(document.body.lastElementChild.innerHTML);
} */


/**
 *Functionality for playing the whole game
 */
function playGame()
{
    let numGuess = document.getElementById('num-guess').value;
    displayResult(numGuess);
    saveGuessHistory(numGuess);
    displayHistory();
 }



/**
 * Create a function called displayResult to move the logic for if the guess to high, to low orcorrect
 */
function displayResult(numGuess){
    if(numGuess < correctNum)
    {
        showBelow();
    }

    else if(numGuess > correctNum)
    {
        showAbove();
    }

    else if(numGuess == correctNum)
    {
        showYouWon();
    }

}

/**
 * Initialize a new game by restaring all value and content on the page
 * HINT: reset the correctNum, guesses and HTML content
 */
function initGame()
{
    //Reset the random number 
    correctNum = getRandomNumber();
    //Reset the result display
    document.getElementById("result").innerHTML = "";
    //Reset the guesses array
    guesses = [];
    //Reset the guess history display
    displayHistory();
}


/**
 * Return a random number between 1 and 100
 * HINT: use Math.random
 */
function getRandomNumber()
{
    let randomNum = Math.floor(Math.random() * 100) + 1;
    return randomNum;
}



/**
 * Save guess history
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess){
  guesses.push(guess);
  
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 * <li class='list-group-item'>You Guessed {number}</li>
 * </ul>
 * HINT: use while loop and string concatination to create a list 
 */
function displayHistory()
{
    let index=guesses.length - 1;
    let list = "<ul class='list-group'>";
    
    while(index >= 0)
    {
       list += "<li class='list-group-item'>" + "You Guessed " + guesses[index] + "</li>" ;
       index -=1;
    }
    list +="</ul>";
    document.getElementById('history').innerHTML = list;    
}


/**
 * Retrieve the dialog based on if the guess is wrong or correct
 */
function getDialog(dialogType, text)
{
    let dialog;
    switch (dialogType){
    case "warning":
        dialog = "<div class='alert alert-warning' role='alert'>"
        break;

    case "won":
        dialog = "<div class='alert alert-success' role='alert'>"
        break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}


function showYouWon()
{
    const text = "Awesone job, you got it";
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to the variable called dialog
     * HINT: Use the 'won' and text parameters
     */

    let dialog = getDialog('won',text);
    document.getElementById("result").innerHTML = dialog;

}

function showAbove()
{
    const text = "Your guess is too high";

    let dialog = getDialog('warning',text);
    document.getElementById("result").innerHTML = dialog;
}

function showBelow()
{
    const text = "Your guess is too low";

    let dialog = getDialog('warning',text);
    document.getElementById("result").innerHTML = dialog;
}