package handlers

import (
	"backend/model"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type handler struct {
    DB *gorm.DB
}

func New(db *gorm.DB) handler {
    return handler{DB: db} // Set DB field with the provided DB instance
}

func (h handler) GetAll(c *gin.Context) {
	var pictures []model.Picture
	h.DB.Find(&pictures)
	c.JSON(200, pictures)
}

func (h handler) Get(c *gin.Context){
	var picture model.Picture
	id := c.Param("id")
	if err := h.DB.First(&picture, id).Error; err != nil {
		c.JSON(404, gin.H{"error": "User not found"})
		return
	}
	c.JSON(200, picture)
}


func (h handler) Add(c *gin.Context) {
	var picture model.Picture
	if err := c.ShouldBindJSON(&picture); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	// Create a new user record in the database
	if err := h.DB.Create(&picture).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(201, gin.H{"message": "User created successfully", "Art": picture})

}

func (h handler) Update(c *gin.Context) {

	id:= c.Param(":id")

	var picture model.Picture

    if err := h.DB.First(&picture, id).Error; err != nil {
        c.JSON(404, gin.H{"error": "Picture not found"})
        return
    }

	if err:= h.DB.Save(&picture).Error; err!= nil{
		c.JSON(500,gin.H{"error":"Failed to update user"})
		return
	}
	c.JSON(201, gin.H{"message": "User updated successfully", "art": picture})
}


func (h handler) Delete(c *gin.Context) {
    // Get the ID from the request parameters
    id := c.Param("id")

    var picture model.Picture

    // Check if the picture with the specified ID exists
    if err := h.DB.First(&picture, id).Error; err != nil {
        c.JSON(404, gin.H{"error": "Picture not found"})
        return
    }

    // Delete the picture
    if err := h.DB.Delete(&picture).Error; err != nil {
        c.JSON(500, gin.H{"error": "Failed to delete picture"})
        return
    }

    c.JSON(200, gin.H{"message": "Picture deleted successfully"})
}