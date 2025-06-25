    let humanChoice;
    const choices = ['rock', 'paper', 'scissors'];

    function playGame(humanChoice) {
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      alert(`Computer chose: ${computerChoice} , you chose: ${humanChoice}`);
      

      if (computerChoice === humanChoice) {
        alert('Tie');
      } else if (
        (computerChoice === 'rock' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'rock')
      ) {
        alert(`${humanChoice} beats ${computerChoice}. You won!`);
      } else {
        alert(`${computerChoice} beats ${humanChoice}. You lost.`);
      }
    }  

    document.getElementById('rock').onclick = () => playGame('rock');
    document.getElementById('paper').onclick = () => playGame('paper');
    document.getElementById('scissors').onclick = () => playGame('scissors');