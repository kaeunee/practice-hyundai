const express = require("express");
const router = express.Router();

import postController from "../controller/postController";

router.post("/add", postController.add_post); //게시글 추가
router.get("/all", postController.get_posts); //게시글 전체 조회
router.put("/update", postController.edit_content); //게시글 내용 수정
router.delete("/:post_id", postController.delete_post); //게시글 삭제..

module.exports = {
  router,
};
