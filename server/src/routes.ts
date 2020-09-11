import { Router } from 'express';

import ongs_routes from './modules/ongs/ongs.routes';
import incidents_routes from './modules/incidents/incidents.routes';
import profile_routes from './modules/profile/profile.routes';
import session_routes from './modules/session/session.routes';

const routes = Router();

routes.use('/ongs', ongs_routes);
routes.use('/incidents', incidents_routes);
routes.use('/profile', profile_routes);
routes.use('/sessionscount', session_routes);

export default routes;
