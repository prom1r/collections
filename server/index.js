const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const cors = require('cors');
const database = require('./database/init');
const {
    getTopCollections,
    getMyCollections,
    postCollections,
    getMyCollectionsIdDb
} = require('./database/collectionService');
const {
    postItems,
    getItems,
    getMyItemIdDb, getRecentItems
} = require('./database/itemsService');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const axios = require('axios');
const bodyParser = require('body-parser');
const uploadAzure = require('./blob/blob');
const multer = require('multer');
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

app.get('/collections/:id', async (req, res) => {
    const myCollection = await getMyCollectionsIdDb(req.params.id);
    res.json(myCollection);
});


app.get('/collections/top', async (req, res) => {
    const collections = await getTopCollections();
    res.json(collections);
})

app.post('/collections/my', checkJwt, async (req, res) => {
    const newCollections = req.body.values;
    const userId = req.user.sub;
    newCollections.userId = userId;
    const response = await postCollections(newCollections);
    res.json(response)
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

app.post('/collection/items', async (req, res) => {
    const collectionId = req.body.id;
    const response = await getItems(collectionId);
    res.json(response);
});

app.post('/item', async (req, res) => {
    const myCollection = await getMyItemIdDb(req.body.id);
    res.json(myCollection);
});


app.listen(port, () => {
    console.log('start server');
})