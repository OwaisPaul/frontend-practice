    let humanChoice;
    const choices = ['rock', 'paper', 'scissors'];

    const score = {
      wins: 0,
      losses: 0,
      ties: 0
    }

    function playGame(humanChoice) {
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      alert(`Computer chose: ${computerChoice} , you chose: ${humanChoice}`);
      

      if (computerChoice === humanChoice) {
        alert(`Tie
           wins  ${score.wins += 1} losses ${score.losses} ties ${score.ties}`);
      } else if (
        (computerChoice === 'rock' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'rock')
      ) {
         alert(`${humanChoice} beats ${computerChoice}. You won!
        wins  ${score.wins += 1} losses ${score.losses} ties ${score.ties}`);
      } else {
        alert(`${computerChoice} beats ${humanChoice}. You lost.
         wins ${score.wins} losses ${score.losses += 1} ties ${score.ties}`);
       
      }
    }  

    document.getElementById('rock').onclick = () => playGame('rock');
    document.getElementById('paper').onclick = () => playGame('paper');
    document.getElementById('scissors').onclick = () => playGame('scissors');