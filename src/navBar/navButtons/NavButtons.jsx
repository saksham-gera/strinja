import NavButton from "./navButton/NavButton";
import "./navButtons.css";

export default function NavButtons() {
    return (
        <div className="nav-buttons">
            <NavButton title="HOME"/>
            <NavButton title="GALLERY"/>
            <NavButton title="ABOUT"/>
            <NavButton title="CONTACT US"/>
        </div>
    );
}