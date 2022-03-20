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
            image: 'ariana.webp',
            isPublished: true,
        }, {
            name: 'Post Malone',
            info: ' known for their live performances and their original music',
            image: 'malone.jpg',
            isPublished: true,
        }, {
            name: 'Lil Nas X',
            info: 'American rapper and singer',
            image: 'lilnas.jpg',
            isPublished: true,
        }, {
            name: 'Billie Eilish',
            info: 'American singer',
            image: 'billie-eilish.jpg',
            isPublished: true,
        }, {
            name: 'The Weeknd',
            info: 'American singer',
            image: 'the-weeknd.jpg',
            isPublished: true,
        }, {
            name: 'Joji',
            info: 'American singer',
            image: 'joji.jpg',
            isPublished: true,
        }, {
            name: 'Dua Lipa',
            info: 'English singer and songwriter',
            image: 'dua-lipa.jpg',
            isPublished: true,
        }, {
            name: 'Selena Gomez',
            info: 'American singer, actress, and producer.',
            image: 'selena-gomez.jpg',
            isPublished: true,
        }
    );

    const [DangerousWomen, Positions, Sweetener,
        BeerbongsAndBentleys, Stoney, HollywoodBleeding,
        IndustryBaby, Canvas, Montero,
        HappierThenEver, WhenWeAllFallAsleep, DontSmileAtMe,
        Dawn, AfterHours, Starboy,
        Nectar, Ballads1, InTongues,
        FutureNostalgia, ClubFutureNostalgia, DuaLipaCompleteEdition,
        Rare, Revival, StarsDance] = await Album.create({
            artist: Ariana,
            title: 'Dangerous women',
            releaseDate: '2016',
            image: 'dangerous-woman.jpeg',
            isPublished: true,
        }, {
            artist: Ariana,
            title: 'Positions',
            releaseDate: '2020',
            image: 'positions.jpeg',
            isPublished: true,
        }, {
            artist: Ariana,
            title: 'Sweetener',
            releaseDate: '2018',
            image: 'sweetener.png',
            isPublished: true,
        }, {
            artist: Malone,
            title: 'Beerbongs & Bentleys',
            releaseDate: '2018',
            image: 'beerbongs-bentleys.jpg',
            isPublished: true,
        }, {
            artist: Malone,
            title: 'Stoney',
            releaseDate: '2016',
            image: 'stoney.jpeg',
            isPublished: true,
        }, {
            artist: Malone,
            title: 'Hollywood Bleeding',
            releaseDate: '2019',
            image: 'hollywood-bleeding.jpeg',
            isPublished: true,
        }, {
            artist: LilNasX,
            title: 'Industry Baby',
            releaseDate: '2020',
            image: 'industry-baby.jpeg',
            isPublished: true,
        }, {
            artist: LilNasX,
            title: 'Canvas',
            releaseDate: '2016',
            image: 'canvas-poster.jpeg',
            isPublished: true,
        }, {
            artist: LilNasX,
            title: 'Montero',
            releaseDate: '2018',
            image: 'montero.jpeg',
            isPublished: true,
        }, {
            artist: BillieEilish,
            title: 'Happier than ever',
            releaseDate: '2021',
            image: 'happier-than-ever.png',
            isPublished: true,
        }, {
            artist: BillieEilish,
            title: 'When we all fall asleep',
            releaseDate: '2019',
            image: 'when-we-all-fall-asleep.jpg',
            isPublished: true,
        }, {
            artist: BillieEilish,
            title: 'Dont`t smile at me',
            releaseDate: '2017',
            image: 'dont-smile-at-me.jpg',
            isPublished: true,
        }, {
            artist: TheWeeknd,
            title: 'Dawn',
            releaseDate: '2022',
            image: 'dawn.webp',
            isPublished: true,
        }, {
            artist: TheWeeknd,
            title: 'After Hours',
            releaseDate: '2020',
            image: 'after-hours.jpg',
            isPublished: true,
        }, {
            artist: TheWeeknd,
            title: 'Starboy',
            releaseDate: '2016',
            image: 'starboy.png',
            isPublished: true,
        }, {
            artist: Joji,
            title: 'Nectar',
            releaseDate: '2020',
            image: 'nectar.jpg',
            isPublished: true,
        }, {
            artist: Joji,
            title: 'Ballads 1',
            releaseDate: '2018',
            image: 'ballads-1.webp',
            isPublished: true,
        }, {
            artist: Joji,
            title: 'In Tongues',
            releaseDate: '2017',
            image: 'in-tongues.jpg',
            isPublished: true,
        }, {
            artist: DuaLipa,
            title: 'Future Nostalgia',
            releaseDate: '2020',
            image: 'future-nostalgia.webp',
            isPublished: true,
        }, {
            artist: DuaLipa,
            title: 'Club future nostalgia',
            releaseDate: '2020',
            image: 'club-future-nostalgia.jpg',
            isPublished: true,
        }, {
            artist: DuaLipa,
            title: 'Dua Lipa: Complete Edition',
            releaseDate: '2017',
            image: 'new-rules.jpg',
            isPublished: true,
        }, {
            artist: SelenaGomez,
            title: 'Rare',
            releaseDate: '2020',
            image: 'rare.jpeg',
            isPublished: true,
        }, {
            artist: SelenaGomez,
            title: 'Revival',
            releaseDate: '2015',
            image: 'revival.jpg',
            isPublished: true,
        }, {
            artist: SelenaGomez,
            title: 'Stars Dance',
            releaseDate: '2013',
            image: 'stars-dance.jpg',
            isPublished: true,
        }
    );


    await Track.create({
            title: 'Moonlight',
            album: DangerousWomen,
            duration: '3:22',
            isPublished: true,
        }, {
            title: 'Dangerous Women',
            album: DangerousWomen,
            duration: '3:55',
            isPublished: true,
        }, {
            title: 'Be Alright',
            album: DangerousWomen,
            duration: '2:59',
        }, {
            title: 'Into You',
            album: DangerousWomen,
            duration: '4:04',
            isPublished: true,
        }, {
            title: 'Side to Side',
            album: DangerousWomen,
            duration: '3:46',
            isPublished: true,
        }, {
            title: 'Shut UP',
            album: Positions,
            duration: '2:37',
            isPublished: true,
        }, {
            title: '34+35',
            album: Positions,
            duration: '2:53',
            isPublished: true,
        }, {
            title: 'Motive',
            album: Positions,
            duration: '2:47',
            isPublished: true,
        }, {
            title: 'Just like Magic',
            album: Positions,
            duration: '2:29',
            isPublished: true,
        }, {
            title: 'Of the Table',
            album: Positions,
            duration: '3:59',
            isPublished: true,
        }, {
            title: 'Raindrops(An Angel Cried)',
            album: Sweetener,
            duration: '0:37',
            isPublished: true,
        }, {
            title: 'Blazed',
            album: Sweetener,
            duration: '3:16',
            isPublished: true,
        }, {
            title: 'The light is Coming',
            album: Sweetener,
            duration: '3:48',
            isPublished: true,
        }, {
            title: 'R.E.M',
            album: Sweetener,
            duration: '4:05',
            isPublished: true,
        }, {
            title: 'God Is a Woman',
            album: Sweetener,
            duration: '3:17',
            isPublished: true,
        }, {
            title: 'Paranoid',
            album: BeerbongsAndBentleys,
            duration: '3:42',
            isPublished: true,
        }, {
            title: 'Rich & Sad',
            album: BeerbongsAndBentleys,
            duration: '3:26',
            isPublished: true,
        }, {
            title: 'Takin Shots',
            album: BeerbongsAndBentleys,
            duration: '3:37',
            isPublished: true,
        }, {
            title: 'Over Now',
            album: BeerbongsAndBentleys,
            duration: '4:07',
            isPublished: true,
        }, {
            title: 'Better now',
            album: BeerbongsAndBentleys,
            duration: '3:51',
            isPublished: true,
        }, {
            title: 'Broken Whiskey Glass',
            album: Stoney,
            duration: '3:54',
            isPublished: true,
        }, {
            title: 'Deja Vu',
            isPublished: true,
            album: Stoney,
            duration: '3:54',
            isPublished: true,
        }, {
            title: 'Cold',
            album: Stoney,
            duration: '4:29',
            isPublished: true,
        }, {
            title: 'I Fall Apart',
            album: Stoney,
            duration: '3:43',
            isPublished: true,
        }, {
            title: 'Go Flex',
            album: Stoney,
            duration: '3:00',
            isPublished: true,
        }, {
            title: "Hollywood's Bleeding",
            album: HollywoodBleeding,
            duration: '2:36',
            isPublished: true,
        }, {
            title: 'Enemies',
            album: HollywoodBleeding,
            duration: '3:17',
            isPublished: true,
        }, {
            title: 'A Thousand Bad Times',
            album: HollywoodBleeding,
            duration: '3:41',
            isPublished: true,
        }, {
            title: 'Die for Me',
            album: HollywoodBleeding,
            duration: '4:05',
            isPublished: true,
        }, {
            title: 'Take What You Want',
            album: HollywoodBleeding,
            duration: '3:50',
            isPublished: true,
        }, {
            title: 'Montero',
            album: Montero,
            duration: '2:18',
            isPublished: true,
        }, {
            title: 'Industry Baby',
            album: Montero,
            duration: '3:17',
            isPublished: true,
        }, {
            title: 'The art of realization',
            album: Montero,
            duration: '0:25',
            isPublished: true,
        }, {
            title: 'Dolla Sing Slime',
            album: Montero,
            duration: '2:26',
            isPublished: true,
        }, {
            title: 'Sun Goes Down',
            album: Montero,
            duration: '2:49',
            isPublished: true,
        }, {
            title: 'Montero',
            album: IndustryBaby,
            duration: '2:18',
            isPublished: true,
        }, {
            title: 'Industry Baby',
            album: IndustryBaby,
            duration: '3:17',
            isPublished: true,
        }, {
            title: 'The art of realization',
            album: IndustryBaby,
            duration: '0:25',
            isPublished: true,
        }, {
            title: 'Dolla Sing Slime',
            album: IndustryBaby,
            duration: '2:26',
            isPublished: true,
        }, {
            title: 'Sun Goes Down',
            album: IndustryBaby,
            duration: '2:49',
            isPublished: true,
        }, {
            title: 'Montero',
            album: Canvas,
            duration: '2:18',
            isPublished: true,
        }, {
            title: 'Industry Baby',
            album: Canvas,
            duration: '3:17',
            isPublished: true,
        }, {
            title: 'The art of realization',
            album: Canvas,
            duration: '0:25',
            isPublished: true,
        }, {
            title: 'Dolla Sing Slime',
            album: Canvas,
            duration: '2:26',
            isPublished: true,
        }, {
            title: 'Sun Goes Down',
            album: Canvas,
            duration: '2:49',
            isPublished: true,
        }, {
            title: 'Getting Older',
            album: HappierThenEver,
            duration: '4:04',
            isPublished: true,
        }, {
            title: 'Billie Bossa Nova',
            album: HappierThenEver,
            duration: '3:17',
            isPublished: true,
        }, {
            title: 'Oxytocin',
            album: HappierThenEver,
            duration: '3:30',
            isPublished: true,
        }, {
            title: 'Lost Cause',
            album: HappierThenEver,
            duration: '3:32',
            isPublished: true,
        }, {
            title: 'Not My Responsibility',
            album: HappierThenEver,
            duration: '3:48',
            isPublished: true,
        }, {
            title: 'Bad Guy',
            album: WhenWeAllFallAsleep,
            duration: '3:14',
            isPublished: true,
        }, {
            title: 'You should see me in a crowd',
            album: WhenWeAllFallAsleep,
            duration: '3:01',
            isPublished: true,
        }, {
            title: 'wish you were gay',
            album: WhenWeAllFallAsleep,
            duration: '3:42',
            isPublished: true,
        }, {
            title: '8',
            album: WhenWeAllFallAsleep,
            duration: '2:53',
            isPublished: true,
        }, {
            title: 'bury a friend',
            album: WhenWeAllFallAsleep,
            duration: '2:50',
            isPublished: true,
        }, {
            title: 'COPYCAT',
            album: DontSmileAtMe,
            duration: '3:15',
            isPublished: true,
        }, {
            title: 'my boy',
            album: DontSmileAtMe,
            duration: '2:51',
            isPublished: true,
        }, {
            title: 'party favor',
            album: DontSmileAtMe,
            duration: '3:25',
            isPublished: true,
        }, {
            title: 'ocean eyes',
            album: DontSmileAtMe,
            duration: '3:20',
            isPublished: true,
        }, {
            title: '&burn',
            album: DontSmileAtMe,
            duration: '2:59',
            isPublished: true,
        }, {
            title: 'How Do I Make You Love Me',
            album: Dawn,
            duration: '3:35',
            isPublished: true,
        }, {
            title: 'Sacrifice',
            album: Dawn,
            duration: '3:09',
            isPublished: true,
        }, {
            title: 'Out of Time',
            album: Dawn,
            duration: '3:25',
            isPublished: true,
        }, {
            title: 'Best Friends',
            album: Dawn,
            duration: '2:44',
            isPublished: true,
        }, {
            title: 'Starry Eyes',
            album: Dawn,
            duration: '2:28',
            isPublished: true,
        }, {
            title: 'Alone Again',
            album: AfterHours,
            duration: '4:10',
            isPublished: true,
        }, {
            title: 'Hardest to Love',
            album: AfterHours,
            duration: '3:31',
            isPublished: true,
        }, {
            title: 'Snowchild',
            album: AfterHours,
            duration: '4:07',
            isPublished: true,
        }, {
            title: 'Save Your Tears',
            album: AfterHours,
            duration: '3:36',
            isPublished: true,
        }, {
            title: 'Blinding Lights',
            album: AfterHours,
            duration: '3:20',
            isPublished: true,
        }, {
            title: 'Starboy',
            album: Starboy,
            duration: '3:50',
            isPublished: true,
        }, {
            title: 'False Alarm',
            album: Starboy,
            duration: '3:40',
            isPublished: true,
        }, {
            title: 'Rockin',
            album: Starboy,
            duration: '3:52',
            isPublished: true,
        }, {
            title: 'True Colors',
            album: Starboy,
            duration: '3:26',
            isPublished: true,
        }, {
            title: 'Sidewalks',
            album: Starboy,
            duration: '3:51',
            isPublished: true,
        }, {
            title: 'Ew',
            album: Nectar,
            duration: '3:28',
            isPublished: true,
        }, {
            title: 'Tick Tock',
            album: Nectar,
            duration: '2:13',
            isPublished: true,
        }, {
            title: 'Upgrade',
            album: Nectar,
            duration: '1:30',
            isPublished: true,
        }, {
            title: 'Run',
            album: Nectar,
            duration: '3:15',
            isPublished: true,
        }, {
            title: 'Pretty Boy',
            album: Nectar,
            duration: '2:37',
            isPublished: true,
        }, {
            title: 'ATTENTION',
            album: Ballads1,
            duration: '2:09',
            isPublished: true,
        }, {
            title: 'TEST DRIVE',
            album: Ballads1,
            duration: '3:00',
            isPublished: true,
        }, {
            title: 'CANT GET OVER YOU',
            album: Ballads1,
            duration: '1:47',
            isPublished: true,
        }, {
            title: 'WHY AM I STILL IN LA',
            album: Ballads1,
            duration: '3:20',
            isPublished: true,
        }, {
            title: 'COME THRU',
            album: Ballads1,
            duration: '2:33',
            isPublished: true,
        }, {
            title: 'Will He',
            album: InTongues,
            duration: '3:22',
            isPublished: true,
        }, {
            title: 'Demons',
            album: InTongues,
            duration: '2:57',
            isPublished: true,
        }, {
            title: 'Bitter',
            album: InTongues,
            duration: '2:35',
            isPublished: true,
        }, {
            title: 'Pills',
            album: InTongues,
            duration: '3:07',
            isPublished: true,
        }, {
            title: 'Window',
            album: InTongues,
            duration: '2:33',
            isPublished: true,
        }, {
            title: 'Future Nostalgia',
            album: FutureNostalgia,
            duration: '3:05',
            isPublished: true,
        }, {
            title: 'Cool',
            album: FutureNostalgia,
            duration: '3:30',
            isPublished: true,
        }, {
            title: 'Levitaiting',
            album: FutureNostalgia,
            duration: '3:24',
            isPublished: true,
        }, {
            title: 'Hallucinate',
            album: FutureNostalgia,
            duration: '3:29',
            isPublished: true,
        }, {
            title: 'Break My Heart',
            album: FutureNostalgia,
            duration: '2:46',
            isPublished: true,
        }, {
            title: 'Levitating (The Blessed Madonna Remix) (featuring Madonna & Missy Elliott)',
            album: ClubFutureNostalgia,
            duration: '4:10',
            isPublished: true,
        }, {
            title: 'Hallucinate (Paul Woolford Extended Remix)',
            album: ClubFutureNostalgia,
            duration: '5:13',
            isPublished: true,
        }, {
            title: 'Don\'t Start Now (Kaytranada Remix)',
            album: ClubFutureNostalgia,
            duration: '4:27',
            isPublished: true,
        }, {
            title: 'Physical (Mark Ronson Remix) (featuring Gwen Stefani)',
            album: ClubFutureNostalgia,
            duration: '3:06',
            isPublished: true,
        }, {
            title: 'Break My Heart(Remix)',
            album: ClubFutureNostalgia,
            duration: '2:46',
            isPublished: true,
        }, {
            title: 'Genesis',
            album: DuaLipaCompleteEdition,
            duration: '4:10',
            isPublished: true,
        }, {
            title: 'Lost in Your Light',
            album: DuaLipaCompleteEdition,
            duration: '5:13',
            isPublished: true,
        }, {
            title: 'Hotter Than Hell',
            album: DuaLipaCompleteEdition,
            duration: '4:27',
            isPublished: true,
        }, {
            title: 'New Rules',
            album: DuaLipaCompleteEdition,
            duration: '3:06',
            isPublished: true,
        }, {
            title: 'IDGAF',
            album: DuaLipaCompleteEdition,
            duration: '2:46',
            isPublished: true,
        }, {
            title: 'Rare',
            album: Rare,
            duration: '3:41',
            isPublished: true,
        }, {
            title: 'Look at Her Now',
            album: Rare,
            duration: '2:43',
            isPublished: true,
        }, {
            title: 'Ring',
            album: Rare,
            duration: '2:29',
            isPublished: true,
        }, {
            title: 'People You Know',
            album: Rare,
            duration: '3:15',
            isPublished: true,
        }, {
            title: 'Crowded Room',
            album: Rare,
            duration: '3:06',
            isPublished: true,
        }, {
            title: 'Revival',
            album: Revival,
            duration: '4:06',
            isPublished: true,
        }, {
            title: 'Hand to Myself',
            album: Revival,
            duration: '3:21',
            isPublished: true,
        }, {
            title: 'Sober',
            album: Revival,
            duration: '3:15',
            isPublished: true,
        }, {
            title: 'Camouflage',
            album: Revival,
            duration: '4:09',
            isPublished: true,
        }, {
            title: 'Survivors',
            album: Revival,
            duration: '3:42',
            isPublished: true,
        }, {
            title: 'Birthday',
            album: StarsDance,
            duration: '3:21',
            isPublished: true,
        }, {
            title: 'Stars Dance',
            album: StarsDance,
            duration: '3:38',
            isPublished: true,
        }, {
            title: 'Come & Get It',
            album: StarsDance,
            duration: '3:52',
            isPublished: true,
        }, {
            title: 'Save the Day',
            album: StarsDance,
            duration: '3:53',
            isPublished: true,
        }, {
            title: 'Write Your Name',
            album: StarsDance,
            duration: '3:17',
            isPublished: true,
        },
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