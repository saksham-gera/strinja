import { Style } from "@mui/icons-material";
import NavButton from "./navButton/NavButton";
import "./navButtons.css";
import { Link } from 'react-router-dom';

export default function NavButtons() {
    return (
        <div className="nav-buttons">
            <Link to={"/"} style={{textDecoration:"none"}}><NavButton title="HOME"/></Link>
            <Link to={"/gallery"} style={{textDecoration:"none"}}><NavButton title="GALLERY"/></Link>
            <Link to={"/about"} style={{textDecoration:"none"}}><NavButton title="ABOUT"/></Link>
            <Link to={"/contactus"} style={{textDecoration:"none"}}><NavButton title="CONTACT US"/></Link>
        </div>
    );
}