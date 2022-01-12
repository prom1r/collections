const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');
const database = require('./database/init.ts');
const {
    getTopCollections,
    getMyCollections,
    postCollections,
    getMyCollectionsIdDb
} = require('./database/collectionService.ts');
const {
    postItems,
    getItems
} = require('./database/itemsService.ts');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const axios = require('axios');
const bodyParser = require('body-parser');
const uploadAzure = require('./blob/blob.ts');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

app.post('/collections/id', async (req, res) => {
    const myCollection = await getMyCollectionsIdDb(req.body.id);
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
    // res.json(response[response.length - 1]);
    res.json(response)
});


app.get('/items/top', (req, res) => {
    const temp = [
        {
            id: '01',
            title: 'BOBO',
            srcImg: 'https://klike.net/uploads/posts/2018-06/1530091495_2.jpg',
            like: '10',
            description: 'COOL'
        },
        {
            id: '02',
            title: 'BOBO',
            srcImg: 'https://static10.tgstat.ru/channels/_0/01/01d7337a30440ab303a8638edcdc3478.jpg',
            like: '10',
            description: 'OLOLO0'
        },
        {
            id: '03',
            title: 'BIBI',
            srcImg: 'https://i.pinimg.com/originals/7a/26/20/7a262042b9dc3cd5425550727ebf3c76.jpg',
            like: '20',
            description: 'LALALA'
        }];
    res.json(temp);

})

app.post('/upload', upload.single('image'), async (req, res) => {
    const url = await uploadAzure(req.file);
    res.json({ url });
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

app.listen(port, () => {
    console.log('start server');
})
