const {Item, Collection} = require("./init");

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
    const item = await Item.find().sort({date: -1}).limit(10);
    return item;
}

const getIdDbItem = async (id) => {
    const idUser = await Item.findById(id);
    return idUser
}


const updateItem = async (item, id,) => {
    await Item.findOneAndUpdate({_id: id}, item);
    const newItem = await Item.findById(id)
    return newItem
}

const deleteItem = async (id) => {
    const response = await Item.findByIdAndDelete(id);
    return response
}

const searchItems = async (word) => {
    const response = await Item.find({$text: {$search: word}});
    return response
}

module.exports = {
    postItems,
    getItems,
    getMyItemIdDb,
    getRecentItems,
    updateItem,
    getIdDbItem,
    deleteItem,
    searchItems
}