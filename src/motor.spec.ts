import { describe, it, expect, vi } from "vitest";
import { partida } from "./modelo";
import { calculateRandomNumber, giveMeCard } from "./motor";

vi.stubGlobal("Math.random", () => 0.5);

describe("motor.ts", () => {
  beforeEach(() => {
    partida.cardNumber = 0;
  });

  describe("calculateRandomNumber", () => {
    it("Debería generar un número aleatorio entre 1 y 10", () => {
      // Act
      const result = calculateRandomNumber();

      // Assert
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    });

    it("Debería asignar el número aleatorio a partida.cardNumber", () => {
      // Act
      calculateRandomNumber();

      // Assert
      expect(partida.cardNumber).toBeGreaterThanOrEqual(1);
      expect(partida.cardNumber).toBeLessThanOrEqual(10);
    });
  });

  describe("giveMeCard", () => {
    it("Debería devolver el número aleatorio generado", () => {
      // Act
      const result = giveMeCard();

      // Assert
      expect(result).toBe(partida.cardNumber);
    });

    it("Debería sumar 2 al número si es mayor que 7", () => {
      // Arrange
      partida.cardNumber = 10;

      // Act
      const result = giveMeCard();

      // Assert:
      expect(result).toBe(12);
    });
  });
});
