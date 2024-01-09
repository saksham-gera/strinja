import "./AdminImagePopup.css";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React, { useState, useEffect } from "react";

export default function AdminImagePopup({
  Id,
  imageUrl,
  title,
  description,
  displayFunc,
  refetch
}) 

{

  const [newTitle, setNewTitle] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    setNewTitle(title);
    setNewDescription(description);
    setNewImageUrl(imageUrl);
  }, [title, description, imageUrl]);

  const handleDelete = async () => {
    window.confirm("Are You Sure You Want To Delete This Article?");

    try {
      const response = await fetch(`http://localhost:6969/Delete/${Id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Success:", response);
        displayFunc("none");
        window.location.reload();
      } else {
        console.log("Error:", response);
      }
    } catch (error) {
      console.error("Error deleting artwork:", error);
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:6969/Edit/${Id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Include any necessary headers for authentication if required
        },
        body: JSON.stringify({
          Id: Id,
          Title: newTitle,
          Url: newImageUrl,
          Description: newDescription,
        }),
      });
      if (response.ok) {
        // Handle success
        const data = await response.json();
        console.log("Success:", data);
        displayFunc("none");
        refetch();
      } else {
        // Handle API error
        console.log("Error:", response);
      }
    } catch (error) {
      console.error("Error updating artwork:", error);
    }
  };

  let number = "8866677277";
  number = number?.replace(/[^\w\s]/gi, "").replace(/ /g, "");
  const URL = "https://wa.me";
  let url = `${URL}/${number}`;
  let message = `Hi Artist, I'm Interested In Buying This ${title} Article, I Do Have Some Queries Regarding The Article`;
  url += `?text=${encodeURI(message)}`;

  return (
    <div className="admin-image-popup">
      <div
        className="admin-image-popup-black-overlay"
        onClick={() => {
          displayFunc("none");
        }}
      ></div>
      <div className="admin-image-popup-container">
        <div
          className="admin-image-popup-image"
          style={{
            backgroundImage: `url("${imageUrl}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="admin-image-popup-details">
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
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="form-control admin-image-popup-details-title"
            ></input>
            <input
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              placeholder="Enter New Image URL"
              className="form-control admin-image-popup-details-description"
            ></input>
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="form-control admin-image-popup-details-description"
            ></textarea>
            <div className="popup-buttons">
              <div className="whatsapp-integration">
                <a href={url}>
                  <WhatsAppIcon fontSize="large" />
                </a>
                <div className="delete-button" onClick={handleDelete}>
                  <DeleteRoundedIcon
                    fontSize="large"
                    style={{ color: "red" }}
                  />
                </div>
              </div>
              <div className="save">
                <button className="btn btn-primary" onClick={handleSave}>
                  Save
                </button>
              </div>
              <div className="spacer"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
