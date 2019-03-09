import { Application } from "express"

export default class UrlPlugin {
  /**
   * Implements the middleware plugin interface.
   */
  register_middlewares(app: Application) {
    app.get("/package/:name", (req, res) => {
      console.log(req.path)
      res.redirect(`/#/detail/${req.params.name}`)
    })
  }
}
