import express from "express";
import Router from "express";
import userController from "../controllers/userController";
import * as Auth from "../middleware/auth";
import * as Token from "../middleware/token";
const router = Router();
const initRoute = (app: express.Application) => {
  router.get("/users", Token.authToken, userController.get);
  router.post("/login", Auth.Login);
  router.post("/register", Auth.Register);
  router.get("/user/profile/:id", Token.authToken, userController.profile);
  router.put("/user/update/:id", Token.authToken, userController.update);
  router.delete("/user/delete/:id", Token.authToken, userController.destroy);
  router.delete("/user/destroy", Token.authToken, userController.destroyAll);

  return app.use("/api", router);
};

export default initRoute;
