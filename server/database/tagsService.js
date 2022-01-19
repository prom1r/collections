const { Item } = require("./init");

const getAllTags = async () => {
    const tags = await Item.distinct('tags');
    return tags;
}

module.exports = { getAllTags }