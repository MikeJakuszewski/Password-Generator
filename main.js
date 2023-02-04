const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

document.querySelector('button').addEventListener('click', generatePassword)
let passwordBoxOne = document.getElementById('password-box-one')
let passwordBoxTwo = document.getElementById('password-box-two')
let passwordOne = ''
let passwordTwo = ''


//we use a for loop to call the passwordCharacter functions to create a two random passwords. We then use those passwords to be printed in the DOM. At the beginning of generatePassword, we clear the contents to zero.

function generatePassword(){
    passwordOne = ''
    passwordTwo = ''
    for(let i = 0;i<10;i++){
        passwordOneCharacters()
        passwordTwoCharacters()
    }
    // console.log(password)
    passwordBoxOne.textContent = passwordOne
    passwordBoxTwo.textContent = passwordTwo
}


//this generates the random number and then a random character

function passwordOneCharacters(){ 
    let randomNum = Math.floor(Math.random()* characters.length)
    passwordOne += characters[randomNum]

}

function passwordTwoCharacters(){ 
    let randomNum = Math.floor(Math.random()* characters.length)
    passwordTwo += characters[randomNum]

}

//To do
// Add parameters to the function that will allow us to generate a password with a certain number of characters

