package main

import (
	"fmt"
	"time"
	"github.com/gorilla/mux"
)

func main()  {
	fmt.Println("Hello Go..")
	fmt.Println(time.Now())

	//var num int
	router := mux.NewRouter()

	router.HandleFunc("/", index)

	http.ListenAndServe(":4000", router)
}

func index(res http.ResponseWriter, req *http.Request)  {
	fmt.Println("Hllo Go...")
	fmt.Println(yime.Now())
}