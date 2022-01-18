const {Item} = require("./init");

const postItems = async (item) => {
    const newItem = new Item(item);
    const response = await newItem.save();
    return response
}

const getItems = async (collectionId) => {
    const myCollection = await Item.find({collectionId: collectionId});
    return myCollection;
}

const getMyItemIdDb = async (id) => {
    let myItem
    try {
        myItem = await Item.findById(id)
    } catch (e) {
        myItem = null
    }
    return myItem;
}

const getRecentItems = async () => {
    const item = await Item.find().sort({date:-1}).limit(10);
    return item;
}

module.exports = {postItems, getItems, getMyItemIdDb, getRecentItems}