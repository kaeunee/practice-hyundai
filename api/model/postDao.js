import { DataTypes } from "sequelize";
import sequelize from "./dataSource";

const posts = sequelize.define(
  "posts",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    view: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

posts.sync();
// posts.create({ title: "title 1", content: "content 1" });
// posts.create({ title: "title 2", content: "2" });
// posts.create({ title: "title 3", content: "3" });
// posts.create({ title: "title 4", content: "4" });
// posts.create({ title: "title 5", content: "5" });
// posts.create({ title: "title 6", content: "6" });
// posts.create({ title: "title 7", content: "7" });
// posts.create({ title: "title 8", content: "8" });
// posts.create({ title: "title 9", content: "9" });
// posts.create({ title: "title 10", content: "10" });

export default {
  get_posts() {
    return posts.findAll(); //SELECT * FROM posts;
  },

  add_post(title, content) {
    return posts.create({ title: title, content: content });
    // return addPost;
  },

  async edit_content(post_id, content) {
    await posts.update({ content: content }, { where: { id: post_id } });
    return posts.findAll({
      where: { id: post_id },
    });
  },

  async delete_post(post_id) {
    await posts.destroy({
      where: { id: post_id },
    });
    return true;
  },
};

//! PROMISE
// async + await
// ,then()
