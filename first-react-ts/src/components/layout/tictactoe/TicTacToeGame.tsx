import { useAppStore } from "../../../store/appStore";
import { Square } from "./Square";

export function TicTacToeGame() {
  const boardState = useAppStore((state) => state.boardState);
  const setSquare = useAppStore((state) => state.setSquare);
  const nextPlayer = useAppStore((state) => state.nextPlayer);
  const setNextPlayer = useAppStore((state) => state.setNextPlayer);
  const resetBoard = useAppStore((state) => state.resetBoard);

  return (
    <>
      <div>
        <div className="game">
          <div className="flex flex-row">
            <Square
              value={boardState[0]}
              index={0}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              setSquare={setSquare}
            />
            <Square
              value={boardState[1]}
              index={1}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              setSquare={setSquare}
            />
            <Square
              value={boardState[2]}
              index={2}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              setSquare={setSquare}
            />
          </div>
          <div className="flex flex-row">
            <Square
              value={boardState[3]}
              index={3}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              setSquare={setSquare}
            />
            <Square
              value={boardState[4]}
              index={4}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              setSquare={setSquare}
            />
            <Square
              value={boardState[5]}
              index={5}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              setSquare={setSquare}
            />
          </div>
          <div className="flex flex-row">
            <Square
              value={boardState[6]}
              index={6}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              setSquare={setSquare}
            />
            <Square
              value={boardState[7]}
              index={7}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              setSquare={setSquare}
            />
            <Square
              value={boardState[8]}
              index={8}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              setSquare={setSquare}
            />
          </div>
        </div>
        <div className="extraButtons">
          <button
            className="transition-colors px-4 py-2 rounded text-white font-semibold bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
            onClick={resetBoard}
          >
            Reset Board
          </button>
        </div>
      </div>
    </>
  );
}
