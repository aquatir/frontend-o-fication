import { useAppStore } from "../../store/appStore";

function getButtonClasses(isActive: boolean) {
  return isActive
    ? "transition-colors px-4 py-2 rounded text-white font-semibold bg-green-500 hover:bg-green-600 active:bg-green-700"
    : "transition-colors px-4 py-2 rounded text-white font-semibold bg-blue-500 hover:bg-blue-600 active:bg-blue-700";
}

export function MyButton() {
  const isActive = useAppStore((state) => state.isActive);
  const toggle = useAppStore((state) => state.toggle);

  return (
    <button onClick={() => toggle()} className={getButtonClasses(isActive)}>
      I'm a button in state {isActive ? "green" : "blue"}
    </button>
  );
}
