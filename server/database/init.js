const mongoose = require('mongoose');

main().then(() => console.log('Connected Mongo')).catch(err => console.error(err));

async function main() {
    await mongoose.connect('mongodb+srv://app:9OVxlJi9l2@prom1r.6y8cb.mongodb.net/itransition?retryWrites=true&w=majority');
}

const collectionsSchema = new mongoose.Schema({
    id: mongoose.ObjectId,
    title: String,
    srcImg: String,
    itemsCount: Number,
    userId: String,
    category: String,
    description: String,
    customFields: Object,
})

const itemsSchema = new mongoose.Schema({
    id: mongoose.ObjectId,
    collectionId: String,
    collectionTitle: String,
    title: String,
    srcImg: String,
    itemsCount: Number,
    userId: String,
    category: String,
    customField: Object,
    date: Object,
    userNickname:String
})

const Collection = mongoose.model('collections', collectionsSchema);

const Item = mongoose.model('items', itemsSchema);

module.exports = { Collection, Item }