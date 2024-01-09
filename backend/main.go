package main

import (
	"backend/config"
	"backend/handlers"
	// "backend/middleware"

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()
	con := cors.DefaultConfig()
	con.AllowOrigins = []string{"http://localhost:5173"} // Replace with your React app's URL
	con.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	r.Use(cors.New(con))

	r.Use(static.Serve("/", static.LocalFile("../frontend/dist", true)))

	DB := config.DatabaseConnection()

	h := handlers.New(DB)

	r.GET("/Pictures", h.GetAll)
	r.GET("/Picture/:id", h.Get)
	r.POST("/AddUser", h.CreateUser)
	r.GET("/Admins", h.GetAllUsers)
	r.DELETE("/DeleteUser/:id", h.Delete)
	r.POST("/Add", h.Add)
	r.PUT("/Edit/:id", h.Update)
	r.DELETE("/Delete/:id", h.Delete)
	r.POST("/Admin", h.VerifyUser)

	// authGroup := r.Group("/Admin")
	// authGroup.Use(middleware.AuthMiddleware(DB))

	// {
	// 	// authGroup.POST("/Add", h.Add)
	// 	// authGroup.PUT("/Edit/:id", h.Update)
	// 	authGroup.DELETE("/Delete/:id", h.Delete)

	// }

	r.Run(":6969")

}
