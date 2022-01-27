const { Item } = require("./init");

const getAllTags = async () => {
  const tags = await Item.distinct("tags");
  return tags;
};

const getTagCloud = async () => {
  const tagCloud = await Item.find({}, "tags");
  return tagCloud;
};
const searchItemsByTag = async (tag) => {
  const tagCloud = await Item.find({ tags: tag });
  return tagCloud;
};

module.exports = { getAllTags, getTagCloud, searchItemsByTag };
