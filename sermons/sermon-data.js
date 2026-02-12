// Sureway Church Sermon Library Data
// Base URL for audio hosting — update when files are uploaded
const AUDIO_BASE_URL = 'https://archive.org/download/sureway-church-sermons/';

// ============================================================
// CATEGORIES
// ============================================================
const CATEGORIES = {
    // --- MILK (Foundations) ---
    identity: {
        title: 'Identity',
        level: 'milk',
        tag: 'Foundations',
        subtitle: 'Who does God say you are?',
        description: 'These messages explore the believer\'s true identity — not what the world assigns, but what God declares over you in Christ.',
        sermons: [
            { title: 'Identity in Christ', file: 'Identity in Christ - 161118.mp3', speaker: 'Pastor Mike', date: '2016-11-18' },
            { title: 'You Are Beloved', file: 'You_Are_Beloved.mp3', speaker: 'Pastor Mike' },
            { title: 'Hidden in Christ', file: 'Hidden_in_Christ.mp3', speaker: 'Pastor Mike' },
            { title: 'Sheep But Not Victims', file: 'Sheep But Not Victims - 160930.mp3', speaker: 'Pastor Mike', date: '2016-09-30' },
            { title: 'Peculiar People', file: 'Peculiar_People_-_Bishop.mp3', speaker: 'Bishop Burrell' },
            { title: 'You Are Your Talent', file: 'You_Are_Your_Talent.mp3', speaker: 'Pastor Mike' },
            { title: 'You Are Not Stuck', file: 'You_Are_Not_Stuck.mp3', speaker: 'Pastor Mike' },
            { title: 'Breaking the Slave Mentality', file: 'Breaking_the_Slave_Mentality.mp3', speaker: 'Pastor Mike' },
            { title: 'Remember Where You Are', file: 'Remember_Where_You_Are.mp3', speaker: 'Pastor Mike' },
            { title: 'Deny Yourself', file: 'Deny Yourself - 170602.mp3', speaker: 'Pastor Mike', date: '2017-06-02' },
            { title: 'What You Deserve', file: 'What_You_Deserve_2017-05-05.mp3', speaker: 'Pastor Mike', date: '2017-05-05' },
            { title: '100 Percent', file: '100_Percent_-_Amina_Burrell.mp3', speaker: 'Amina Burrell' },
        ]
    },
    forgiveness: {
        title: 'Forgiveness',
        level: 'milk',
        tag: 'Foundations',
        subtitle: 'The costliest gift you\'ll ever give.',
        description: 'Forgiveness is not optional for the believer — it is the heart of the Gospel. These messages confront bitterness and teach the power of release.',
        sermons: [
            { title: 'Forgive', file: 'Forgive.mp3', speaker: 'Pastor Mike' },
            { title: 'The Root of Forgiveness', file: 'The_Root_of_Forgiveness.mp3', speaker: 'Pastor Mike' },
            { title: 'Mercy Over Judgment', file: 'Mercy_Over_Judgment.mp3', speaker: 'Pastor Mike' },
            { title: 'Seek Reconciliation', file: 'Seek_Reconciliation.mp3', speaker: 'Pastor Mike' },
            { title: 'Planks and Specks, Dogs and Pigs', file: 'Planks_and_Specks_Dogs_and_Pigs_Mike.mp3', speaker: 'Pastor Mike' },
            { title: 'Avoiding Partiality', file: 'Avoiding_Partiality.mp3', speaker: 'Pastor Mike' },
            { title: 'It\'s Not Fair', file: 'Its_Not_Fair.mp3', speaker: 'Pastor Mike' },
        ]
    },
    'nature-of-god': {
        title: 'The Nature of God',
        level: 'milk',
        tag: 'Foundations',
        subtitle: 'Not the God you imagined, but the God Who Is.',
        description: 'Who is God really? These messages strip away cultural assumptions and return to what Scripture reveals about the character and nature of the Almighty.',
        sermons: [
            { title: 'God is Love', file: 'God_is_Love_-_Pastor_Michael_Burrell.mp3', speaker: 'Pastor Mike' },
            { title: 'God\'s Great Love', file: 'Gods_Great_Love.mp3', speaker: 'Pastor Mike' },
            { title: 'God With Us', file: 'God_With_Us.mp3', speaker: 'Pastor Mike' },
            { title: 'The Logos', file: 'The_Logos.mp3', speaker: 'Pastor Mike' },
            { title: 'The Spirit of Truth', file: 'The_Spirit_of_Truth.mp3', speaker: 'Pastor Mike' },
            { title: 'Get to Know Your Father — The Wise God', file: 'Get_To_Know_Your_Father_-_The_Wise_God.mp3', speaker: 'Pastor Mike' },
            { title: 'God\'s Life', file: 'Gods_Life.mp3', speaker: 'Pastor Mike' },
            { title: 'He Who Quenches the Thirst', file: 'He_Who_Quenches_the_Thirst.mp3', speaker: 'Pastor Mike' },
            { title: 'Fear of the Lord', file: 'Fear_of_the_Lord.mp3', speaker: 'Pastor Mike' },
            { title: 'Steadfast Love', file: 'Steadfast_Love.mp3', speaker: 'Pastor Mike' },
            { title: 'The Power of His Word', file: 'The_Power_of_His_Word.mp3', speaker: 'Pastor Mike' },
            { title: 'Not One Jot or Tittle', file: 'Not_One_Jot_or_Tittle_2017-03-03.mp3', speaker: 'Pastor Mike', date: '2017-03-03' },
        ]
    },
    love: {
        title: 'Love & Relationships',
        level: 'milk',
        tag: 'Foundations',
        subtitle: 'By this they will know you are mine.',
        description: 'The mark of a disciple is love. These messages cover how we love God, love one another, and navigate the relational demands of the faith.',
        sermons: [
            { title: 'Love One Another', file: 'Love One Another - 161021.mp3', speaker: 'Pastor Mike', date: '2016-10-21' },
            { title: 'Love All Around', file: 'Love_All_Around.mp3', speaker: 'Pastor Mike' },
            { title: 'Love Ambush', file: 'Love_Ambush.mp3', speaker: 'Pastor Mike' },
            { title: 'Love Thy Neighbor', file: 'Love_thy_Neighbor.mp3', speaker: 'Pastor Mike' },
            { title: 'Love v. Pride', file: 'Love_v_Pride.mp3', speaker: 'Pastor Mike' },
            { title: 'Man to Man — Family', file: 'M2M_Family.mp3', speaker: 'Pastor Mike' },
            { title: 'God & Sex', file: 'God__Sex_Mike.mp3', speaker: 'Pastor Mike' },
            { title: 'Sex: The Bible vs. the Revolution', file: 'Sex__The_Bible_vs_the_Revolution.mp3', speaker: 'Pastor Mike' },
            { title: 'As For Me and My House', file: 'As_For_Me_And_My_House_.mp3', speaker: 'Pastor Mike' },
            { title: 'Train Up Your Children', file: 'Train_Up_Your_Children_2017-04-21.mp3', speaker: 'Pastor Mike', date: '2017-04-21' },
            { title: 'Givers Not Takers', file: 'Givers_Not_Takers.mp3', speaker: 'Pastor Mike' },
        ]
    },
    salvation: {
        title: 'Salvation & Grace',
        level: 'milk',
        tag: 'Foundations',
        subtitle: 'It was never about what you could do.',
        description: 'Salvation is the free gift of God. These messages unpack the Gospel, grace, and the finished work of Christ — the foundation everything else is built on.',
        sermons: [
            { title: 'Not by Works', file: 'Not_by_Works.mp3', speaker: 'Pastor Mike' },
            { title: 'Eternal Life', file: 'Eternal_Life.mp3', speaker: 'Pastor Mike' },
            { title: 'The Curse of the Law, The Blessing of Grace', file: 'The_Curse_if_the_Law_The_Blessing_of_Grace.mp3', speaker: 'Pastor Mike' },
            { title: 'The Path to God', file: 'The_Path_to_God.mp3', speaker: 'Pastor Mike' },
            { title: 'Salt and Light: The Responsibility of Grace', file: 'Salt_and_Light_The_Responsibility_of_Grace.mp3', speaker: 'Pastor Mike' },
            { title: 'The True Spirit of Christmas', file: 'The_True_Spirit_of_Christmas_2017-03-31.mp3', speaker: 'Pastor Mike', date: '2017-03-31' },
            { title: 'Boast in the Lord', file: 'Boast_in_the_Lord.mp3', speaker: 'Pastor Mike' },
            { title: 'Jesus Christ: More Than a Myth', file: 'Jesus_Christ_More_Than_a_Myth.mp3', speaker: 'Pastor Mike' },
            { title: 'The Historicity of Christ', file: 'The_Historicity_of_Christ.mp3', speaker: 'Pastor Mike' },
            { title: 'The Promise', file: '1997-11-02_Pastor_Burrell-_The_Promise.mp3', speaker: 'Bishop Burrell', date: '1997-11-02' },
            { title: 'Covenant', file: 'Covenant.mp3', speaker: 'Pastor Mike' },
        ]
    },
    obedience: {
        title: 'Obedience & Discipleship',
        level: 'milk',
        tag: 'Foundations',
        subtitle: 'Following costs everything — and gains more.',
        description: 'Obedience is the fruit of love, not the root of salvation. These messages explore what it means to follow Christ in everyday life.',
        sermons: [
            { title: 'Why We Obey', file: 'Why_We_Obey.mp3', speaker: 'Pastor Mike' },
            { title: 'Sacrificial Obedience', file: 'Sacrificial_Obedience.mp3', speaker: 'Pastor Mike' },
            { title: 'Follow the Leader', file: 'Follow_the_Leader.mp3', speaker: 'Pastor Mike' },
            { title: 'Go to Church', file: 'Go_to_Church.mp3', speaker: 'Pastor Mike' },
            { title: 'Live the Life of Christ', file: 'Live_the_Life_of_Christ.mp3', speaker: 'Pastor Mike' },
            { title: 'The Life of Christ', file: 'The_Life_of_Christ.mp3', speaker: 'Pastor Mike' },
            { title: 'Whom Will You Serve?', file: 'Whom_Will_You_Serve_.mp3', speaker: 'Pastor Mike' },
            { title: 'Sowing and Reaping', file: 'Sowing_and_Reaping.mp3', speaker: 'Pastor Mike' },
            { title: 'Share the Faith', file: 'Share_the_Faith_2017-03-24.mp3', speaker: 'Pastor Mike', date: '2017-03-24' },
            { title: 'A Contrite Heart', file: 'A_Contrite_Heart.mp3', speaker: 'Pastor Mike' },
            { title: 'Repentance: The Heart of God (Part 2)', file: 'Repentance_The_Heart_of_God_Part_2.mp3', speaker: 'Pastor Mike' },
            { title: 'Light of the World', file: 'Light_of_the_World.mp3', speaker: 'Pastor Mike' },
            { title: 'Light of the World 2', file: 'Light_of_the_World_2.mp3', speaker: 'Pastor Mike' },
            { title: 'Treasures in Heaven', file: 'Treasures_in_Heaven.mp3', speaker: 'Pastor Mike' },
            { title: 'Treasures in Heaven 2', file: 'Treasures_in_Heaven_2.mp3', speaker: 'Pastor Mike' },
            { title: 'The Cost of Giving', file: 'The_Cost_of_Giving.mp3', speaker: 'Pastor Mike' },
            { title: 'I Could Have Been a Contender', file: '2017-01-27_Pastor_Mike_-_I_Could_Have_Been_A_Contender.mp3', speaker: 'Pastor Mike', date: '2017-01-27' },
            { title: 'The Main Thing', file: '2016-12-16_Elder_Coleman_-_The_Main_Thing.mp3', speaker: 'Elder Coleman', date: '2016-12-16' },
        ]
    },

    // --- MEAT (Advanced) ---
    'spiritual-warfare': {
        title: 'Spiritual Warfare',
        level: 'meat',
        tag: 'Advanced',
        subtitle: 'The battlefield is the mind.',
        description: 'The enemy is real, and the battle is not against flesh and blood. These messages equip believers for the unseen war that shapes the visible world.',
        sermons: [
            { title: 'The Unseen Realm', file: 'The Unseen Realm - 161014.mp3', speaker: 'Pastor Mike', date: '2016-10-14' },
            { title: 'Hidden Battles', file: 'Hidden_Battles.mp3', speaker: 'Pastor Mike' },
            { title: 'The World, The Flesh, The Devil', file: 'The_World_The_Flesh_The_Devil_Mike.mp3', speaker: 'Pastor Mike' },
            { title: 'Besting Temptation', file: 'Besting_Temptation.mp3', speaker: 'Pastor Mike' },
            { title: 'Get Behind Me Satan', file: 'Get_Behind_Me_Satan.mp3', speaker: 'Pastor Mike' },
            { title: 'Get Behind Me Satan 2', file: 'Get_Behind_Me_Satan_2.mp3', speaker: 'Pastor Mike' },
            { title: 'Test the Spirits / Spirit of Antichrist', file: 'Test_the_Spirts_Spirit_of_AntiChrist.mp3', speaker: 'Pastor Mike' },
            { title: 'A World Filled with Idols', file: 'A_World_Filled_with_Idols.mp3', speaker: 'Pastor Mike' },
            { title: 'A World Full of Idols', file: 'A_World_Full_of_Idols.mp3', speaker: 'Pastor Mike' },
            { title: 'Faulty Passions', file: 'Faulty_Passions.mp3', speaker: 'Pastor Mike' },
            { title: 'The Nature of Sin', file: 'The_Nature_of_Sin.mp3', speaker: 'Pastor Mike' },
            { title: 'The Heart of Man', file: 'The_Heart_of_Man.mp3', speaker: 'Pastor Mike' },
            { title: 'Pulling Down Strongholds', file: '2017-01-13_Elder_Coleman_-_Pulling_Down_Strongholds.mp3', speaker: 'Elder Coleman', date: '2017-01-13' },
            { title: 'Ahab & Jezebel', file: '2016-05-20_Pastor_Mike_-_Ahab_And_Jezebel.mp3', speaker: 'Pastor Mike', date: '2016-05-20' },
        ]
    },
    suffering: {
        title: 'Suffering & Endurance',
        level: 'meat',
        tag: 'Advanced',
        subtitle: 'Hupomonè: staying power under pressure.',
        description: 'Suffering is not punishment — it is preparation. These messages address pain, trials, and the endurance that faith demands.',
        sermons: [
            { title: 'A Hard Saying: Enduring Suffering', file: 'A_Hard_Saying_Enduring_Suffering_2017-02-10.mp3', speaker: 'Pastor Mike', date: '2017-02-10' },
            { title: 'Through the Fire', file: 'Through_The_Fire.mp3', speaker: 'Pastor Mike' },
            { title: 'How do We Endure Lengthy Trials?', file: 'How_do_We_Endure_Lengthy_Trials.mp3', speaker: 'Pastor Mike' },
            { title: 'Stop Walking in Quicksand', file: 'Stop_Walking_In_Quicksand.mp3', speaker: 'Pastor Mike' },
            { title: 'Fight for Your Peace', file: 'Fight_for_Your_Peace.mp3', speaker: 'Pastor Mike' },
            { title: 'Fear', file: 'Fear.mp3', speaker: 'Pastor Mike' },
            { title: 'Struggle with God', file: 'Struggle_with_God.mp3', speaker: 'Pastor Mike' },
            { title: 'Wait on the Lord', file: 'Wait_on_the_Lord.mp3', speaker: 'Pastor Mike' },
            { title: 'Trust in God', file: 'Trust_in_God.mp3', speaker: 'Pastor Mike' },
            { title: 'Trust in God: Purpose', file: 'Trust_in_God_Purpose_Mike.mp3', speaker: 'Pastor Mike' },
            { title: 'Stay in the Pocket', file: 'Stay_in_the_Pocket.mp3', speaker: 'Pastor Mike' },
            { title: 'The Wilderness', file: '2017-01-06_Pastor_Mike_-_The_Wilderness.mp3', speaker: 'Pastor Mike', date: '2017-01-06' },
            { title: 'The God of All Comfort', file: '2016-06-17_Pastor_Mike_-_The_God_Of_All_Comfort.mp3', speaker: 'Pastor Mike', date: '2016-06-17' },
            { title: 'Matthew 14', file: '2017-01-20_Pastor_Mike_-_Matthew_14.mp3', speaker: 'Pastor Mike', date: '2017-01-20' },
        ]
    },
    prophecy: {
        title: 'Prophecy & End Times',
        level: 'meat',
        tag: 'Advanced',
        subtitle: 'What Scripture actually says about what\'s coming.',
        description: 'Prophecy is not speculation — it is God revealing His plan. These messages explore the typology, history, and future of God\'s redemptive work.',
        sermons: [
            { title: 'Tribe of Dan', file: 'Tribe_of_Dan.mp3', speaker: 'Pastor Mike' },
            { title: 'Christ in the Old Testament', file: 'Christ_in_the_Old_Testament_2017-04-07.mp3', speaker: 'Pastor Mike', date: '2017-04-07' },
            { title: 'The True Moses', file: 'The_True_Moses.mp3', speaker: 'Pastor Mike' },
            { title: 'The Typology of Christ', file: 'The_Typology_of_Christ.mp3', speaker: 'Pastor Mike' },
            { title: 'Eyes Peeled, Mind Sharp (Part 2)', file: 'Eyes_Peeled_Mind_Sharp_-_Part_2.mp3', speaker: 'Pastor Mike' },
            { title: 'Running the Numbers', file: 'Running_the_Numbers.mp3', speaker: 'Pastor Mike' },
        ]
    },
    'christian-mind': {
        title: 'The Christian Mind',
        level: 'meat',
        tag: 'Advanced',
        subtitle: 'Renewing the mind is not optional.',
        description: 'How you think determines how you live. These messages challenge worldly thinking and cultivate the mind of Christ.',
        sermons: [
            { title: 'What Are You Thinking?', file: 'What_Are_You_Thinking.mp3', speaker: 'Pastor Mike' },
            { title: 'Lose the Formula', file: 'Lose_The_Formula.mp3', speaker: 'Pastor Mike' },
            { title: 'Eyes on the Prize', file: 'Eyes_On_The_Prize.mp3', speaker: 'Pastor Mike' },
            { title: 'Taking Sides', file: 'Taking_Sides.mp3', speaker: 'Pastor Mike' },
            { title: 'The Third Path', file: 'The_Third_Path.mp3', speaker: 'Pastor Mike' },
            { title: 'The Virtue is Anger', file: 'The_Virtue_is_Anger.mp3', speaker: 'Pastor Mike' },
            { title: 'Turn Your Eyes to Christ', file: 'Turn_your_eyes_to_Christ.mp3', speaker: 'Pastor Mike' },
            { title: 'Ready, Set, Routine', file: 'Ready_Set_Routine.mp3', speaker: 'Pastor Mike' },
            { title: 'Headed for Trouble', file: 'Headed_for_Trouble.mp3', speaker: 'Pastor Mike' },
            { title: 'Good Guys', file: 'Good_Guys.mp3', speaker: 'Pastor Mike' },
            { title: 'Stir the Fire', file: 'Stir_the_Fire.mp3', speaker: 'Pastor Mike' },
            { title: 'What Are You Waiting For?', file: 'What_Are_You_Waiting_For_.mp3', speaker: 'Pastor Mike' },
            { title: 'What Are You Waiting For? (Part 2)', file: 'What_Are_You_Waiting_For__2.mp3', speaker: 'Pastor Mike' },
            { title: 'Dependents', file: 'Dependents.mp3', speaker: 'Pastor Mike' },
        ]
    },
    'church-authority': {
        title: 'Church & Authority',
        level: 'meat',
        tag: 'Advanced',
        subtitle: 'Order in the house of God.',
        description: 'The church is not a building — it is a body. These messages address spiritual authority, church function, and the standards God has set.',
        sermons: [
            { title: 'Spiritual Authority in the Church (Part 1)', file: 'Spiritual_Authority_in_the_Church_Pt_1.mp3', speaker: 'Pastor Mike' },
            { title: 'Spiritual Authority in the Church (Part 2)', file: 'Spiritual_Authority_in_the_Church_-_Part_2.mp3', speaker: 'Pastor Mike' },
            { title: 'How Should the Church Function?', file: 'How_Should_the_Church_Function.mp3', speaker: 'Pastor Mike' },
            { title: 'Raise the Standard', file: 'Raise_The_Standard.mp3', speaker: 'Pastor Mike' },
            { title: 'The Plumbline', file: 'The_Plumbline.mp3', speaker: 'Pastor Mike' },
            { title: 'There\'s a Way That Seems Right', file: 'Theres_a_Way_that_Seems_Right_-_Bishop_Burrell.mp3', speaker: 'Bishop Burrell' },
            { title: 'Faith Share', file: 'Faith_Share.mp3', speaker: 'Pastor Mike' },
            { title: 'How do We Serve in This Time?', file: 'How_do_We_Serve_in_This_Time.mp3', speaker: 'Pastor Mike' },
        ]
    }
};

// ============================================================
// FEATURED SERIES
// ============================================================
const SERIES = {
    'relational-god': {
        title: 'The Relational God',
        subtitle: 'A 6-part journey into the nature of God as relationship',
        description: 'God is not distant — He is relational by nature. This series explores the Trinity, the Word, Christ, obedience, experience, and prayer as dimensions of a living relationship with God.',
        sermons: [
            { title: 'The Trinity', file: 'Relational_God_-_The_Trinity.mp3', speaker: 'Pastor Mike', part: 1 },
            { title: 'The Word', file: 'Relational_God_-_The_Word.mp3', speaker: 'Pastor Mike', part: 2 },
            { title: 'Christ', file: 'Relational_God__Christ.mp3', speaker: 'Pastor Mike', part: 3 },
            { title: 'Obedience', file: 'Relational_God_-_Obedience.mp3', speaker: 'Pastor Mike', part: 4 },
            { title: 'Experience', file: 'Relational_God_-_Experience.mp3', speaker: 'Pastor Mike', part: 5 },
            { title: 'Prayer', file: 'Relational_God__Prayer.mp3', speaker: 'Pastor Mike', part: 6 },
        ]
    },
    countermeasures: {
        title: 'Countermeasures',
        subtitle: 'Transforming the Mind',
        description: 'The battle for your life is fought between your ears. This series examines the spiritual disciplines that displace destructive patterns with Kingdom thinking.',
        sermons: [
            { title: 'Anger', file: 'Countermeasure_Anger_Mike.mp3', speaker: 'Pastor Mike', part: 1 },
            { title: 'Despair', file: 'Countermeasures_-_Despair.mp3', speaker: 'Pastor Mike', part: 2 },
            { title: 'Worry', file: 'Countermeasures_Pt_3__Worry.mp3', speaker: 'Pastor Mike', part: 3 },
            { title: 'Reloaded: Anger', file: 'Countermeasures__Reloaded_-_Pt_1__Anger.mp3', speaker: 'Pastor Mike', part: 4 },
            { title: 'Reloaded: Fear', file: 'Countermeasures_Reloaded_Pt_2__Fear.mp3', speaker: 'Pastor Mike', part: 5 },
        ]
    },
    'making-godly-choices': {
        title: 'Making Godly Choices',
        subtitle: 'A classic series from Bishop Burrell',
        description: 'Originally recorded on cassette tape in the year 2000, this three-part series from Bishop Colmon Burrell explores the art and discipline of making godly choices.',
        sermons: [
            { title: 'Part 1 — Side A', file: '2000-08-13_Pastor_Burrell_DO_-_Making_Godly_Choices_Pt_1_-_Side_A.mp3', speaker: 'Bishop Burrell', date: '2000-08-13', part: 1 },
            { title: 'Part 1 — Side B', file: '2000-08-13_Pastor_Burrell_DO_-_Making_Godly_Choices_Pt_1_-_Side_B.mp3', speaker: 'Bishop Burrell', date: '2000-08-13', part: 2 },
            { title: 'Part 2 — Side A', file: '2000-08-27_Pastor_Burrell_-_Making_Godly_Choices_Pt_2_-_Side_A.mp3', speaker: 'Bishop Burrell', date: '2000-08-27', part: 3 },
            { title: 'Part 2 — Side B', file: '2000-08-27_Pastor_Burrell_-_Making_Godly_Choices_Pt_2_-_Side_B.mp3', speaker: 'Bishop Burrell', date: '2000-08-27', part: 4 },
            { title: 'Part 3 — Side A', file: '2000-09-03_Pastor_Burrell_DO_-_Making_Godly_Choices_Pt_3_-_Side_A.mp3', speaker: 'Bishop Burrell', date: '2000-09-03', part: 5 },
            { title: 'Part 3 — Side B', file: '2000-09-03_Pastor_Burrell_DO_-_Making_Godly_Choices_Pt_3_-_Side_B.mp3', speaker: 'Bishop Burrell', date: '2000-09-03', part: 6 },
        ]
    }
};

// ============================================================
// PODCASTS
// ============================================================
const PODCASTS = {
    title: 'Podcasts',
    subtitle: 'Short-form teaching for the road',
    description: 'Bite-sized messages designed for your commute, workout, or quiet moment. Same depth, shorter format.',
    sermons: [
        { title: 'A Time for Prayer', file: 'A_time_for_prayer_podcast.mp3', speaker: 'Pastor Mike' },
        { title: 'Prayer and Fasting', file: 'Prayer_and_Fasting_Podcast.mp3', speaker: 'Pastor Mike' },
        { title: 'Forgiveness', file: 'Forgiveness_Podcast.mp3', speaker: 'Pastor Mike' },
        { title: 'The Lord is With Us', file: 'The_Lord_is_With_Us_Podcast.mp3', speaker: 'Pastor Mike' },
        { title: 'What is Expected of Me?', file: 'What_is_Expected_of_Me_Podcast.mp3', speaker: 'Pastor Mike' },
        { title: 'What Should be Our Focus?', file: 'What_Should_be_Our_Focus_Podcast.mp3', speaker: 'Pastor Mike' },
        { title: 'What Should We Expect?', file: 'What_Should_We_Expect__Podcast.mp3', speaker: 'Pastor Mike' },
        { title: 'What Should We Avoid?', file: 'What_Should_we_Avoid_podcast.mp3', speaker: 'Pastor Mike' },
        { title: 'What\'s the Meaning of Life?', file: 'Whats_the_Meaning_of_Life_podcast.mp3', speaker: 'Pastor Mike' },
        { title: 'Where is God?', file: 'Where_is_God_podcast.mp3', speaker: 'Pastor Mike' },
        { title: 'Why Would God Allow This?', file: 'Why_Would_God_Allow_This_podcast.mp3', speaker: 'Pastor Mike' },
        { title: 'What do We Say to the Sufferer?', file: 'What_do_we_say_to_the_Sufferer_podcast1.mp3', speaker: 'Pastor Mike' },
        { title: 'What do We Say to Unbelievers?', file: 'What_do_we_say_to_Unbelievers_podcast.mp3', speaker: 'Pastor Mike' },
        { title: 'How do We Find Justice?', file: 'How_do_we_Find_Justice.mp3', speaker: 'Pastor Mike' },
        { title: 'What do We Do with Anger?', file: 'What_do_we_do_with_anger.mp3', speaker: 'Pastor Mike' },
        { title: 'What About Justice?', file: 'What_About_Justice.mp3', speaker: 'Pastor Mike' },
    ]
};

// ============================================================
// GUEST SPEAKERS
// ============================================================
const GUEST_SPEAKERS = {
    title: 'Guest Speakers',
    subtitle: 'Voices from the wider body',
    description: 'The church is one body with many members. These messages come from guest speakers who have shared their gifts with the Sureway family.',
    sermons: [
        { title: 'On Walking with Christ', file: 'On_Walking_with_Christ_Bishop.mp3', speaker: 'Bishop Burrell' },
        { title: 'Change Unbelief Through Meditation — Side A', file: '2000-10-18_Pastor_Burrell_-_Change_Unbelief_Thru_Meditation_Side_A.mp3', speaker: 'Bishop Burrell', date: '2000-10-18' },
        { title: 'Change Unbelief Through Meditation — Side B', file: '2000-10-18_Pastor_Burrell_-_Change_Unbelief_Thru_Meditation_Side_B.mp3', speaker: 'Bishop Burrell', date: '2000-10-18' },
        { title: 'Celebration of Sons', file: 'Celebration_of_Sons_-_Bishop_Colmon_Burrell_Jan_29_2017.mp3', speaker: 'Bishop Burrell', date: '2017-01-29' },
        { title: 'All Nations', file: 'All_Nations_Colmon_III.mp3', speaker: 'Colmon III' },
        { title: 'Repentance', file: 'Repentance_CB3.mp3', speaker: 'Colmon III' },
        { title: 'Colmon III (August 2018)', file: 'Colmon_III_8-4-2018.mp3', speaker: 'Colmon III', date: '2018-08-04' },
        { title: 'Minister Gbenga (February 2018)', file: 'Minister_Gbenga_2-11-2018.mp3', speaker: 'Minister Gbenga', date: '2018-02-11' },
    ]
};

// ============================================================
// ADDITIONAL (sermons not fitting cleanly into categories)
// ============================================================
const ADDITIONAL = {
    title: 'More Messages',
    subtitle: 'Additional teaching from the archive',
    description: 'These messages cover ground that crosses multiple themes — the theology of work, community, prayer, and walking with Christ daily.',
    sermons: [
        { title: 'Getting Closer to God', file: 'Getting_Closer_to_God.mp3', speaker: 'Pastor Mike' },
        { title: 'How to Get Close to God', file: 'How_to_get_Close_to_God_-_Pastor_Mike.mp3', speaker: 'Pastor Mike' },
        { title: 'The Upside Down Kingdom', file: 'The_Upside_Down_Kingdom.mp3', speaker: 'Pastor Mike' },
        { title: 'Go Down to Go Up', file: 'Go_Down_to_Go_Up.mp3', speaker: 'Pastor Mike' },
        { title: '403 S. Cypress Ave', file: '403_S_Cypress_Ave_5.mp3', speaker: 'Pastor Mike' },
        { title: 'New Recording 19', file: 'New_Recording_19.mp3', speaker: 'Pastor Mike' },
    ]
};

// Utility: get audio URL for a sermon file
function getAudioUrl(filename) {
    return AUDIO_BASE_URL + encodeURIComponent(filename);
}
