import { healthController } from "../controllers/health.controller";
import { Router } from "express";


const healthRouter = Router()

healthRouter.get("/health", healthController)


export { healthRouter }