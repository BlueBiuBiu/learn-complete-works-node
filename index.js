const Koa = require("koa")
const Cors = require("koa-cors")
const bodyParser = require('koa-bodyparser')
const userRouters = require("./router")

const app = new Koa()
app.use(Cors())
app.use(bodyParser())
app.userRouters = userRouters
app.userRouters()

app.listen(10000,() => {
  console.log("服务器已运行");
})

