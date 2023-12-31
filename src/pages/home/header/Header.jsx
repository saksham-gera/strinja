import NavBar from "../../../components/navBar/NavBar";
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="bg-gif"></div>
            <div className="black-overlay"></div>
            <NavBar />
            <div className="header-text">
                <div className="header-content">
                    Strinja
                    <div className="header-subcontent">
                        String art: a harmonious fusion of precision and creativity, where threads dance in vibrant symphony, weaving tales that captivate the soul.                    </div>
                </div>
            </div>

        </div>
    );
}

