const {Collection} = require('./init');

const getTopCollections = async () => {
    const collection = await Collection.find();
    return collection;
}

const getMyCollections = async (userId) => {
    const myCollection = await Collection.find({userId: userId});
    return myCollection;
}

const postCollections = async (item) => {
    const newCollection = new Collection(item);
    await newCollection.save();
}

const getMyCollectionsIdDb = async (id) => {
    let myCollection
    try {
        myCollection = await Collection.findById(id)
    } catch (e) {
        myCollection = null
    }
    return myCollection;
}


module.exports = {getTopCollections, getMyCollections, postCollections, getMyCollectionsIdDb}