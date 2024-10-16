import express from 'express'
const router = express.Router();
import {getreq,postreq} from '../controllers/controllers.js'


router.get('/', getreq);
router.post('/api',postreq)


export default router
