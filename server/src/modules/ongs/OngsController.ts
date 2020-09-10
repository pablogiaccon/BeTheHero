import { Request, Response } from 'express';

export default class OngsController {
  public async store(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    console.log(data);

    return response.json({ data });
  }
}
