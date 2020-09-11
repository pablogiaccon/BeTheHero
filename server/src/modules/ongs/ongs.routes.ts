import { Router } from 'express';

import OngsController from './OngsController';

const ongsController = new OngsController();
const ong_routes = Router();

ong_routes.post('/', ongsController.store);
ong_routes.get('/', ongsController.index);

export default ong_routes;
