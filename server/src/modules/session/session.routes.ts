import { Router } from 'express';

import SessionController from './SessionController';

const session_routes = Router();
const sessionController = new SessionController();

session_routes.post('/', sessionController.create);

export default session_routes;
