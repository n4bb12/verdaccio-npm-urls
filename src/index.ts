import { Application } from "express"

export default class UrlPlugin {
  private readonly version = +this.config.user_agent[10]

  constructor(private readonly config: any) {}

  /**
   * Implements the middleware plugin interface.
   */
  register_middlewares(app: Application) {
    app.use("/package", (req, res) => {
      const redirectTo =
        this.version === 3 ? "/#/detail" + req.url : "/-/web/detail" + req.url

      console.log(req.url, "=>", redirectTo)

      res.redirect(redirectTo)
    })
  }
}
