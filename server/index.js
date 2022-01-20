const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const cors = require('cors');
const database = require('./database/init');
const {
    getTopCollections,
    getMyCollections,
    postCollections,
    getMyCollectionsIdDb,
    updateCollection,
    getIdDb
} = require('./database/collectionService');
const {
    postItems,
    getItems,
    getMyItemIdDb, getRecentItems, getIdDbItem, updateItem
} = require('./database/itemsService');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const axios = require('axios');
const bodyParser = require('body-parser');
const uploadAzure = require('./blob/blob');
const multer = require('multer');
const {getAllTags} = require("./database/tagsService");
const {isAdmin} = require("./database/user");
const storage = multer.memoryStorage();
const upload = multer({storage: storage});


app.use(cors());

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://dev-n4okh2r6.us.auth0.com/.well-known/jwks.json`
    }),
    audience: 'itransition project',
    issuer: 'https://dev-n4okh2r6.us.auth0.com/',
    algorithms: ['RS256']
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/collections/my', checkJwt, async (req, res) => {
    const myCollections = await getMyCollections(req.user.sub);
    res.json(myCollections);
});

app.get('/collections/top', async (req, res) => {
    const collections = await getTopCollections();
    res.json(collections);
})


app.get('/collections/:id', async (req, res) => {
    const myCollection = await getMyCollectionsIdDb(req.params.id);
    res.json(myCollection);
});


app.post('/collections/my', checkJwt, async (req, res) => {
    const newCollections = req.body.values;
    const userId = req.user.sub;
    newCollections.userId = userId;
    const response = await postCollections(newCollections);
    res.json(response)
});

app.put('/collection/:id', checkJwt, async (req, res) => {
    const userAuth0Idd = req.user.sub;
    const userId = req.params.id
    const userCollectionId = await getIdDb(userId).then(res => res.userId);
    const newCollections = req.body.values;
    if (userAuth0Idd == userCollectionId || isAdmin(req.user)) {
        const response = await updateCollection(newCollections, userId);
        res.json(response);
    }
});

app.put('/item/:id', checkJwt, async (req, res) => {
    const userId = req.params.id
    const newItem = req.body.values;
    const response = await updateItem(newItem, userId);
    res.json(response);
});

app.get('/items/recent', async (req, res) => {
    const items = await getRecentItems();
    res.json(items);
})

app.post('/upload', upload.single('image'), async (req, res) => {
    const url = await uploadAzure(req.file);
    res.json({url});
});

app.post('/items', async (req, res) => {
    const newItems = req.body.values;
    const response = await postItems(newItems);
    res.json(response);
});

app.get('/collection/items/:id', async (req, res) => {
    const response = await getItems(req.params.id);
    res.json(response);
});

app.get('/item/:id', async (req, res) => {
    const myCollection = await getMyItemIdDb(req.params.id);
    res.json(myCollection);
});

app.get('/items/tags', async (req, res) => {
    const tags = await getAllTags();
    res.json(tags);
});

app.listen(port, () => {
    console.log('start server');
});
