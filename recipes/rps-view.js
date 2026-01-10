// View handles DOM updates and user interaction

export class GameView {
  update(state) {
    document.getElementById("user-score").textContent = state.userScore;
    document.getElementById("computer-score").textContent = state.computerScore;

    document.getElementById("user-move").textContent =
      this.getEmoji(state.userMove) || "❔";

    document.getElementById("computer-move").textContent =
      this.getEmoji(state.computerMove) || "❔";

    // document.getElementById("result-text").textContent = state.resultText;
    if (state.roundWinner === "user") {
        document.getElementById("user-move-display").style.backgroundColor = "#3fbe5dff"; // light green
        document.getElementById("computer-move-display").style.backgroundColor = "#d85560ff"; // light red
    } else if (state.roundWinner === "computer") {
        document.getElementById("user-move-display").style.backgroundColor = "#d85560ff";
        document.getElementById("computer-move-display").style.backgroundColor = "#3fbe5dff";
    } else {
        document.getElementById("user-move-display").style.backgroundColor = "#f0f0f0";
        document.getElementById("computer-move-display").style.backgroundColor = "#f0f0f0";
    }
    console.log("View updated with state:", state);
  }

  getEmoji(move) {
    const emojis = {
      rock: "✊",
      paper: "✋",
      scissors: "✌️"
    };
    return emojis[move];
  }

  // Event binding (View owns listeners)
  setRockButtonListener(handler) {
    document.getElementById("rock").addEventListener("click", handler);
  }

  setPaperButtonListener(handler) {
    document.getElementById("paper").addEventListener("click", handler);
  }

  setScissorsButtonListener(handler) {
    document.getElementById("scissors").addEventListener("click", handler);
  }

  setResetButtonListener(handler) {
    document.getElementById("reset-button").addEventListener("click", handler);
  }

  renderInitial() {
    document.getElementById("user-move-display").style.backgroundColor = "#f0f0f0";
    document.getElementById("computer-move-display").style.backgroundColor = "#f0f0f0";
  }
}
