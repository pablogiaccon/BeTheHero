import { Request, Response } from 'express';
import connection from '../../database/connection';

export default class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const ong = await connection('ongs')
      .where({ email, password })
      .select('*')
      .first();

    if (!ong) {
      return response.status(400).json({ error: 'Credentials invalid' });
    }

    return response.json(ong);
  }
}
