import "./AdminImagePopup.css";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function AdminImagePopup({ imageUrl, title, description, displayFunc }) {
    let number = "8866677277";
    number = number?.replace(/[^\w\s]/gi, '').replace(/ /g, '');
    const URL = "https://wa.me";
    let url = `${URL}/${number}`;
    let message = `Hi Artist, I'm Interested In Buying This ${title} Article, I Do Have Some Queries Regarding The Article`;
    url += `?text=${encodeURI(message)}`;

    return (
        <div className="admin-image-popup" >
            <div className="admin-image-popup-black-overlay" onClick={() => {
                        displayFunc("none");
                    }}></div>
            <div className="admin-image-popup-container">
                <div className="admin-image-popup-image" style={{ backgroundImage: `url("${imageUrl}")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                </div>
                <div className="admin-image-popup-details">
                    <div className="close-button" onClick={() => {
                        displayFunc("none");
                    }}><CloseRoundedIcon fontSize="medium" style={{color:"black"}}/></div>
                    <form>
                    <input value={title} className="form-control admin-image-popup-details-title">
                        
                    </input>
                    <input value={imageUrl} placeholder="Enter New Image URL" className="form-control admin-image-popup-details-description">
                        
                    </input>
                    <textarea value={description} placeholder="Enter New Description" className="form-control admin-image-popup-details-description">

                    </textarea>
                    <div className="popup-buttons">
                        <div className="whatsapp-integration">
                            <a href={url}>
                                <WhatsAppIcon fontSize="large"/>
                            </a>
                            <div className="delete-button" onClick={() => {window.confirm("Are You Sure You Want To Delete This Article?")}}>
                                <DeleteRoundedIcon fontSize="large" style={{color: "red"}}/>
                            </div>
                        </div>
                        <div className="save">
                            <button className="btn btn-primary">Save</button>
                        </div>
                        <div className="spacer"></div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
