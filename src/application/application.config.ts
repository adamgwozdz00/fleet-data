import express, { Application } from "express";

export class ApplicationConfig {
  private app: Application;

  constructor() {
    this.app = express();
  }

  useJsonFormat() {
    this.app.use(express.json());
    return this;
  }

  allowOriginForAll() {
    this.app.use((request, response, next) => {
      response.header("Access-Control-Allow-Origin", "*");
      response.header("Access-Control-Allow-Headers", "*");
      next();
    });
    return this;
  }

  create(): Application {
    return this.app;
  }
}
