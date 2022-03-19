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
        FutureNostalgia, ClubFutureNostalgia, DuaLipaCompleteEdition,
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
            title: 'Dua Lipa: Complete Edition',
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
            title: 'Montero',
            album: Montero,
            duration: '2:18',
        }, {
            title: 'Industry Baby',
            album: Montero,
            duration: '3:17',
        }, {
            title: 'The art of realization',
            album: Montero,
            duration: '0:25',
        }, {
            title: 'Dolla Sing Slime',
            album: Montero,
            duration: '2:26',
        }, {
            title: 'Sun Goes Down',
            album: Montero,
            duration: '2:49',
        }, {
            title: 'Montero',
            album: IndustryBaby,
            duration: '2:18',
        }, {
            title: 'Industry Baby',
            album: IndustryBaby,
            duration: '3:17',
        }, {
            title: 'The art of realization',
            album: IndustryBaby,
            duration: '0:25',
        }, {
            title: 'Dolla Sing Slime',
            album: IndustryBaby,
            duration: '2:26',
        }, {
            title: 'Sun Goes Down',
            album: IndustryBaby,
            duration: '2:49',
        }, {
            title: 'Montero',
            album: Canvas,
            duration: '2:18',
        }, {
            title: 'Industry Baby',
            album: Canvas,
            duration: '3:17',
        }, {
            title: 'The art of realization',
            album: Canvas,
            duration: '0:25',
        }, {
            title: 'Dolla Sing Slime',
            album: Canvas,
            duration: '2:26',
        }, {
            title: 'Sun Goes Down',
            album: Canvas,
            duration: '2:49',
        }, {
            title: 'Getting Older',
            album: HappierThenEver,
            duration: '4:04',
        }, {
            title: 'Billie Bossa Nova',
            album: HappierThenEver,
            duration: '3:17',
        }, {
            title: 'Oxytocin',
            album: HappierThenEver,
            duration: '3:30',
        }, {
            title: 'Lost Cause',
            album: HappierThenEver,
            duration: '3:32',
        }, {
            title: 'Not My Responsibility',
            album: HappierThenEver,
            duration: '3:48',
        }, {
            title: 'Bad Guy',
            album: WhenWeAllFallAsleep,
            duration: '3:14',
        }, {
            title: 'You should see me in a crowd',
            album: WhenWeAllFallAsleep,
            duration: '3:01',
        }, {
            title: 'wish you were gay',
            album: WhenWeAllFallAsleep,
            duration: '3:42',
        }, {
            title: '8',
            album: WhenWeAllFallAsleep,
            duration: '2:53',
        }, {
            title: 'bury a friend',
            album: WhenWeAllFallAsleep,
            duration: '2:50',
        }, {
            title: 'COPYCAT',
            album: DontSmileAtMe,
            duration: '3:15',
        }, {
            title: 'my boy',
            album: DontSmileAtMe,
            duration: '2:51',
        }, {
            title: 'party favor',
            album: DontSmileAtMe,
            duration: '3:25',
        }, {
            title: 'ocean eyes',
            album: DontSmileAtMe,
            duration: '3:20',
        }, {
            title: '&burn',
            album: DontSmileAtMe,
            duration: '2:59',
        }, {
            title: 'How Do I Make You Love Me',
            album: Dawn,
            duration: '3:35',
        }, {
            title: 'Sacrifice',
            album: Dawn,
            duration: '3:09',
        }, {
            title: 'Out of Time',
            album: Dawn,
            duration: '3:25',
        }, {
            title: 'Best Friends',
            album: Dawn,
            duration: '2:44',
        }, {
            title: 'Starry Eyes',
            album: Dawn,
            duration: '2:28',
        }, {
            title: 'Alone Again',
            album: AfterHours,
            duration: '4:10',
        }, {
            title: 'Hardest to Love',
            album: AfterHours,
            duration: '3:31',
        }, {
            title: 'Snowchild',
            album: AfterHours,
            duration: '4:07',
        }, {
            title: 'Save Your Tears',
            album: AfterHours,
            duration: '3:36',
        }, {
            title: 'Blinding Lights',
            album: AfterHours,
            duration: '3:20',
        }, {
            title: 'Starboy',
            album: Starboy,
            duration: '3:50',
        }, {
            title: 'False Alarm',
            album: Starboy,
            duration: '3:40',
        }, {
            title: 'Rockin',
            album: Starboy,
            duration: '3:52',
        }, {
            title: 'True Colors',
            album: Starboy,
            duration: '3:26',
        }, {
            title: 'Sidewalks',
            album: Starboy,
            duration: '3:51',
        }, {
            title: 'Ew',
            album: Nectar,
            duration: '3:28',
        }, {
            title: 'Tick Tock',
            album: Nectar,
            duration: '2:13',
        }, {
            title: 'Upgrade',
            album: Nectar,
            duration: '1:30',
        }, {
            title: 'Run',
            album: Nectar,
            duration: '3:15',
        }, {
            title: 'Pretty Boy',
            album: Nectar,
            duration: '2:37',
        }, {
            title: 'ATTENTION',
            album: Ballads1,
            duration: '2:09',
        }, {
            title: 'TEST DRIVE',
            album: Ballads1,
            duration: '3:00',
        }, {
            title: 'CANT GET OVER YOU',
            album: Ballads1,
            duration: '1:47',
        }, {
            title: 'WHY AM I STILL IN LA',
            album: Ballads1,
            duration: '3:20',
        }, {
            title: 'COME THRU',
            album: Ballads1,
            duration: '2:33',
        }, {
            title: 'Will He',
            album: InTongues,
            duration: '3:22',
        }, {
            title: 'Demons',
            album: InTongues,
            duration: '2:57',
        }, {
            title: 'Bitter',
            album: InTongues,
            duration: '2:35',
        }, {
            title: 'Pills',
            album: InTongues,
            duration: '3:07',
        }, {
            title: 'Window',
            album: InTongues,
            duration: '2:33',
        }, {
            title: 'Future Nostalgia',
            album: FutureNostalgia,
            duration: '3:05',
        }, {
            title: 'Cool',
            album: FutureNostalgia,
            duration: '3:30',
        }, {
            title: 'Levitaiting',
            album: FutureNostalgia,
            duration: '3:24',
        }, {
            title: 'Hallucinate',
            album: FutureNostalgia,
            duration: '3:29',
        }, {
            title: 'Break My Heart',
            album: FutureNostalgia,
            duration: '2:46',
        }, {
            title: 'Levitating (The Blessed Madonna Remix) (featuring Madonna & Missy Elliott)',
            album: ClubFutureNostalgia,
            duration: '4:10',
        }, {
            title: 'Hallucinate (Paul Woolford Extended Remix)',
            album: ClubFutureNostalgia,
            duration: '5:13',
        }, {
            title: 'Don\'t Start Now (Kaytranada Remix)',
            album: ClubFutureNostalgia,
            duration: '4:27',
        }, {
            title: 'Physical (Mark Ronson Remix) (featuring Gwen Stefani)',
            album: ClubFutureNostalgia,
            duration: '3:06',
        }, {
            title: 'Break My Heart(Remix)',
            album: ClubFutureNostalgia,
            duration: '2:46',
        }, {
            title: 'Genesis',
            album: DuaLipaCompleteEdition,
            duration: '4:10',
        }, {
            title: 'Lost in Your Light',
            album: DuaLipaCompleteEdition,
            duration: '5:13',
        }, {
            title: 'Hotter Than Hell',
            album: DuaLipaCompleteEdition,
            duration: '4:27',
        }, {
            title: 'New Rules',
            album: DuaLipaCompleteEdition,
            duration: '3:06',
        }, {
            title: 'IDGAF',
            album: DuaLipaCompleteEdition,
            duration: '2:46',
        }, {
            title: 'Rare',
            album: Rare,
            duration: '3:41',
        }, {
            title: 'Look at Her Now',
            album: Rare,
            duration: '2:43',
        }, {
            title: 'Ring',
            album: Rare,
            duration: '2:29',
        }, {
            title: 'People You Know',
            album: Rare,
            duration: '3:15',
        }, {
            title: 'Crowded Room',
            album: Rare,
            duration: '3:06',
        }, {
            title: 'Revival',
            album: Revival,
            duration: '4:06',
        }, {
            title: 'Hand to Myself',
            album: Revival,
            duration: '3:21',
        }, {
            title: 'Sober',
            album: Revival,
            duration: '3:15',
        }, {
            title: 'Camouflage',
            album: Revival,
            duration: '4:09',
        }, {
            title: 'Survivors',
            album: Revival,
            duration: '3:42',
        }, {
            title: 'Birthday',
            album: StarsDance,
            duration: '3:21',
        }, {
            title: 'Stars Dance',
            album: StarsDance,
            duration: '3:38',
        }, {
            title: 'Come & Get It',
            album: StarsDance,
            duration: '3:52',
        }, {
            title: 'Save the Day',
            album: StarsDance,
            duration: '3:53',
        }, {
            title: 'Write Your Name',
            album: StarsDance,
            duration: '3:17',
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