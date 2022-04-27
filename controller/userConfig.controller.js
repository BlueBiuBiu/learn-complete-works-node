const { getUserConfigByUsername, postUserConfig } = require("../service/userConfig.service")

class UserConfigController {
  async getUserConfigByUsername(ctx,next)  {
    const { username } = ctx.params
    const result = await getUserConfigByUsername(username)
    ctx.body = result
  }

  async postUserConfig(ctx,next)  {
    const data  = ctx.request.body
    console.log('12',data);
    const result = await postUserConfig(data)
    const flag = result.affectedRows ? true : false
    ctx.body = {
      success: flag,
      status: 200,
      message: result
    }
  }
}

module.exports = new UserConfigController()