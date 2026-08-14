import { useAppStore } from "../../store/appStore";

const user = {
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

function getDisplayName(isActive: boolean) {
    return isActive? "Lady" : "Boy";
}

export function Profile() {

const isActive = useAppStore((state) => state.isActive);
    
  return (
    <>
      <h1 className="text-4xl font-bold">{getDisplayName(isActive)}</h1>
      <img
        className="rounded-full"
        src={user.imageUrl}
        alt={'Photo of ' + getDisplayName(isActive)}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}