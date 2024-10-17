import express from 'express'
import  logger  from '../middleware/logger.js'
import {tokenVerifier} from '../middleware/jwt-handler.js'
const router = express.Router();
import {getreq,postreq} from '../controllers/controllers.js'
import { getnum } from '../controllers/numController.js';

router.get('/token',logger,getreq);
router.get('/',getnum)
router.post('/api',postreq)
export default router
