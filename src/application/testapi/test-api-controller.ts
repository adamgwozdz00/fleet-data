import { Request, Response } from 'express';
export class TestApiController {
  constructor() {}

  async getQuestions(request: Request, response: Response) {
    response
      .status(200)
      .send({"hello":"world"});
  }
}
