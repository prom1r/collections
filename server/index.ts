const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');
const database = require('./database/init.ts');
const { getTopCollections } = require('./database/collectionService.ts');

app.use(cors());

app.get('/collections/top', async (req, res) => {
    const collections = await getTopCollections();
    res.json(collections);

})


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

app.listen(port, () => {
    console.log('start server');
})
