package handlers

import (
	"backend/model"

	"github.com/gin-gonic/gin"
)



func (h handler) CreateUser(c *gin.Context) {
	var user model.Admin

	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	// Hash the password before storing it
	hashedPassword, err := model.HashPassword(user.Password)
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to hash password"})
		return
	}

	user.Password = hashedPassword

	if err := h.DB.Create(&user).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(201, gin.H{"message": "User created successfully", "user": user})
}


func (h handler) GetAllUsers(c *gin.Context) {
	var users []model.Admin
	h.DB.Find(&users)
	c.JSON(200, users)
}

func (h handler) DeleteUser(c *gin.Context) {
	id := c.Param("id")

	var user model.Admin

	if err := h.DB.First(&user, id).Error; err != nil {
		c.JSON(404, gin.H{"error": "User not found"})
		return
	}

	if err := h.DB.Delete(&user).Error; err != nil {
		c.JSON(500, gin.H{"error": "Failed to delete user"})
		return
	}

	c.JSON(200, gin.H{"message": "User deleted successfully"})
}