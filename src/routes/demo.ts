import express from "express";

import { democall } from "../controllers/demo";

const router = express.Router();

router.route("/").get(democall);

export default router;
