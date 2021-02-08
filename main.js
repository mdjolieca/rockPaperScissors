const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  }
  else {
    console.log('Invalide user input option.');
  }
};

const getComputerChoice = () => {
 let option  = Math.floor(Math.random() * 3);
 if(option == 0){
   return 'rock';
 }
 if(option == 1){
   return 'paper';
 }
 if(option == 2){
   return 'scissors';
 }
};

 
const determineWinner = (userChoice, computerChoice) =>{
   if(userChoice === computerChoice) {
     return 'game is a tie';
   }
   if(userChoice === 'bomb'){
     return 'user wins';
   }
   if(userChoice === 'rock') { 
     if( computerChoice === 'scissors'){
        return 'user wins';
      }
      else {
        return 'computer wins';
      }
   }
   if(userChoice === 'scissors') { 
     if( computerChoice === 'paper'){
     return 'user wins';
      }else {
        return 'computer wins';
      }
   }
   if(userChoice === 'paper') { 
     if( computerChoice === 'rock'){
     return 'user wins';
      }else {
        return 'computer wins';
      }
   }

};

const playGame = (choice) => {
  let userChoice = getUserChoice(choice);
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame('rock');
playGame('scissors');
playGame('rock');
playGame('paper');
