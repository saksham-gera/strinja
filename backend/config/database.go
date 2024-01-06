package config

import (
	"fmt"
	"backend/model"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "om"
	password = "1234"
	dbName   = "om"
)

func DatabaseConnection() *gorm.DB {
	sqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbName)
	db, err := gorm.Open(postgres.Open(sqlInfo), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	db.AutoMigrate(&model.Picture{})
	db.AutoMigrate(&model.Admin{})

	return db
}
