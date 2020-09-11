import { Request, Response } from 'express';
import crypto from 'crypto';
import connection from '../../database/connection';

export default class OngsController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('hex');

    await connection('ongs').insert({
      id,
      name,
      password,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const ongs = await connection('ongs').select('*');

    return response.status(200).json({ ongs });
  }
}
