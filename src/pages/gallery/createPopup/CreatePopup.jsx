import "./CreatePopup.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React, { useState } from "react";

export default function CreatePopup({ displayFunc }) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [description, setDescription] = useState();
export default function CreatePopup({displayFunc }) {

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:6969/Add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
          // Include any necessary headers for authentication if required
        },
        body: JSON.stringify({
          Id: parseInt(id),
          Title: title,
          Url: imageUrl,
          Description: description,
        })
      });
    } catch (error) {
      console.error("Error creating artwork:", error);
    }
  };

  return (
    <div className="create-image-popup">
      <div
        className="create-image-popup-black-overlay"
        onClick={() => {
          displayFunc("none");
        }}
      ></div>
      <div className="create-image-popup-container">
        <div className="create-image-popup-details">
          <h3>Here You Can Create A New Creativity To Gallery</h3>
          <div
            className="close-button"
            onClick={() => {
              displayFunc("none");
            }}
          >
            <CloseRoundedIcon fontSize="medium" style={{ color: "black" }} />
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <input
              value={id} 
              onChange={(e) => setId(e.target.value)}
              className="form-control create-image-popup-details-description"
            ></input>
            <input
              value={title} placeholder="Write A Catchy title!"
              onChange={(e) => setTitle(e.target.value)}
              className="form-control-create-image-popup-details-title"
            ></input>
            <input
              value={imageUrl} placeholder="Enter New Image URL"
              onChange={(e) => setImageUrl(e.target.value)}
              className="form-control create-image-popup-details-description"
            ></input>
            <textarea
              value={description} placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
              className="form-control create-image-popup-details-description"
            ></textarea>
            <div className="popup-button">
              <div className="save">
                <button className="btn btn-primary" onClick={() => {
                  handleSave();
                  displayFunc("none");
            }}>
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
