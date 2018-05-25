package controllers

import (
	"github.com/astaxie/beego"
	"math/rand"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["rnd"] = rand.Intn(999999999)
	c.TplName = "index.tpl"
}

func (c *MainController) Routing() {
	c.Data["rnd"] = rand.Intn(999999999)
	c.TplName = "index.tpl"
}

func (c *MainController) Test() {
	c.Ctx.Output.Body([]byte("22222"))
}