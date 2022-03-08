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

    const [Ariana, Malone, LilNasX, BillieEilish, TheWeeknd, Joji, DuaLipa, SelenaGomez] = await Artist.create({
            name: 'Ariana Grande',
            info: 'Has 4 Grammies',
            image: 'ariana.webp'
        }, {
            name: 'Post Malone',
            info: ' known for their live performances and their original music',
            image: 'malone.jpg'
        }, {
            name: 'Lil Nas X',
            info: 'American rapper and singer',
            image: 'lilnas.jpg'
        }, {
            name: 'Billie Eilish',
            info: 'American singer',
            image: 'billie-eilish.jpg'
        }, {
            name: 'The Weeknd',
            info: 'American singer',
            image: 'the-weeknd.jpg'
        }, {
            name: 'Joji',
            info: 'American singer',
            image: 'joji.jpg'
        }, {
            name: 'Dua Lipa',
            info: 'English singer and songwriter',
            image: 'dua-lipa.jpg'
        }, {
            name: 'Selena Gomez',
            info: 'American singer, actress, and producer.',
            image: 'selena-gomez.jpg'
        }
    );

    await Album.create({
            artist: Ariana,
            title: 'Dangerous women',
            releaseDate: '2016',
            image: 'dangerous-woman.jpeg'
        }, {
            artist: Ariana,
            title: 'Positions',
            releaseDate: '2020',
            image: 'positions.jpeg'
        }, {
            artist: Ariana,
            title: 'Sweetener',
            releaseDate: '2018',
            image: 'sweetener.png'
        }, {
            artist: Malone,
            title: 'Beerbongs & Bentleys',
            releaseDate: '2018',
            image: 'beerbongs-bentleys.jpg'
        }, {
            artist: Malone,
            title: 'Stoney',
            releaseDate: '2016',
            image: 'stoney.jpeg'
        }, {
            artist: Malone,
            title: 'Hollywood Bleeding',
            releaseDate: '2019',
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
        }, {
            artist: BillieEilish,
            title: 'Happier than ever',
            releaseDate: '2021',
            image: 'happier-than-ever.png'
        }, {
            artist: BillieEilish,
            title: 'When we all fall asleep',
            releaseDate: '2019',
            image: 'when-we-all-fall-asleep.jpg'
        }, {
            artist: BillieEilish,
            title: 'Dont`t smile at me',
            releaseDate: '2017',
            image: 'dont-smile-at-me.jpg'
        }, {
            artist: TheWeeknd,
            title: 'Dawn',
            releaseDate: '2022',
            image: 'dawn.webp'
        }, {
            artist: TheWeeknd,
            title: 'After Hours',
            releaseDate: '2020',
            image: 'after-hours.jpg'
        }, {
            artist: TheWeeknd,
            title: 'Starboy',
            releaseDate: '2016',
            image: 'starboy.png'
        }, {
            artist: Joji,
            title: 'Nectar',
            releaseDate: '2020',
            image: 'nectar.jpg'
        }, {
            artist: Joji,
            title: 'Ballads 1',
            releaseDate: '2018',
            image: 'ballads-1.webp'
        }, {
            artist: Joji,
            title: 'In Tongues',
            releaseDate: '2017',
            image: 'in-tongues.jpg'
        }, {
            artist: DuaLipa,
            title: 'Future Nostalgia',
            releaseDate: '2020',
            image: 'future-nostalgia.webp'
        }, {
            artist: DuaLipa,
            title: 'Club future nostalgia',
            releaseDate: '2020',
            image: 'club-future-nostalgia.jpg'
        }, {
            artist: DuaLipa,
            title: 'New Rules',
            releaseDate: '2017',
            image: 'new-rules.jpg'
        } , {
            artist: SelenaGomez,
            title: 'Rare',
            releaseDate: '2020',
            image: 'rare.jpeg'
        }, {
            artist: SelenaGomez,
            title: 'Revival',
            releaseDate: '2015',
            image: 'revival.jpg'
        }, {
            artist: SelenaGomez,
            title: 'Stars Dance',
            releaseDate: '2013',
            image: 'stars-dance.jpg'
        }
    );

    await mongoose.connection.close();
};

run().catch(e => console.error(e));