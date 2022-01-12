const { Item, Collection } = require("./init.ts");

const postItems = async (item) => {
    const newItem = new Item(item);
    const response = await newItem.save();
    return response
}

const getItems = async (collectionId) => {
    const myCollection = await Item.find({ collectionId: collectionId });
    return myCollection;
}


module.exports ={postItems,getItems}