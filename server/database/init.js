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
    userNickname: String,
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
    date: Date,
    userNickname: String,
    tags: Object,
    like: Array
})

const commentsShema = new mongoose.Schema({
    id: mongoose.ObjectId,
    user: Object,
    itemId: String,
    date: Date,
    commentsItem: String,
    avatar: String
})

const Collection = mongoose.model('collections', collectionsSchema);

const Item = mongoose.model('items', itemsSchema);

const Comment = mongoose.model('comments', commentsShema);

itemsSchema.index({ title: 'text' });
collectionsSchema.index({ description: 'text' });

module.exports = { Collection, Item, Comment }