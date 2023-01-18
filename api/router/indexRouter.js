const express = require("express");
const router = express.Router();

import userRouter from "./userRouter";
import postRouter from "./postRouter";
import map from "../kakaomap/map";

router.use("/users", userRouter.router);
router.use("/posts", postRouter.router);
router.get("/find", map.find);

module.exports = router;
