import "./NavBar.css";
import NavButtons from "./navButtons/NavButtons";

export default function NavBar() {
    return (
        <div className="nav-bar">
            <img src="./assets/logo.png"></img>
            <div className="spacer"></div>
            <NavButtons />
        </div>
    );
}