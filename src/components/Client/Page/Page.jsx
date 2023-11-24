import {Switcher} from "../Switcher/Switcher";

export default function Page({ children }) {

    return (
        <div className="page">
            <Switcher/>
            {children}
        </div>
    )
}