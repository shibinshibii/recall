package database

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DBConn *gorm.DB

func ConnectDB(){
	db_user := os.Getenv("DB_USER")
	db_password := os.Getenv("DB_PASSWORD")
	db_name := os.Getenv("DB_NAME")
	dsn := fmt.Sprintf(
    "host=localhost user=%s password=%s dbname=%s port=5432 sslmode=disable TimeZone=Asia/Kolkata",
    db_user, db_password, db_name,

	)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Error),
	})

	if err != nil{

		panic("Failed to connect to DB")
	}

	log.Println("Connection successfull.")
	DBConn = db
}
