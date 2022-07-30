import { Application } from "express";
import { CommonRoutesConfig } from "../common/common-routes.config";
import { TestApiController } from "./test-api-controller";
import { authService } from "../../security/security-beans";

export class TestApiRoutes extends CommonRoutesConfig {
  constructor(app: Application, private testApiController: TestApiController) {
    super(app, "QuestionRoutes");
  }

  configureRoutes(): Application {
    this.app.route(`/testapi`).get((req, res) => {
      const result = authService.authenticateToken(req, res);
      if (!result.success) {
        return res.status(result.httpCode).end();
      }
      return this.testApiController.getQuestions(req, res);
    });

    return this.app;
  }
}
