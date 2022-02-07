import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const adminUser = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).send(adminUser);
    } catch (error) {
      return response.status(404).send({
        error: error.message,
      });
    }
  }
}

export { TurnUserAdminController };
