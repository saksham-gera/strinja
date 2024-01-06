package middleware

import (
	"backend/model"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func AuthMiddleware(db *gorm.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		username, password, ok := c.Request.BasicAuth()
		if !ok {
			c.AbortWithStatus(401) // Unauthorized
			return
		}

		var user model.Admin
		if err := db.Where("username = ?", username).First(&user).Error; err != nil {
			c.AbortWithStatus(401) // Unauthorized
			return
		}

		if err := model.VerifyPassword(user.Password, password); err != nil {
			c.JSON(401, gin.H{"error": err.Error()})// Unauthorized
			return
		}

		// Attach user information to the context for further use
		c.Set("user", user)
		c.Next()
	}
}