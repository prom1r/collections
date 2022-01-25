const { Item, Collection } = require("./init");

const postItems = async (item) => {
    const newItem = new Item(item);
    const response = await newItem.save();
    return response
}

const getItems = async (collectionId, sort = -1) => {
    const myCollection = await Item.find({ collectionId: collectionId }).sort({ date: sort })
    return myCollection;
}


const getItemsForm = async (collectionId, dateFrom = '', dateTo = '', sort = -1) => {
    const dateFilerFrom = {};
    const dateFilerTo = {};
    let myItemsFrom;

    if (dateFrom && dateTo) {
        dateFilerFrom['$gte'] = new Date(dateFrom);
        dateFilerTo['$lte'] = new Date(dateTo);
        myItemsFrom = await Item
            .find({ $and: [{ collectionId: collectionId }, { date: dateFilerFrom }, { date: dateFilerTo }] })
            .sort({ date: sort })
            .exec();
        return myItemsFrom;
    }

    if (dateFrom && dateTo == '') {
        dateFilerFrom['$gte'] = new Date(dateFrom);
        myItemsFrom = await Item
            .find({ $and: [{ collectionId: collectionId }, { date: dateFilerFrom }] })
            .sort({ date: sort })
            .exec();
        return myItemsFrom;
    }

    if (dateFrom == '' && dateTo) {
        dateFilerTo['$lte'] = new Date(dateTo);
        myItemsFrom = await Item
            .find({ $and: [{ collectionId: collectionId }, { date: dateFilerTo }] })
            .sort({ date: sort })
            .exec();
        return myItemsFrom;
    }
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
    const item = await Item.find().sort({ date: -1 }).limit(10);
    return item;
}

const getIdDbItem = async (id) => {
    const idUser = await Item.findById(id);
    return idUser
}


const updateItem = async (item, id,) => {
    await Item.findOneAndUpdate({ _id: id }, item);
    const newItem = await Item.findById(id)
    return newItem
}

const deleteItem = async (id) => {
    const response = await Item.findByIdAndDelete(id);
    return response
}

const searchItems = async (word) => {
    const response = await Item.find({ $text: { $search: word } });
    return response
}


const itemsLike = async (itemId, userId) => {
    await Item.updateOne({ _id: itemId }, { $push: { like: userId } });
    const newItem = await Item.findById(itemId)
    return newItem
}

const itemsUnlike = async (itemId, userId) => {
    const response = await Item.updateOne({ _id: itemId }, { $pull: { like: userId } });
    const newItem = await Item.findById(itemId)
    return newItem
}

module.exports = {
    postItems,
    getItems,
    getMyItemIdDb,
    getRecentItems,
    updateItem,
    getIdDbItem,
    deleteItem,
    searchItems,
    getItemsForm,
    itemsLike,
    itemsUnlike

}