// Model stores game state and notifies observers

export class GameModel {
  constructor() {
    this.userScore = 0;
    this.computerScore = 0;
    this.userMove = null;
    this.computerMove = null;
    // this.resultText = "Make your move!";
    this.roundWinner = null;

    this.observers = [];
  }

  // Observer pattern
  subscribe(observer) {
    this.observers.push(observer);
  }

  notify() {
    const state = this.getState();
    this.observers.forEach(observer => observer.update(state));
  }

  getState() {
    return {
      userScore: this.userScore,
      computerScore: this.computerScore,
      userMove: this.userMove,
      computerMove: this.computerMove,
      roundWinner: this.roundWinner
    //   resultText: this.resultText
        
    };
  }

  setUserMove(move) {
    this.userMove = move;
  }

  generateComputerMove() {
    const moves = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    this.computerMove = moves[index];
  }

  determineWinner() {
    if (this.userMove === this.computerMove) {
      this.roundWinner = null;
    } else if (
      (this.userMove === "rock" && this.computerMove === "scissors") ||
      (this.userMove === "paper" && this.computerMove === "rock") ||
      (this.userMove === "scissors" && this.computerMove === "paper")
    ) {
      this.userScore++;
    //   this.resultText = "You win!";
        this.roundWinner = "user";
    } else {
      this.computerScore++;
    //   this.resultText = "Computer wins!";
        this.roundWinner = "computer";
    }

    this.notify();
  }

  resetGame() {
    this.userScore = 0;
    this.computerScore = 0;
    this.userMove = null;
    this.computerMove = null;
    this.roundWinner = null;
    this.notify();
  }
}
