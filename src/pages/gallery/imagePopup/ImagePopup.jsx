import "./ImagePopup.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function ImagePopup({ imageUrl, title, description, displayFunc }) {

    return (
        <div className="image-popup" >
            <div className="image-popup-black-overlay" onClick={() => {
                        displayFunc("none");
                    }}></div>
            <div className="image-popup-container">
                <div className="image-popup-image" style={{ backgroundImage: `url("${imageUrl}")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                </div>
                <div className="image-popup-details">
                    <div className="close-button" onClick={() => {
                        displayFunc("none");
                    }}><CloseRoundedIcon fontSize="medium" /></div>
                    <div className="image-popup-details-title">
                        {title}
                    </div>
                    <div className="image-popup-details-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores tempora quibusdam quas cupiditate, odit aperiam debitis voluptatum incidunt nesciunt cumque. Facilis voluptates aliquam eveniet quo saepe! Eaque, totam odit eligendi architecto, quaerat dignissimos dolore sed at atque autem veritatis vel libero error numquam nisi est in facilis! Porro, omnis beatae?
                    </div>
                    <WhatsAppIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}
