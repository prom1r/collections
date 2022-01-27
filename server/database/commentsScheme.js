const { Comment } = require("./init");

const postNewComment = async (item) => {
  const newComment = new Comment(item);
  await newComment.save();
  return newComment;
};

const getComment = async (id) => {
  const comments = Comment.find({ itemId: id }).sort({ date: -1 });
  return comments;
};

module.exports = { postNewComment, getComment };
