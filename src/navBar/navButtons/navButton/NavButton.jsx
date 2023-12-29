import "./NavButton.css";

export default function NavButton({title = "button"}) {
    return (
        <div className="nav-button">
            {title}
        </div>
    );
}