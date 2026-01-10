// Controller connects View and Model

import { GameModel } from "./rps-model.js";
import { GameView } from "./rps-view.js";

export class GameController {
  constructor() {
    this.model = new GameModel();
    this.view = new GameView();

    // Register view as observer
    this.model.subscribe(this.view);

    this.init();
  }

  init() {
    this.view.setRockButtonListener(() => this.playRound("rock"));
    this.view.setPaperButtonListener(() => this.playRound("paper"));
    this.view.setScissorsButtonListener(() => this.playRound("scissors"));
    this.view.setResetButtonListener(() => this.resetGame());

    this.view.renderInitial();
  }


  playRound(move) {
    this.model.setUserMove(move);
    this.model.generateComputerMove();
    this.model.determineWinner();
  }

  resetGame() {
    this.model.resetGame();
  }
}

// Start the game
new GameController();
