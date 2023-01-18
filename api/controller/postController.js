import postService from "../service/postService";

let postDB = [
  {
    id: 1,
    title: "title1",
    content: "content1",
  },
];

export default {
  async add_post(req, res) {
    try {
      const { title, content } = req.body;
      if (!title || !content) throw new Error("keyError");
      const result = await postService.add_post(title, content);
      res.status(201).json({ result });
    } catch (err) {
      if (err.message == "keyError") {
        const error = new Error("keyError");
        error.statusCode = 400;
        res
          .status(error.statusCode)
          .json({ error: true, message: error.message });
      }
      const error = new Error("Failed to add post");
      error.statusCode = 400;
      res
        .status(error.statusCode)
        .json({ error: true, message: error.message });
    }
  },

  async get_posts(req, res) {
    try {
      const result = await postService.get_posts();
      res.status(200).json(result);
    } catch {
      const error = new Error("Failed.");
      error.statusCode = 400;
      res
        .status(error.statusCode)
        .json({ error: true, message: error.message });
    }
  },

  async edit_content(req, res) {
    try {
      const { post_id, content } = req.body;
      console.log(post_id, content);
      if (!post_id || !content) throw new Error("keyError");
      const result = await postService.edit_content(post_id, content);
      res.status(200).json({ result });
    } catch (err) {
      if (err.message == "keyError") {
        const error = new Error("keyError");
        error.statusCode = 400;
        res
          .status(error.statusCode)
          .json({ error: true, message: error.message });
      }
      const error = new Error("Failed to update content");
      error.statusCode = 400;
      res
        .status(error.statusCode)
        .json({ error: true, message: error.message });
    }
  },

  async delete_post(req, res) {
    try {
      const post_id = req.params.post_id;
      await postService.delete_post(post_id);
      res.status(200).json({ message: "Deleted." });
    } catch {
      const error = new Error("Failed to delete post");
      error.statusCode = 400;
      res
        .status(error.statusCode)
        .json({ error: true, message: error.message });
    }
  },
};
