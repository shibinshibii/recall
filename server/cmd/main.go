package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v3"
	"github.com/gofiber/fiber/v3/middleware/cors"
	"github.com/gofiber/fiber/v3/middleware/logger"
	"github.com/joho/godotenv"
	"github.com/shibinshibii/recall/server/cmd/internal/platform/database"
)

func init(){
	if err := godotenv.Load("../.env"); err != nil{
		fmt.Println(err)
		log.Fatal("Error loading .env file, are you really a developer?")

	}
	database.ConnectDB()
}

func main() {
	sqlDb,err := database.DBConn.DB()
	if err != nil {
		panic("Something bad happened to the DB, please check it")
	}
	defer sqlDb.Close()

	app := fiber.New()
	app.Use(logger.New())
	app.Get("/", func(c fiber.Ctx) error {
		return c.SendString("Go server for the Recall app")
	})
	app.Use(cors.New(cors.Config{

		AllowOrigins:     []string{"http://localhost:5005"},
		AllowHeaders:     []string{"Origin, Content-Type, Accept, Authorization"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowCredentials: true,
	}))
	log.Fatal(app.Listen(":3000"))

}
