import { partida } from "./modelo";

export function calculateRandomNumber(): number {
  partida.cardNumber = Math.floor(Math.random() * 10) + 1;
  return partida.cardNumber;
}

export function giveMeCard(): number {
  calculateRandomNumber();
  if (partida.cardNumber > 7) {
    partida.cardNumber += 2;
  }
  return partida.cardNumber;
}
