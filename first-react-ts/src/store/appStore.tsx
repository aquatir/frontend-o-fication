import { create } from "zustand";

export const Player = {
  X: "X",
  O: "O",
} as const;

export type Player = (typeof Player)[keyof typeof Player]; // "X" | "O"

type AppState = {
  isActive: boolean;
  toggle: () => void;
  nextPlayer: Player;
  setNextPlayer: () => void;
  boardState: (Player | null)[];
  setSquare: (index: number, player: Player) => void;
  resetBoard: () => void;
};

export const useAppStore = create<AppState>()((set) => ({
  isActive: false,
  toggle: () => set((state) => ({ isActive: !state.isActive })),
  nextPlayer: Player.X,
  setNextPlayer: () =>
    set((state) => ({
      nextPlayer: state.nextPlayer === Player.X ? Player.O : Player.X,
    })),
  boardState: Array<Player | null>(9).fill(null),
  setSquare: (index, value) =>
    set((state) => {
      const newBoard = [...state.boardState];
      newBoard[index] = value;
      return { boardState: newBoard };
    }),
  resetBoard: () =>
    set(() => ({
      boardState: Array<Player | null>(9).fill(null),
      nextPlayer: Player.X,
    })),
}));
