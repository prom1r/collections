const { Collection } = require("./init");

const getTopCollections = async () => {
  const collection = await Collection.find().sort({ itemCount: -1 }).limit(10);
  return collection;
};

const getMyCollections = async (userId) => {
  const myCollection = await Collection.find({ userId: userId });
  return myCollection;
};

const postCollections = async (item) => {
  const newCollection = new Collection(item);
  await newCollection.save();
  return newCollection;
};

const getMyCollectionsIdDb = async (id) => {
  let myCollection;
  try {
    myCollection = await Collection.findById(id);
  } catch (e) {
    myCollection = null;
  }
  return myCollection;
};

const getIdDbCollection = async (id) => {
  const idUser = await Collection.findById(id);
  return idUser;
};

const updateCollection = async (collection, id) => {
  await Collection.findOneAndUpdate({ _id: id }, collection);
  const newCollection = await Collection.findById(id);
  return newCollection;
};

const deleteCollection = async (id) => {
  const response = await Collection.findByIdAndDelete(id);
  return response;
};

module.exports = {
  getTopCollections,
  getMyCollections,
  postCollections,
  getMyCollectionsIdDb,
  updateCollection,
  getIdDbCollection,
  deleteCollection,
};
