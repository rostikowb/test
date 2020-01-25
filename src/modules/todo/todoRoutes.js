import { Router } from 'express';

import addJson from './controllers/jsonAdd/addJson';


const router = Router();

router.post('/add', addJson);


export default router;
