import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface ICustomRequest extends Request {
  headers: IncomingHttpHeaders & {
    user_id?: string;
  };
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: ICustomRequest, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).send(users);
    } catch (error) {
      return response.status(400).send({
        error: error.message,
      });
    }
  }
}

export { ListAllUsersController };
