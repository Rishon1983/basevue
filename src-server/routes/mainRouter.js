import express from 'express';
import mainController from "../controllers/mainController.js";

const router = express.Router();

router.post('/api/v1/login', mainController.login);
router.post('/api/v1/getLogs', mainController.getLogs);

export default router;