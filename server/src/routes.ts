import { Router } from 'express';

import ong_routes from './modules/ongs/ongs.routes';

const routes = Router();

routes.use('/ongs', ong_routes);

export default routes;
