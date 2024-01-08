import "./CreatePopup.css";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function CreatePopup({displayFunc }) {
    return (
        <div className="create-image-popup" >
            <div className="create-image-popup-black-overlay" onClick={() => {
                        displayFunc("none");
                    }}></div>
            <div className="create-image-popup-container">
                <div className="blur-bg"></div>
                <div className="create-image-popup-details">
                    <h3>Here You Can Create A New Creativity To Gallery</h3>
                    <div className="close-button" onClick={() => {
                        displayFunc("none");
                    }}><CloseRoundedIcon fontSize="medium" style={{color:"white"}}/></div>
                    <form>
                    <input placeholder="Write A Catchy title!" className="form-control create-image-popup-details-title">
                        
                    </input>
                    <input placeholder="Enter New Image URL" className="form-control create-image-popup-details-description">
                        
                    </input>
                    <textarea placeholder="Write Description" className="form-control create-image-popup-details-description">

                    </textarea>
                    <div className="popup-button">
                        <div className="save">
                            <button className="btn btn-primary">Save</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
