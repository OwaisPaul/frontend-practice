    let humanChoice;
    const choices = ['rock', 'paper', 'scissors'];

    function playGame(humanChoice) {
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      console.log(`Computer chose: ${computerChoice}`);
      console.log(`User chose: ${humanChoice}`);

      if (computerChoice === humanChoice) {
        console.log('Tie');
      } else if (
        (computerChoice === 'rock' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'rock')
      ) {
        console.log(`${humanChoice} beats ${computerChoice}. You won!`);
      } else {
        console.log(`${computerChoice} beats ${humanChoice}. You lost.`);
      }
    }

    document.getElementById('rock').onclick = () => playGame('rock');
    document.getElementById('paper').onclick = () => playGame('paper');
    document.getElementById('scissors').onclick = () => playGame('scissors');