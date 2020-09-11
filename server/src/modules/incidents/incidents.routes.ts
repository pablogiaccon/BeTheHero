import { Router } from 'express';

import IncidentsController from './IncidentsController';

const incidentsController = new IncidentsController();
const incidents_routes = Router();

incidents_routes.post('/', incidentsController.store);
incidents_routes.get('/', incidentsController.index);
incidents_routes.delete('/:id', incidentsController.destroy);

export default incidents_routes;
