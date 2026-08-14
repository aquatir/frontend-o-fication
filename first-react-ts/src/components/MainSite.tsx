import InflowList from "./layout/InflowList";
import { MyButton } from "./layout/MyButton";
import { Profile } from "./layout/Profile";

export function MainSite() {
    return (
        <main className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-500">Hello</h1>
            <MyButton/>
            <Profile/>
            <InflowList/>
        </main>
    )
}