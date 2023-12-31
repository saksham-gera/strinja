import NavBar from "../../../components/navBar/navBar";
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, ratione?
                    </div>
                </div>
            </div>
            
        </div>
    );
}

