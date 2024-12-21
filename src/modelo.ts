export type GameState = "PLAYING" | "GAME_OVER" | "PERFECT_SCORE";

export interface Game {
  score: number;
  cardNumber: number;
  state: GameState;
  isFirstCard: boolean;
}

export const partida: Game = {
  score: 0,
  cardNumber: 0,
  state: "PLAYING",
  isFirstCard: false,
};

export const cardButton = document.querySelector(".card-button");
export const stopButton = document.querySelector(".stop-button");
export const resetButton = document.querySelector(".reset-button");
export const container = document.querySelector(".card-container");
export const containerSecondary = document.querySelector(
  ".container-secondary"
);
