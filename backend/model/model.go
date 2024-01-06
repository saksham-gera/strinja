package model

import "golang.org/x/crypto/bcrypt"

type Picture struct {

	Id   int    `gorm:"type:int;primary_key"`
	Title string `gorm:"type:varchar(255)"`
	Url string  `gorm:"type:varchar(255)"`
	
}

type Admin struct{

	Id int `gorm:"type:int;primary_key"`
	Username string `gorm:"unique;not null"`
	Password string `gorm:"not null"`
}

func HashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(hashedPassword), err
}

func VerifyPassword(hashedPassword, password string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
}