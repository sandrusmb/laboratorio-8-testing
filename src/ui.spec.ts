import { describe, it, expect, beforeEach, vi } from "vitest";
import { partida } from "./modelo";
import { handleGameOver, showMessage, calculateScore } from "./ui";

vi.stubGlobal("alert", vi.fn());

beforeEach(() => {
  partida.score = 0;
  partida.state = "PLAYING";
  vi.clearAllMocks();
});

describe("handleGameOver", () => {
  it("Debe establecer el estado en GAME_OVER cuando la puntuación sea superior a 7,5", () => {
    // Arrange
    partida.score = 8;

    // Act
    handleGameOver();

    // Assert
    expect(partida.state).toBe("GAME_OVER");
    expect(alert).toHaveBeenCalledWith("Game over");
  });

  it("Debe establecer el estado en PERFECT_SCORE cuando la puntuación sea exactamente 7,5", () => {
    // Arrange
    partida.score = 7.5;

    // Act
    handleGameOver();

    // Assert
    expect(partida.state).toBe("PERFECT_SCORE");
    expect(alert).toHaveBeenCalledWith("¡Lo has clavado! ¡Enhorabuena!");
  });
});

describe("showMessage", () => {
  it("Debería mostrar 'Game over' cuando partida.state sea GAME_OVER", () => {
    // Arrange
    partida.state = "GAME_OVER";

    // Act
    showMessage();

    // Assert
    expect(alert).toHaveBeenCalledWith("Game over");
  });

  it("Debería mostrar 'Has sido muy conservador' cuando la puntuación sea inferior a 4", () => {
    // Arrange
    partida.score = 3;

    // Act
    showMessage();

    // Assert
    expect(alert).toHaveBeenCalledWith("Has sido muy conservador");
  });

  it("Debería mostrar 'Te ha entrado el canguelo eh?' cuando la puntuación es exactamente 5", () => {
    // Arrange
    partida.score = 5;

    // Act
    showMessage();

    // Assert
    expect(alert).toHaveBeenCalledWith("Te ha entrado el canguelo eh?");
  });

  it("Debería mostrar 'Casi casi...' cuando la puntuación es 6", () => {
    // Arrange
    partida.score = 6;

    // Act
    showMessage();

    // Assert
    expect(alert).toHaveBeenCalledWith("Casi casi...");
  });

  it("Debería mostrar 'Casi casi...' cuando la puntuación es 7", () => {
    // Arrange
    partida.score = 7;

    // Act
    showMessage();

    // Assert
    expect(alert).toHaveBeenCalledWith("Casi casi...");
  });

  it("Debería mostrar '¡Lo has clavado! ¡Enhorabuena!' cuando partida.state es PERFECT_SCORE", () => {
    // Arrange
    partida.state = "PERFECT_SCORE";
    partida.score = 7.5;

    // Act
    showMessage();

    // Assert
    expect(alert).toHaveBeenCalledWith("¡Lo has clavado! ¡Enhorabuena!");
  });
});

describe("calculateScore", () => {
  it("Debería sumar el valor de una carta entre 1 y 7", () => {
    // Arrange
    const card = 5;

    // Act
    calculateScore(card);

    // Assert
    expect(partida.score).toBe(5);
  });

  it("Debería sumar 0.5 para cartas mayores o iguales a 10", () => {
    // Arrange
    const card = 10;

    // Act
    calculateScore(card);

    // Assert
    expect(partida.score).toBe(0.5);
  });
});
