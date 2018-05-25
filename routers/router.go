package routers

import (
	"testGo/controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/*", &controllers.MainController{}, "get:Routing")

	ns_api := 
	beego.NewNamespace("/api",
		beego.NSRouter("/test", &controllers.MainController{}, "get:Test"),
		beego.NSNamespace("/a", 
			beego.NSRouter("/test", &controllers.MainController{}, "get:Test"),
		),
	)
	beego.AddNamespace(ns_api)
}
