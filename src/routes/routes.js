import express from 'express'
import  logger  from '../middleware/logger.js'
const router = express.Router();
import {getreq,postreq} from '../controllers/controllers.js'


router.get('/',logger,getreq);
router.post('/api',postreq)


export default router
