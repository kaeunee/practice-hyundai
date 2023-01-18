import postDao from "../model/postDao";

export default {
  get_posts() {
    return postDao.get_posts();
  },

  add_post(title, content) {
    return postDao.add_post(title, content);
  },

  edit_content(post_id, content) {
    return postDao.edit_content(post_id, content);
  },

  delete_post(post_id) {
    return postDao.delete_post(post_id);
  },
};
