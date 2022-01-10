const Collection = require('./init.ts').Collection;

const getTopCollections = async () => {
    const collection = await Collection.find();
    return collection;
}

const getMyCollections = async (userId) => {
    const myCollection = await Collection.find({ userId: userId });
    return myCollection;
}

const postCollections = async (item) =>{
    const newCollection = new Collection(item);
    await newCollection.save();
    const lastItem = await Collection.find().lean();
    return lastItem
}

module.exports = { getTopCollections, getMyCollections,postCollections }