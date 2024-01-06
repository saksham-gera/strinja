import "./ImagePopup.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function ImagePopup({ imageUrl, title, description, displayFunc }) {
    let number="8866677277";
    number = number?.replace(/[^\w\s]/gi, '').replace(/ /g, '');
    const URL = "https://wa.me";
    let url = `${URL}/${number}`;
    let message = `Hi Artist, I'm Interested In Buying This ${title} Article, I Do Have Some Queries Regarding The Article`;
    url += `?text=${encodeURI(message)}`;

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
                    }}><CloseRoundedIcon fontSize="medium" style={{color:"black"}}/></div>
                    <div className="image-popup-details-title">
                        {title}
                    </div>
                    <div className="image-popup-details-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores tempora quibusdam quas cupiditate, odit aperiam debitis voluptatum incidunt nesciunt cumque. Facilis voluptates aliquam eveniet quo saepe! Eaque, totam odit eligendi architecto, quaerat dignissimos dolore sed at atque autem veritatis vel libero error numquam nisi est in facilis! Porro, omnis beatae?
                    </div>
                    <div className="whatsapp-integration">
                        <a href={url}>
                            <WhatsAppIcon fontSize="large"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
