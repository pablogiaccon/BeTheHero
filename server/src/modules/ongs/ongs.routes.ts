import { Router } from 'express';

import OngsController from './OngsController';

const ongsController = new OngsController();
const ong_routes = Router();

ong_routes.post('/', ongsController.store);

export default ong_routes;
