import { Application } from "express";
import { ApplicationConfig } from "./application.config";
import { CommonRoutesConfig } from "./common/common-routes.config";
import { TestApiController } from "./testapi/test-api-controller";
import { TestApiRoutes } from "./testapi/test-api-routes";
import dotenv from "dotenv";

dotenv.config();

const app: Application = new ApplicationConfig()
  .useJsonFormat()
  .allowOriginForAll()
  .create();

const port = 5005;
const routes: Array<CommonRoutesConfig> = [];

export const main = (async () => {
  console.log(port);
  routes.push(new TestApiRoutes(app, new TestApiController()));
  app.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
      route.configureRoutes();
    });
    console.log("APPLICATION STARTED!");
  });
})();
