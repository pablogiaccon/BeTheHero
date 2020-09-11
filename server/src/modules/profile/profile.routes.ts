import { Router } from 'express';

import ProfileController from './ProfileController';

const profile_routes = Router();
const profileController = new ProfileController();

profile_routes.get('/', profileController.index);

export default profile_routes;
