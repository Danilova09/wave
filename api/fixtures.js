const mongoose = require('mongoose');
const config = require("./config");
const Artist = require("./models/Artist");
const Album = require("./models/Album");
const User = require("./models/User");
const Track = require("./models/Track");

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

    const [DangerousWomen, Positions, Sweetener,
        BeerbongsAndBentleys, Stoney, HollywoodBleeding,
        IndustryBaby, Canvas, Montero,
        HappierThenEver, WhenWeAllFallAsleep, DontSmileAtMe,
        Dawn, AfterHours, Starboy,
        Nectar, Ballads1, InTongues,
        FutureNostalgia, ClubFutureNostalgia, NewRules,
        Rare, Revival, StarsDance] = await Album.create({
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
        }, {
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


    await Track.create({
            title: 'Moonlight',
            album: DangerousWomen,
            duration: '3:22',
        }, {
            title: 'Dangerous Women',
            album: DangerousWomen,
            duration: '3:55',
        }, {
            title: 'Be Alright',
            album: DangerousWomen,
            duration: '2:59',
        }, {
            title: 'Into You',
            album: DangerousWomen,
            duration: '4:04',
        }, {
            title: 'Side to Side',
            album: DangerousWomen,
            duration: '3:46',
        },

        {
            title: 'Shut UP',
            album: Positions,
            duration: '2:37',
        }, {
            title: '34+35',
            album: Positions,
            duration: '2:53',
        }, {
            title: 'Motive',
            album: Positions,
            duration: '2:47',
        }, {
            title: 'Just like Magic',
            album: Positions,
            duration: '2:29',
        }, {
            title: 'Of the Table',
            album: Positions,
            duration: '3:59',
        },

        {
            title: 'Raindrops(An Angel Cried)',
            album: Sweetener,
            duration: '0:37',
        }, {
            title: 'Blazed',
            album: Sweetener,
            duration: '3:16',
        }, {
            title: 'The light is Coming',
            album: Sweetener,
            duration: '3:48',
        }, {
            title: 'R.E.M',
            album: Sweetener,
            duration: '4:05',
        }, {
            title: 'God Is a Woman',
            album: Sweetener,
            duration: '3:17',
        },

        {
            title: 'Paranoid',
            album: BeerbongsAndBentleys,
            duration: '3:42',
        }, {
            title: 'Rich & Sad',
            album: BeerbongsAndBentleys,
            duration: '3:26',
        }, {
            title: 'Takin Shots',
            album: BeerbongsAndBentleys,
            duration: '3:37',
        }, {
            title: 'Over Now',
            album: BeerbongsAndBentleys,
            duration: '4:07',
        }, {
            title: 'Better now',
            album: BeerbongsAndBentleys,
            duration: '3:51',
        },

        {
            title: 'Broken Whiskey Glass',
            album: Stoney,
            duration: '3:54',
        }, {
            title: 'Deja Vu',
            album: Stoney,
            duration: '3:54',
        }, {
            title: 'Cold',
            album: Stoney,
            duration: '4:29',
        }, {
            title: 'I Fall Apart',
            album: Stoney,
            duration: '3:43',
        }, {
            title: 'Go Flex',
            album: Stoney,
            duration: '3:00',
        },

        {
            title: "Hollywood's Bleeding",
            album: HollywoodBleeding,
            duration: '2:36',
        }, {
            title: 'Enemies',
            album: HollywoodBleeding,
            duration: '3:17',
        }, {
            title: 'A Thousand Bad Times',
            album: HollywoodBleeding,
            duration: '3:41',
        }, {
            title: 'Die for Me',
            album: HollywoodBleeding,
            duration: '4:05',
        }, {
            title: 'Take What You Want',
            album: HollywoodBleeding,
            duration: '3:50',
        }
    )

    await User.create({
        avatar: null,
        displayName: 'user',
        email: 'user@shop.com',
        password: 'user',
        token: 'user',
        role: 'user',
    }, {
        avatar: null,
        displayName: 'admin',
        email: 'admin@shop.com',
        password: 'admin',
        token: 'admin',
        role: 'admin'
    })

    await mongoose.connection.close();
};

run().catch(e => console.error(e));