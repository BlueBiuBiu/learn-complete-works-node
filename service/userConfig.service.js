const connection = require("../app/database")

class UserConfigService {
  async getUserConfigByUsername(username) {
    const statement = `
      SELECT imageUrl, title, JSON_OBJECT("subTitle",uc.subTitle,"officialWebsite",uc.officialWebsite) groupItem FROM user u
      LEFT JOIN userconfig uc
      ON u.username = uc.username
      WHERE u.username = ?
    `
    const [result] = await connection.execute(statement,[username])
    return result
  }

  async postUserConfig({username,imageUrl,title,subTitle,officialWebsite}) {
    const statement = `
      INSERT INTO userconfig (username,imageUrl,title,subTitle,officialWebsite) VALUES(?,?,?,?,?) 
    `
    const [result] = await connection.execute(statement,[username,imageUrl,title,subTitle,officialWebsite])
    return result
  }
}

module.exports = new UserConfigService()