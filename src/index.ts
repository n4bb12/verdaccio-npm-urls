import { Application } from "express"

export default class UrlPlugin {
  /**
   * Implements the middleware plugin interface.
   */
  register_middlewares(app: Application) {
    app.use("/package", (req, res) => {
      const redirectTo = "/#/detail" + req.url
      console.log(req.url, "=>", redirectTo)
      res.redirect(redirectTo)
    })
  }
}
