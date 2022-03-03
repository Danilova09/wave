const mongoose = require('mongoose');
const config = require("./config");
const Artist = require("./models/Artist");
const Album = require("./models/Album");

const run = async () => {
    await mongoose.connect(config.mongo.db, config.mongo.options);

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (const coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    const [Ariana, Malone, LilNasX] = await Artist.create({
        name: 'Ariana Grande',
        info: 'Has 4 Grammies',
        image: 'ariana.jpg'
    }, {
        name: 'Post Malone',
        info: ' known for their live performances and their original music',
        image: 'malone.jpg'
    }, {
        name: 'Lil Nas X',
        info: 'American rapper and singer',
        image: 'lilnas.jpg'
    });

    await Album.create({
            artist: Ariana,
            title: 'Dangerous women',
            releaseDate: '2018',
            image: 'dangerous-woman.jpeg'
        },
        {
            artist: Ariana,
            title: 'Positions',
            releaseDate: '2019',
            image: 'positions.jpeg'
        },
        {
            artist: Ariana,
            title: 'Sweetener',
            releaseDate: '2015',
            image: 'sweetener.png'
        }, {
            artist: Malone,
            title: 'M334',
            releaseDate: '2021',
            image: 'm334.jpeg'
        }, {
            artist: Malone,
            title: 'Stoney',
            releaseDate: '2018',
            image: 'stoney.jpeg'
        }, {
            artist: Malone,
            title: 'Hollywood Bleeding',
            releaseDate: '2016',
            image: 'hollywood-bleeding.jpeg'
        }, {
            artist: LilNasX,
            title: 'Industry Baby',
            releaseDate: '2020',
            image: 'industry-baby.jpeg'
        }, {
            artist: LilNasX,
            title: 'Canvas',
            releaseDate: '2016',
            image: 'canvas-poster.jpeg'
        }, {
            artist: LilNasX,
            title: 'Montero',
            releaseDate: '2018',
            image: 'montero.jpeg'
        });

    await mongoose.connection.close();
};

run().catch(e => console.error(e));