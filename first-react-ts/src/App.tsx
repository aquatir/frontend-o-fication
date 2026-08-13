import { MyButton } from './components/MyButton'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};


export function Profile() {
  return (
    <>
      <h1 className="text-4xl font-bold">{user.name}</h1>
      <img
        className="rounded-full"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold text-blue-500">Hello</h1>
      <MyButton/>
      <Profile/>
    </div>
  )
}

export default App
