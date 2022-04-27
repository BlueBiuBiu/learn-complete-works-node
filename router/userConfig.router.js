const router = require("koa-router")
const userConfigRouter = new router({prefix: "/userConfig"})
const { getUserConfigByUsername, postUserConfig } = require("../controller/userConfig.controller")

userConfigRouter.get("/:username",getUserConfigByUsername)
userConfigRouter.post("/postConfig",postUserConfig)

module.exports = userConfigRouter