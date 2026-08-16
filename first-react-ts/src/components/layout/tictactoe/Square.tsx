import { Player } from "../../../store/appStore";

type SquareProps = {
  value: Player | null;
  index: number;
  nextPlayer: Player;
  setNextPlayer: () => void;
  setSquare: (index: number, player: Player) => void;
};

export function Square({ value, index, nextPlayer, setNextPlayer, setSquare }: SquareProps) {
  return (
    <button
      className="border w-12 h-12 flex items-center justify-center"
      onClick={buttonClick}
    >
      {value}
    </button>
  );

  function buttonClick() {
    if (value == null) {
      setSquare(index, nextPlayer);
      setNextPlayer();
    }
  }
}
