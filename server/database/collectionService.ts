const Collection = require('./init.ts').Collection;


const getTopCollections = async () => {
    const collection = await Collection.find();
    return collection;
}

const createCollection = () => {

}

module.exports = {getTopCollections}