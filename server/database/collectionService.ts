const Collection = require('./init.ts').Collection;


const getTopCollections = async () => {
    const collection = await Collection.find();
    return collection;
}


const getMyCollections = async (userId) => {
    const myCollection = await Collection.find({userId: userId});
    return myCollection;
}


const createCollection = () => {

}

module.exports = {getTopCollections,getMyCollections}