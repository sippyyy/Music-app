const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)


const leftSongContainer = $('.left__content__songs');
const controlSongName = $('.music__name')
const controlSongSinger = $('.music__singer')
const controlImg = $('#music__thumb')
const audio = $('#audio')
const sliderHeading = $('.wallpaper__heading')
const sliderDesc = $('.wallpaper__desc')
const themeCustom = $('.right__content')
const controlBtn = $('.music__control-btn')
const controlContainer = $('.music__control')
const timeBar = $('#progress')
const nextBtn= $('.music__next-btn')
const prevBtn = $('.music__prev-btn')
const randomBtn = $('.music__status')
const songBlocks = $$('song-block')
const lyricsContainer = $('.wallpaper__lyrics span')
const songsOfArtistContainer = $('.artist__songs')




const artistPopular = $('.artist__block')
const artistSong = $('.artist__songs')


const app = {
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isOpen: false,

    songs: [
        {
            songName: 'Rolling In The Deep',
            singer: 'Adele',
            img: './assets/img/adele.jpg',
            path: './assets/music/Rolling In The Deep - Adele.mp3',
            ins: 'https://www.instagram.com/adele/',
            lyric:`There's a fire starting in my heart 
            Reaching a fever pitch and it's bringing me out the dark
            Finally, I can see you crystal clear
            Go ahead and sell me out and I'll lay your ship bare
            See how I'll leave with every piece of you
            Don't underestimate the things that I will do
            There's a fire starting in my heart
            Reaching a fever pitch and it's bring me out the dark
            The scars of your love remind me of us
            They keep me thinking that we almost had it all
            The scars of your love, they leave me breathless
            I can't help feeling
            We could have had it all
            (You're gonna wish you never had met me)
            Rolling in the deep
            (Tears are gonna fall, rolling in the deep)
            You had my heart inside of your hands
            (You're gonna wish you never had met me)
            And you played it to the beat
            (Tears are gonna fall, rolling in the deep)
            Baby, I have no story to be told
            But I've heard one on you and I'm gonna make your head burn
            Think of me in the depths of your despair
            Make a home down there as mine sure won't be shared
            The scars of your love remind me of us
            (Tears are gonna fall, rolling in the deep)
            They keep me thinking that we almost had it all
            (You're gonna wish you never had met me)
            The scars of your love, they leave me breathless
            (Tears are gonna fall, rolling in the deep)
            I can't help feeling
            We could have had it all
            (You're gonna wish you never had met me)
            Rolling in the deep
            (Tears are gonna fall, rolling in the deep)
            You had my heart inside of your hands
            (You're gonna wish you never had met me)
            And you played it to the beat
            (Tears are gonna fall, rolling in the deep)
            Could have had it all
            Rolling in the deep
            You had my heart inside of your hands
            But you played it with a beating
            Throw your soul through every open door
            Count your blessings to find what you look for
            Turn my sorrow into treasured gold
            You'll pay me back in kind and reap just what you've sown
            We could have had it all
            (Tears are gonna fall, rolling in the deep)
            We could have had it all
            (You're gonna wish you never had met me)
            It all, it all, it all
            (Tears are gonna fall, rolling in the deep)
            We could have had it all
            (You're gonna wish you never had met me)
            Rolling in the deep
            (Tears are gonna fall, rolling in the deep)
            You had my heart inside of your hands
            (You're gonna wish you never had met me)
            And you played it to the beat
            (Tears are gonna fall, rolling in the deep)
            We could have had it all
            (You're gonna wish you never had met me)
            Rolling in the deep
            (Tears are gonna fall, rolling in the deep)
            You had my heart inside of your hands
            (You're gonna wish you never had met me)
            But you played it
            You played it
            You played it
            You played it to the beat`
        },
        {
            songName: 'Gasoline',
            singer: 'The Weeknd',
            img: './assets/img/weeknd.jpg',
            path: './assets/music/Gasoline - TheWeeknd.mp3',
            ins: 'https://www.instagram.com/theweeknd/',
            lyric: `It's five AM, my time again
            I've soakin' up the moon, can't sleep
            It's five AM my time again
            I'm calling and you know it's me
            I'm pushing myself further
            I'm just tryna feel my heartbeat beat (beat)
            I wrap my hands around your neck
            You love it when I always squeeze
            It's five AM, I'm high again
            And you can see that I'm in pain
            I've fallen into emptiness
            I want you 'cause we're both insane
            I'm staring into the abyss
            I'm looking at myself again
            I'm dozing off to R.E.m.
            I'm trying not to lose my faith
            And I love it when you watch me sleep
            You spin me 'round so I can breathe
            It's only safe for you and me
            I know you won't let me OD
            And if I finally die in peace
            Just wrap my body in these sheets
            And pour out the gasoline
            It don't mean much to me
            It's five AM, I'm nihilist
            I know there's nothing after this (after this)
            Obsessing over aftermaths
            Apocalypse and hopelessness (hopelessness)
            The only thing I understand
            Is zero sum of tenderness (tenderness)
            Oh, baby, please just hold me close
            Make me believe there's more to live
            Around, around, around, around we go
            In this game called life, we are not free
            And I love it when you watch me sleep
            You spin me 'round so I can breathe
            It's only safe for you and me (don't let me go)
            I know you won't let me OD (don't you let me go)
            And if I finally die in peace (ooh yeah)
            Just wrap my body in these sheets
            And pour out the gasoline
            It don't mean much to me
            Ohh-oh-ooh
            Oh-ooh-ooh-oh
            Ohh-oh-ooh
            Ha, hey-uh
            Hey, huh, hey, huh
            Huh, huh, huh, ha, huh`
        },
        {
            songName: 'Suffer',
            singer: 'Charlie Puth',
            img: './assets/img/charlie_puth.jpg',
            path: './assets/music/Suffer - Charlie Puth.m4a',
            ins: 'https://www.instagram.com/charlieputh/',
            lyric: `
                Detonate, detonator
                Baby, oh, you blow my mind
                You tell me wait, wait on ya
                But baby, I can't wait all night
                I go through pictures you send my phone
                Oh, stop tempting me
                You know what I want
                I wanna make, wanna make love
                Girl, I can't lie
                I'm just a sucker for a cold-hearted lover
                You make me suffer
                You make me suffer
                Don't keep me waiting, you should come over, whoa
                Don't make me suffer
                Don't make me suffer
                So, here we go, go again
                It's like I'm caught under your spell
                You're wearing black, black magic
                Well, baby, don't wear nothing else
                When I open up this door, don't you play
                Ain't no other man gon' make you feel the same
                I wanna make, wanna make love
                Girl, I can't lie
                I'm just a sucker for a cold-hearted lover
                You make me suffer
                You make me suffer
                Don't keep me waiting (don't keep me waiting)
                You should come over, whoa (you should come, you should come, baby)
                Don't make me suffer
                Don't make me suffer
                I hate it when you get your way
                But we love, yeah, we love it, baby
                Some things don't ever change
                You make me suffer, baby, oh
                You, you, oh-oh-oh
                I'm just a sucker (I'm just a sucker, baby)
                For a cold-hearted lover (for a cold-hearted lover)
                You make me suffer (you make me suffer)
                You make me suffer (you make me suffer)
                Don't keep me waiting (don't keep me waiting)
                You should come over, whoa
                Don't make me suffer
                Don't make me suffer
            `
        },
        {
            songName: 'Happier',
            singer: 'Olivia Rodrigo',
            img: './assets/img/olivia.jpg',
            path: './assets/music/Happier-OliviaRodrigo-7022374.mp3',
            ins: 'https://www.instagram.com/oliviarodrigo/',
            lyric: `
            We broke up a month ago
            Your friends are mine, you know, I know
            You've moved on, found someone new
            One more girl who brings out the better in you
            And I thought my heart was detached
            From all the sunlight of our past
            But she's so sweet, she's so pretty
            Does she mean you forgot about me?
            Oh, I hope you're happy
            But not like how you were with me
            I'm selfish, I know, I can't let you go
            So find someone great, but don't find no one better
            I hope you're happy, but don't be happier
            And do you tell her she's the most beautiful girl you've ever seen?
            An eternal love bullshit you know you'll never mean
            Remember when I believed you meant it when you said it first to me?
            And now I'm pickin' her apart
            Like cuttin' her down will make you miss my wretched heart
            But she's beautiful, she looks kind
            She probably gives you butterflies
            I hope you're happy
            But not like how you were with me
            I'm selfish, I know, I can't let you go
            So find someone great but don't find no one better
            I hope you're happy
            I wish you all the best, really
            Say you love her, baby, just not like you loved me
            And think of me fondly when your hands are on her
            I hope you're happy, but don't be happier
            Ooh, ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh
            Ooh-ooh-ooh-ooh, ooh-ooh-ooh
            I hope you're happy
            Just not like how you were with me
            I'm selfish, I know, can't let you go
            So find someone great, but don't find no one better
            I hope you're happy, but don't be happier
            `
        },
        {
            songName: 'Red',
            singer: 'Taylor Swift',
            img: './assets/img/taylorswift.jpg',
            path: './assets/music/Red - Taylor Swift.mp3',
            ins: 'https://www.instagram.com/taylorswift/',
            lyric:`
                Loving him is like driving a new Maserati down a dead-end street
                Faster than the wind, passionate as sin, ending so suddenly
                Loving him is like trying to change your mind once you're already flying through the free fall
                Like the colors in autumn, so bright just before they lose it all

                Losing him was blue like I'd never known
                Missing him was dark grey all alone
                Forgetting him was like trying to know somebody you never met
                But loving him was red

                (Red, red)
                (Red, red)
                Loving him was red
                (Red, red)
                (Red, red)

                Touching him was like realizing all you ever wanted was right there in front of you
                Memorizing him was as easy as knowing all the words to your old favorite song
                Fighting with him was like trying to solve a crossword and realizing there's no right answer
                Regretting him was like wishing you never found out that love could be that strong

                Losing him was blue like I'd never known
                Missing him was dark grey all alone (whoa)
                Forgetting him was like trying to know somebody you never met
                But loving him was red
                (Red, red)
                Oh, red
                (Red, red)
                Burning red
                (Red, red)
                (Red, red)

                Remembering him comes in flashbacks and echoes
                Tell myself it's time now, gotta let go
                But moving on from him is impossible
                When I still see it all in my head
                In burning red
                Burning, it was red

                Oh, losing him was blue like I'd never known
                Missing him was dark grey all alone (whoa)
                Forgetting him was like trying to know somebody you never met
                'Cause loving him was red
                (Red, red)
                Yeah, yeah, red
                (Red, red)
                We're burning red
                (Red, red)
                (Red, red)

                And that's why he's spinnin' 'round in my head
                (Red, red)
                Comes back to me, burning red
                (Red, red)
                (Red, red)
                Yeah, yeah
                (Red, red)

                His love was like driving a new Maserati down a dead-end street
             `
        },
        {
            songName: 'Easy On Me',
            singer: 'Adele',
            img:'./assets/img/adele-mv-easy-on-me-1634256817.jpg',
            path:'./assets/music/Easy On Me - Adele.mp3',
            ins:'https://www.instagram.com/adele/',
            lyric:''
        },
        {
            songName: 'My Little Love',
            singer: 'Adele',
            img:'./assets/img/adele-30-900x599.jpg',
            path:'./assets/music/Adele_My_Little_Love_(thinkNews.com.ng).mp3',
            ins:'https://www.instagram.com/adele/',
            lyric:`
                There ain't no gold in this river
                That I've been washin' my hands in forever
                I know there is hope in these waters
                But I can't bring myself to swim
                When I am drowning in this silence
                Baby, let me in
                Go easy on me, baby
                I was still a child
                Didn't get the chance to
                Feel the world around me
                I had no time to choose
                What I chose to do
                So go easy on me
                There ain't no room for things to change
                When we are both so deeply stuck in our ways
                You can't deny how hard I have tried
                I changed who I was to put you both first
                But now I give up
                Go easy on me, baby
                I was still a child
                Didn't get the chance to
                Feel the world around me
                Had no time to choose
                What I chose to do
                So go easy on me
                I had good intentions
                And the highest hopes
                But I know right now
                That probably doesn't even show
                Go easy on me, baby
                I was still a child
                I didn't get the chance to
                Feel the world around me
                I had no time to choose
                What I chose to do
                So go easy on me
            `
        },
        {
            songName: 'Someone Like You',
            singer: 'Adele',
            img:'./assets/img/adele.jpg',
            path:'./assets/music/Adele_Someone_Like_You_(thinkNews.com.ng).mp3',
            ins:'https://www.instagram.com/adele/',
            lyric:`
            I heard that you're settled down
            That you found a girl and you're married now
            I heard that your dreams came true
            Guess she gave you things, I didn't give to you
            Old friend, why are you so shy?
            Ain't like you to hold back or hide from the light
            I hate to turn up out of the blue, uninvited
            But I couldn't stay away, I couldn't fight it
            I had hoped you'd see my face
            And that you'd be reminded that for me, it isn't over
            Never mind, I'll find someone like you
            I wish nothing but the best for you, too
            "Don't forget me, " I beg
            I remember you said
            "Sometimes it lasts in love, but sometimes it hurts instead"
            "Sometimes it lasts in love, but sometimes it hurts instead"
            You know how the time flies
            Only yesterday was the time of our lives
            We were born and raised in a summer haze
            Bound by the surprise of our glory days
            I hate to turn up out of the blue, uninvited
            But I couldn't stay away, I couldn't fight it
            I had hoped you'd see my face
            And that you'd be reminded that for me, it isn't over
            Never mind, I'll find someone like you
            I wish nothing but the best for you, too
            "Don't forget me, " I begged
            I remember you said
            "Sometimes it lasts in love, but sometimes it hurts instead"
            Nothing compares, no worries or cares
            Regrets and mistakes, they're memories made
            Who would have known how bittersweet this would taste?
            Never mind, I'll find someone like you
            I wish nothing but the best for you
            "Don't forget me, " I beg
            I remember you said
            "Sometimes it lasts in love, but sometimes it hurts instead"
            Never mind, I'll find someone like you
            I wish nothing but the best for you, too
            "Don't forget me, " I begged
            I remember you said
            "Sometimes it lasts in love, but sometimes it hurts instead"
            "Sometimes it lasts in love, but sometimes it hurts instead"
            `
        },
        {
            songName: 'To Be Loved',
            singer: 'Adele',
            img:'./assets/img/adele-mv-easy-on-me-1634256817.jpg',
            path:'./assets/music/Adele_To_Be_Loved_(thinkNews.com.ng).mp3',
            ins:'https://www.instagram.com/adele/',
            lyric:`
            I built a house for love to grow
I was so young that it was hard to know
I'm as lost now as I was back then
Always make a mess of everything
It's about time that I face myself
All I do is bleed into someone else
Painting walls with all my secret tears
Filling rooms with all my hopes and fears
But oh my, oh my
I'll never learn if I never leap
I'll always yearn if I never speak
To be loved and love at the highest count
Means to lose all the things I can't live without
Let it be known that I will choose to lose
It's a sacrifice but I can't live a lie
Let it be known, let it be known that I tried
I'm so afraid but I'm open wide
I'll be the one to catch myself this time
Trying to learn to lean in to it all
Ain't it funny how the mighty fall?
Looking back I don't regret a thing
Yeah, I took some bad turns that I am owning
I'll stand still and let the storm pass by
Keep my heart safe 'til the time feels right
But oh my, oh my
I'll never learn if I never leap
I'll always yearn if I never speak
To be loved and love at the highest count
Means to lose all the things I can't live without
Let it be known that I will choose to lose
It's a sacrifice but I can't live a lie
Let it be known
Let it be known that I cried for you
Even started lying to you
What a thing to do
All because I wanted
To be loved and love at the highest count
Means to lose all the things I can't live without
Let it be known, known, known
That I will choose, I will lose
It's a sacrifice but I can't live a lie
Let it be known
Let it be known that I tried, that I tried
Let it be known that I tried
            `
        },
        {
            songName: 'All Too Well',
            singer: 'Taylor Swift',
            img:'./assets/img/taylorswift.jpg',
            path:'./assets/music/all-too-well-taylor.mp3',
            ins:'https://www.instagram.com/taylorswift/',
            lyric:`
            I walked through the door with you
The air was cold
But something about it felt like home somehow
And I, left my scarf there at your sister's house
And you've still got it in your drawer even now
Oh, your sweet disposition
And my wide-eyed gaze
We're singing in the car, getting lost upstate
Autumn leaves falling down like pieces into place
And I can picture it after all these days
And I know it's long gone and that magic's not here no more
And I might be okay but I'm not fine at all
'Cause there we are again on that little town street
You almost ran the red 'cause you were lookin' over at me
Wind in my hair, I was there
I remember it all too well
Photo album on the counter
Your cheeks were turning red
You used to be a little kid with glasses in a twin-sized bed
And your mother's telling stories 'bout you on the tee-ball team
You told me 'bout your past thinking your future was me
And I know it's long gone and there was nothing else I could do
And I forget about you long enough to forget why I needed to
'Cause there we are again in the middle of the night
We're dancing 'round the kitchen in the refrigerator light
Down the stairs, I was there
I remember it all too well, yeah
And maybe we got lost in translation
Maybe I asked for too much
But maybe this thing was a masterpiece 'til you tore it all up
Running scared, I was there
I remember it all too well
And you call me up again just to break me like a promise
So casually cruel in the name of being honest
I'm a crumpled up piece of paper lying here
'Cause I remember it all, all, all
Too well
Time won't fly, it's like I'm paralyzed by it
I'd like to be my old self again
But I'm still trying to find it
After plaid shirt days and nights when you made me your own
Now you mail back my things and I walk home alone
But you keep my old scarf from that very first week
'Cause it reminds you of innocence
And it smells like me
You can't get rid of it
'Cause you remember it all too well, yeah
'Cause there we are again when I loved you so
Back before you lost the one real thing you've ever known
It was rare, I was there, I remember it all too well
Wind in my hair, you were there, you remember it all
Down the stairs, you were there, you remember it all
It was rare, I was there, I remember it all too well
            `
        },
        {
            songName: 'Attention',
            singer: 'Charlie Puth',
            img:'./assets/img/charlie_puth111.jpg',
            path:'./assets/music/Attention-CharliePuth-6429177.mp3',
            ins:'https://www.instagram.com/charlieputh/',
            lyric:`
            Oh-oh, ooh
You've been runnin' round, runnin' round, runnin' round throwin' that dirt all on my name
'Cause you knew that I, knew that I, knew that I'd call you up
You've been going round, going round, going round every party in L.A.
'Cause you knew that I, knew that I, knew that I'd be at one, oh
I know that dress is karma, perfume regret
You got me thinking 'bout when you were mine, oh
And now I'm all up on ya, what you expect?
But you're not coming home with me tonight
You just want attention, you don't want my heart
Maybe you just hate the thought of me with someone new
Yeah, you just want attention, I knew from the start
You're just making sure I'm never gettin' over you
you've been runnin' round, runnin' round, runnin' round throwing that dirt all on my name
'Cause you knew that I, knew that I, knew that I'd call you up
Baby, now that we're, now that we're, now that we're right here standing face-to-face
You already know, already know, already know that you won, oh
I know that dress is karma (dress is karma), perfume regret
You got me thinking 'bout when you were mine (you got me thinking 'bout when you were mine)
And now I'm all up on ya (all up on ya), what you expect? (oh baby)
But you're not coming home with me tonight (oh no)
You just want attention, you don't want my heart
Maybe you just hate the thought of me with someone new
Yeah, you just want attention, I knew from the start
You're just making sure I'm never gettin' over you, oh
What are you doin' to me, what are you doin', huh?
(What are you doin'?)
What are you doin' to me, what are you doin', huh?
(What are you doin'?)
What are you doin' to me, what are you doin', huh?
(What are you doin'?)
What are you doin' to me, what are you doin', huh?
I know that dress is karma, perfume regret
You got me thinking 'bout when you were mine
And now I'm all up on ya, what you expect?
But you're not coming home with me tonight
You just want attention, you don't want my heart
Maybe you just hate the thought of me with someone new
Yeah, you just want attention, I knew from the start
You're just making sure I'm never gettin' over you (over you)
What are you doin' to me? (hey) what are you doin', huh? (what are you doin', what?)
(What are you doin', to me? What are you doin', huh?)
(What are you doin', to me? What are you doin', huh?)
(What are you doin' to me, what are you doin', huh?)
            `
        },
        {
            songName: 'Cheating On You',
            singer: 'Charlie Puth',
            img:'./assets/img/charlie_puth111.jpg',
            path:'./assets/music/CheatingOnYou-CharliePuth-6102890.mp3',
            ins:'https://www.instagram.com/charlieputh/',
            lyric:`
            It started with a kiss on your mama's couch
2012 was nothing serious
I know we caught the feels, it got really real
Too good to be true, I guess I thought you was, yeah
Why did I run away, run away, run away?
Oh, your love was everything, everything, everything
I know it's gettin' late, gettin' late, gettin' late
But can I still be on my way, on my way? Yeah
I know I said goodbye and baby, you said it too
But when I touch her I feel like I'm cheating on you
I thought that I'd be better when I found someone new
But when I touch her I feel like I'm cheating on you
Baby now, oh-oh-oh
Oh, oh, oh, oh
Cheating on you
Baby now, oh-oh-oh
But when I touch her I feel like I'm cheating on you
Thought I could get you back any time of day
Shouldn't have been so cocky
Shouldn't have did you wrong (woah, oh)
And now I miss you bad, really, really bad
Guess you don't know what you got until it's gone
Why did I run away, run away, run away? (Run away)
Oh, your love was everything, everything, everything (everything)
I know it's getting late, getting late, getting late (getting late)
But can I still be on my way, on my way? Yeah
I know I said goodbye and baby, you said it too (you said it too, baby)
But when I touch her I feel like I'm cheating on you (I'm cheating on you)
I thought that I'd be better when I found someone new (ooh)
But when I touch her I feel like I'm cheating on you
Baby now, oh-oh-oh
Oh, oh, oh, oh
Cheating on you
Baby now, oh-oh-oh
But when I touch her I feel like I'm cheating on you
Baby, no
There ain't no lips like your lips
And nobody else feels like this
There's no moving on, I'll admit
If you go away
Yeah, ah
I know I said goodbye and baby, you said it too
But when I touch her I feel like I'm cheating on you (I'm cheating on you)
I thought that I'd be better when I found someone new (found someone new)
But when I touch her I feel like I'm cheating on you (believe it, baby)
Baby now, oh-oh-oh
Oh, oh, oh, oh
Cheating on you
Baby now, oh-oh-oh
But when I touch her I feel like I'm cheating on you
You said goodbye
And you said goodbye
            `
        },
        {
            songName: 'Comethru',
            singer: 'Jeremy Zucker',
            img:'./assets/img/jeremy.jpeg',
            path:'./assets/music/Comethru-JeremyZuckerBeaMiller-5923881.mp3',
            ins:'a',
            lyric:`
            I might lose my mind
Waking when the sun's down
Riding all these highs
Waiting for the comedown
Walk these streets with me
I'm doing decently
Just glad that I can breathe, yeah
I'm trying to realize
It's alright to not be fine on your own
Now I'm shaking, drinking all this coffee
These last few weeks have been exhausting
I'm lost in my imagination
And there's one thing that I need from you
Can you come through, through?
Through, yeah
And there's one thing that I need from you
Can you come through?
Ain't got much to do
Too old for my hometown
Went to bed at noon
Couldn't put my phone down
Scrolling patiently
It's all the same to me
Just faces on a screen, yeah
I'm trying to realize
It's alright to not be fine on your own
Now I'm shaking, drinking all this coffee
These last few weeks have been exhausting
I'm lost in my imagination
And there's one thing that I need from you
Can you come through, through?
Through, yeah
And there's one thing that I need from you
Can you come
Through, through
Through, yeah
And there's one thing that I need from you
Can you come through?
            `
        },
        {
            songName: 'Happier',
            singer: 'Ed Sheeran',
            img:'./assets/img/ed.jpg',
            path:'./assets/music/happier-ed.mp3',
            ins:'a',
            lyric:`
            Walking down 29th and Park
            I saw you in another's arms
            Only a month we've been apart
            You look happier
            Saw you walk inside a bar
            He said somethin' to make you laugh
            I saw that both your smiles were twice as wide as ours
            Yeah, you look happier, you do
            Ain't nobody hurt you like I hurt you
            But ain't nobody love you like I do
            Promise that I will not take it personal, baby
            If you're movin' on with someone new
            'Cause baby you look happier, you do
            My friends told me one day I'll feel it too
            And until then I'll smile to hide the truth
            But I know I was happier with you
            Sat in the corner of the room
            Everything's reminding me of you
            Nursing an empty bottle
            And telling myself you're happier, aren't you?
            (Hey, yeah, hey, yeah, hey, yeah)
            Oh, ain't nobody hurt you like I hurt you (hey, yeah, hey, yeah)
            But ain't nobody need you like I do (hey, yeah, hey, yeah)
            I know that there's others that deserve you (hey, yeah, hey, yeah)
            But my darlin', I am still in love with you
            But I guess you look happier, you do
            My friends told me one day I'll feel it too
            I could try to smile to hide the truth
            But I know I was happier with you
            Hey, yeah, hey, yeah, hey, yeah
            Hey, yeah, hey, yeah, hey, yeah
            Hey, yeah, hey, yeah, hey, yeah
            Hey, yeah, hey, yeah, hey, yeah
            'Cause baby, you look happier, you do
            I knew one day you'd fall for someone new
            But if he breaks your heart like lovers do
            Just know that I'll be waitin' here for you
            `
        },
        {
            songName: 'Lover',
            singer: 'Taylor Swift',
            img:'./assets/img/taylorswift.jpg',
            path:'./assets/music/lover-taylor.mp3',
            ins:'https://www.instagram.com/taylorswift/',
            lyric:`
            We could leave the Christmas lights up 'til January
            And this is our place, we make the rules
            And there's a dazzling haze, a mysterious way about you dear
            Have I known you 20 seconds or 20 years?
            Can I go where you go?
            Can we always be this close forever and ever?
            And ah, take me out, and take me home
            You're my, my, my, my
            Lover
            We could let our friends crash in the living room
            This is our place, we make the call
            And I'm highly suspicious that everyone who sees you wants you
            I've loved you three summers now, honey, but I want 'em all
            Can I go where you go?
            Can we always be this close forever and ever?
            And ah, take me out, and take me home (forever and ever)
            You're my, my, my, my
            Lover
            Ladies and gentlemen, will you please stand?
            With every guitar string scar on my hand
            I take this magnetic force of a man to be my lover
            My heart's been borrowed and yours has been blue
            All's well that ends well to end up with you
            Swear to be overdramatic and true to my lover
            And you'll save all your dirtiest jokes for me
            And at every table, I'll save you a seat, lover
            Can I go where you go?
            Can we always be this close forever and ever?
            And ah, take me out, and take me home (forever and ever)
            You're my, my, my, my
            Oh, you're my, my, my, my
            Darling, you're my, my, my, my
            Lover
            `
        },
        {
            songName: 'Older',
            singer: 'SaSha Sloan',
            img:'./assets/img/sasha.jpg',
            path:'./assets/music/Older-SashaSloan-5770496.mp3',
            ins:'a',
            lyric:`
            I used to shut my door while my mother screamed in the kitchen
            I'd turn the music up, get high and try not to listen
            To every little fight, 'cause neither one was right
            I swore I'd never be like them
            But I was just a kid back then
            The older I get the more that I see
            My parents aren't heroes, they're just like me
            And loving is hard, it don't always work
            You just try your best not to get hurt
            I used to be mad but now I know
            Sometimes it's better to let someone go
            It just hadn't hit me yet
            The older I get
            I used to wonder why, why they could never be happy
            I used to close my eyes and pray for a whole 'nother family
            Where everything was fine, one that felt like mine
            I swore I'd never be like them
            But I was just a kid back then
            The older I get the more that I see
            My parents aren't heroes, they're just like me
            And loving is hard, it don't always work
            You just try your best not to get hurt
            I used to be mad but now I know
            Sometimes it's better to let someone go
            It just hadn't hit me yet
            The older I get
            The older I get the more that I see
            My parents aren't heroes, they're just like me
            And loving is hard, it don't always work
            You just try your best not to get hurt
            I used to be mad but now I know
            Sometimes it's better to let someone go
            It just hadn't hit me yet
            The older I get           

            `
        },
        {
            songName: 'One Call Away',
            singer: 'Charlie Puth',
            img:'./assets/img/charlie_puth111.jpg',
            path:'./assets/music/OneCallAway-CharliePuth-6426097.mp3',
            ins:'https://www.instagram.com/charlieputh/',
            lyric:`
            I'm only one call away
I'll be there to save the day
Superman got nothing on me
I'm only one call away
Call me, baby, if you need a friend
I just wanna give you love
C'mon, c'mon, c'mon
Reaching out to you, so take a chance
No matter where you go, know you're not alone
I'm only one call away
I'll be there to save the day
Superman got nothing on me
I'm only one call away
Come along with me and don't be scared
I just wanna set you free
C'mon, c'mon, c'mon
You and me can make it up, anyway
For now, we can stay here for a while
Cause you know, I just wanna see your smile
No matter where you go, know you're not alone
I'm only one call away
I'll be there to save the day
Superman got nothing on me
I'm only one call away
When you're weak I'll be strong
I'm gonna keep holding on
Now don't you worry, it won't be long
Darling, if you feel like hope is gone
Just run into my arms
I'm only one call away
I'll be there to save the day
Superman got nothing on me
I'm only one, I'm only one call away
I'm only one call away
I'll be there to save the day
Superman got nothing on me
I'm only one call away
I'm only one call away

            `
        },
        {
            songName: 'Reminder',
            singer: 'The Weeknd',
            img:'./assets/img/weeknd.jpg',
            path:'./assets/music/Reminder - The Weeknd.mp3',
            ins:'https://www.instagram.com/theweeknd/',
            lyric:`
            Record man play my song on the radio
You too busy tryna find that blue-eyed soul
I let my black hair grow and my weed smoke
And I swear too much on the regular
We gon' let them hits fly, we gon' let it go
If it ain't XO then it gotta go
I just won a new award for a kids show
Talkin' 'bout a face numbin' off a bag of blow
I'm like goddamn bitch, I am not a Teen Choice
Goddamn bitch, I am not a bleach boy
Whip game, make a nigga understand though
Got that Hannibal, Silence of the Lambo
Hit the gas so hard make it rotate
All my niggas blew up like a propane
All these R&B niggas be so lame
Got a sweet Asian chick, she go low mane (lo Mein)
You know me (know me), you know me (know me), you know me (know me)
Every time you try to forget who I am
I'll be right there to remind you again
You know me (know me, pow, pow), you know me (know me)
Said I'm just tryna swim in somethin' wetter than the ocean
Faded off a double cup, I'm mixin' up the potion
All I wanna do is make that money and make dope shit
It just seem like niggas tryna sound like all my old shit
Everybody knows it, all these niggas know me
Platinum off a mixtape, sippin' on that codeine
Pour it in my trophies, rollin' 'til my nose bleed
I'ma keep on singin' while I'm burnin' up that OG
All my niggas get it, they make money all alone
Rock a chain around they neck, makin' sure I'm gettin' home
When I travel 'round the globe, make a couple mil' a show
And I come back to my city, I fuck every girl I know
Used to walk around with a slouch, had a mattress on the floor
Now my shit straight
Eatin' all day, tryna lose weight
That good sex, we'll sweat it out
Hotel bedsprings we'll wear it out
I ain't gotta tell you 'cause
You know me, you know me (know me)
You know me (know me), you know me (know me)
Every time you try to forget who I am
I'll be right there to remind you again
You know me (know me, pow, pow), you know me (know me)
Why don't you shake somethin', shake somethin'
For the Don, don't you break nothin', break nothin'
Baby girl, won't you work somethin', work somethin'
For the Don, don't you hurt nothin', hurt nothin'
Baby girl, won't you shake somethin', shake somethin'
For the Don, don't you break nothin', break nothin'
Baby girl, won't you work somethin', work somethin'
For the Don, don't you hurt nothin', hurt nothin'
'Cause you know me, they know me
You are a no-man, yeah, you know man
Oh, oh, oh, na, na, na, na, na
Oh, oh, oh, na, na, na, na, na
Oh, oh, oh, na, na, na, na, na
Oh, oh, oh, na, na, na, na, na
            `
        },
        {
            songName: 'River',
            singer: 'Charlie Puth',
            img:'./assets/img/charlie_puth.jpg',
            path:'./assets/music/River-CharliePuth-6451227.mp3',
            ins:'https://www.instagram.com/charlieputh/',
            lyric:`
            Like a river, like a river, sh-
Like a river, like a river, sh-
Like a river, like a river
Shut your mouth and run me like a river
How do you fall in love?
Harder than a bullet could hit you
How do we fall apart?
Faster than a hairpin trigger
Don't you say, don't you say it
Don't say, don't you say it
One breath, it'll just break it
So shut your mouth and run me like a river
Shut your mouth, baby, stand and deliver
Holy hands, will they make me a sinner?
Like a river, like a river
Shut your mouth and run me like a river
Choke this love 'til the veins start to shiver
One last breath 'til the tears start to wither
Like a river, like a river
Shut your mouth and run me like a river
Tales of an endless heart
Cursed is the fool who's willing
Can't change the way we are
One kiss away from killing
Don't you say, don't you say it
Don't say, don't you say it
One breath, it'll just break it
So shut your mouth and run me like a river
Shut your mouth, baby, stand and deliver
Holy hands, will they make me a sinner?
Like a river, like a river
Shut your mouth and run me like a river
Choke this love 'til the veins start to shiver
One last breath 'til the tears start to wither
Like a river, like a river
Shut your mouth and run me like a river
Like a river, like a river, sh-
Like a river, like a river, sh-
Like a river, like a river
Shut your mouth and run me like a river
Hey! Oh, oh-oh-oh, oh!
Hey! Oh, oh-oh-oh, oh! (like a river)
Hey! Oh, oh-oh-oh, oh, oh!
Oh, oh, oh, oh, oh! (like a river)
Like a river
Shut your mouth, baby, stand and deliver (like a river, like a river)
Holy hands, will they make me a sinner? (like a river, like a river)
Like a river, like a river
Shut your mouth and run me like a river
Choke this love 'til the veins start to shiver (like a river, like a river)
One last breath 'til the tears start to wither (like a river, like a river)
Like a river, like a river
Shut your mouth and run me like a river
            `
        },
        {
            songName: 'Somebody Loves You',
            singer: 'Jeremy Zucker',
            img:'./assets/img/jeremy.jpeg',
            path:'./assets/music/SomebodyLovesYou-JeremyZucker-6541006.mp3',
            ins:'a',
            lyric:`
            Spent four hours in the city
Just to see if you would miss me
Nowhere feels the same as Brooklyn
Dancing like nobody's lookin'
But oh, what a dream
If we could be subtle lovers
In the suburbs
And all I could see
Are my philosophies
Going under, 'cause
Somebody loves you
Somebody loves you
I'm trying not to
But somebody loves you
Taking pics you're never sending
This hole I'm in is never-ending
It's lonely here without your laughter
And I'm afraid of what comes after
But oh, what a dream
If we could be subtle lovers
In the suburbs
And all I could see
Are my philosophies
Going under, 'cause
Somebody loves you
Somebody loves you
I'm trying not to
But somebody loves you
Somebody loves you (loves you)
Somebody loves you (loves you)
And I'm trying not to, oh (loves you)
But somebody loves you (loves you)
I got too much energy
To be stable mentally
I've realized since therapy
That I'm my greatest enemy
Whatever's decided in the end
I'll be your fondest summer friend
Fuck if I'm far from falling off
I'm not alone and I'm not lost (yeah)
Still I know (still I know)
I get so caught up
So I'm sorry, are you lonely?
Are you tired? Are you frightened?
Oh well, it's alright
'Cause somebody loves you (loves you)
Somebody loves you (loves you)
And I'm trying not to, oh (loves you)
But somebody loves you (loves you)
            `
        },
        {
            songName: "Don't Break My Heart",
            singer: 'The Weeknd',
            img:'./assets/img/weeknd.jpg',
            path:'./assets/music/The_Weeknd_Don_t_Break_My_Heart_(thinkNews.com.ng).mp3',
            ins:'https://www.instagram.com/theweeknd/',
            lyric:`
            I see you drowning in the purple lights
Diamonds shining bright
I see every ice on you (on you)
You snatch my soul, I'm crucified
I feel paralyzed
I'm so mesmerized by you (by you)
But I know you're right for me, ecstasy
I keep coming back for more
I think that you would die for me, destiny
And this time, I know for sure
Just don't break my heart (don't break my heart)
Don't let me down, please
Don't you break my heart (don't break my heart)
I don't know if I can take it anymore
Take it anymore, take it anymore
I can't take another heartbreak or I'll end it all
And the girl I used to love, we broke up in the club
And I almost died in the discotheque (-theque)
Ooh, and now I know she wasn't right for me, enemy
I kept coming back for more
I'd rather you would die for me, destiny
And this time I know for sure
Just don't break my heart (don't break my heart)
Don't let me down, please
Don't you break my heart (don't break my heart)
I don't know if I can take it anymore
Don't break my heart (don't you, don't you)
I'm falling apart already
Don't you break my heart (don't you, don't you)
I don't know if I can take it anymore
I believe the liquor's talking
I just need the room to stop
And I could be the one you want
Just as long as you don't break my heart
But don't you worry
Just don't break my heart (don't break my heart)
Don't let me down, please
Don't you break my heart (don't break my heart)
I don't know if I can take it anymore
Don't break my heart (don't you, don't you)
I'm falling apart already
Don't you break my heart (don't you, don't you)
I don't know if I can take it anymore

            `
        },
        {
            songName: 'Every Angel Is Terrifying',
            singer: 'The Weeknd',
            img:'./assets/img/weeknd.jpg',
            path:'./assets/music/The_Weeknd_Every_Angel_Is_Terrifying_(thinkNews.com.ng).mp3',
            ins:'https://www.instagram.com/theweeknd/',
            lyric:`
            Ooh
Ooh, ooh
Ah, ah, woah
Who, if I cried out
Would hear me among the angels order?
Even if they pressed me against their heart, I'd be consumed
For beauty is the terror we endure
While we stand and wonder, we're annihilated
Every angel is terrifying
Intense, graphic, sexy, euphoric
Provocative, edgy, thought-provoking
Technically and visually stunning
A compelling work of sciencе fiction
A suspenseful exposé
Cinеma like you've never seen it before
The exotic, bizarre and beautiful world of "After Life"
And this is your invitation to enter
Critics say "After Life" makes your current life look like a total comatose snooze fest
It's action-packed, the future of everyone's fate
Nigel and Frank call it a- classic
Arthur Fleminger says, "I can't keep my eyes off the screen"
"After Life" can be yours for only $4.95 with a subscription
When you order the "Best of Your Current Life" collection series
You will enter a world beyond your imagination
A future out of control
And an experience you'll never forget
(Don't say we didn't warn you)
The wait is over
Call 1-800-414-4444
That's 1-800-444-4444 now to order "After Life"
For $4.95 plus (now)
To order ("After Life") plus $3.79 shipping and handling
Now, now, now, now, now, now, now, now, now
            `
        },
        {
            songName: "I Heard You're Married",
            singer: 'The Weeknd',
            img:'./assets/img/weeknd.jpg',
            path:'./assets/music/The_Weeknd_I_Heard_You_re_Married_(thinkNews.com.ng).mp3',
            ins:'https://www.instagram.com/theweeknd/',
            lyric:`
            Yeah
            Yeah, yeah (ah)
            Oh, oh yeah
            Mm, mm
            The way you hypnotized me, I could tell (uh)
            You've been in control
            You manifested this, but girl, I blame myself
            Things I shoulda known
            The whispers that I hear
            Are blowing through my ears
            These words I need to hear from you
            And I know this is a fling
            But you're hiding someone's ring
            It hurts to think I'm sharing you
            Ooh, I heard you're married, girl
            And I knew that this was too good to be true
            Ooh, I heard you're married, girl, oh, oh, oh
            If you don't love him (oh no)
            Then do yourself a favor and just leave him
            Your number in my phone, I'm gon' delete it
            Girl, I'm way too grown for that deceiving
            'Cause I don't play, I don't play
            Now I'm sure you have your issues and your reasons (reasons)
            But why you even with him if you're cheating? (Cheating)
            And I thought you were someone that I could be with (yeah)
            And it kills me that I'm sharing you
            Oh, I heard you're married, girl
            I knew that this was too good to be true
            Ooh, I heard you're married, girl, oh, oh, oh
            And I hate it
            Ooh, I heard you're married, girl (married, girl)
            The way you had me wrapped around your fingertip
            Ooh, I heard you're married, girl, oh, oh, oh
            I can't be with you
            No, I can't be with you
            You're too deceiving, girl, oh (ooh)
            I can't be with you (yeah)
            No, I can't be with you
            You're too deceiving, girl, oh (yeah)
            Uh, can't be your side bitch
            That shit ain't fly, bitch
            Can't be your pilot
            Can't be your private
            Make me your obvious
            If I ain't your husband, I can't be your hybrid
            I heard you're married
            I bet he treats you like Virgin Mary
            You like it dirty and I'm Dirty Harry
            I thought we were some love birds, canaries
            Word to Larry
            But I can't fuck with you
            You put my love on the line and hang up on you
            That's a long kiss goodbye, I gotta tongue kiss you
            And when doves cry, we ain't got enough tissue
            I'm still in love with you
            Where the love at?
            You walk down the aisle, I can make you run back
            Like fuck that, where the love at?
            Tell hubby I'll kill him, no hub cap
            Whoa, whoa (whoa, whoa)
            Oh, I heard you're married, girl (married, girl)
            I knew that this was too good to be true
            Oh, I heard you're married, girl, oh, oh, oh (whoa, whoa)
            And I hate it (I hate it)
            Ooh, I heard you're married, girl (married, girl)
            The way you had me wrapped around your fingertip (your fingertip)
            Oh, I heard you're married, girl (I heard you're married)
            Oh, oh, oh (and, baby, I hate it)
            I can't be with you
            No, I can't be with you
            You're too deceiving, girl, oh (ooh, yeah)
            I can't be with you
            No, I can't be with you
            You're too deceiving, girl (ooh, ooh, woo)
            I can't be with you (oh yeah)
            No, I can't be with you
            You're too deceiving, girl, oh (talk to me, say)
            I can't be with you
            No, I can't be with you
            You're too deceiving, girl (oh)
            
            `
        },
        {
            songName: 'Is There Someone Else',
            singer: 'The Weeknd',
            img:'./assets/img/weeknd.jpg',
            path:'./assets/music/The_Weeknd_Is_There_Someone_Else__(thinkNews.com.ng).mp3',
            ins:'https://www.instagram.com/theweeknd/',
            lyric:`
            I know that you're hiding something from me
That's been close to your heart
And I felt it creeping up every day
Baby, right from the start
I know that look you give when we're fighting (fighting)
We're fighting (fighting)
'Cause I used to be the one who was lying (lying)
Oh, lying (lying)
Oh (oh), is there someone else or not?
'Cause I wanna keep you close
I don't wanna lose my spot
'Cause I need to know
If you're hurting him, or you're hurting me
If I ain't with you, I don't wanna be
Is there someone else or not?
Ooh, or not
I don't deserve someone loyal to me
Don't you think I see?
And I don't want to be a prisoner to who I used to be
I swear I changed my ways for the better, the better
'Cause I wanna be with you forever, forever
Oh, is there someone else or not?
'Cause I wanna keep you close
I don't wanna lose my spot
'Cause I need to know
If you're hurting him, or you're hurting me
If I ain't with you, I don't wanna be
Is there someone else or not?
Ooh, or not
Ooh, whoa, yeah, hey
Yeah, yeah, yeah
Whoa, whoa, whoa, hey
            `
        },
        {
            songName: 'Out Of Time',
            singer: 'The Weeknd',
            img:'./assets/img/weeknd.jpg',
            path:'./assets/music/The_Weeknd_Out_of_Time_(thinkNews.com.ng).mp3',
            ins:'https://www.instagram.com/theweeknd/',
            lyric:`
            Yeah, yeah
The last few months, I've been working on me, baby
There's so much trauma in my life
I've been so cold to the ones who loved me, baby
I look back now and I realize
And I remember when I held you
You begged me with your drowning eyes to stay
And I regret I didn't tell you
Now I can't keep you from loving him, you made up your mind
Say I love you, girl, but I'm out of time
Say I'm there for you, but I'm out of time
Say that I'll care for you, but I'm out of time
Said, I'm too late to make you mine, out of time (ah)
If he mess' up just a little, baby, you know my line
If you don't trust him a little, then come right back, girl, come right back
Give me one chance, just a little, baby, I'll treat you right
And I'll love you like I should've loved you all the time
And I remember when I held you (held you, baby)
You begged me with your drowning eyes to stay (never again, baby)
And I regret I didn't tell you
Now I can't keep you from loving him, you made up your mind (uh)
Say I love you, girl, but I'm out of time
Say I'm there for you, but I'm out of time (no)
Say that I'll care for you, but I'm out of time (hey)
Said, I'm too late to make you mine, out of time (ah)
Ooh-ooh-ooh, singing (out of time)
Said, I had you to myself, but I'm (out of time)
Say that I'll care for you, but I'm out of time
But I'm too late to make you mine, out of time (uh)
Out of time, out of time
Don't you dare touch that dial
Because like the song says, you are out of time
You're almost there, but don't panic
There's still more music to come before you're completely engulfed in the blissful embrace of that little light you see in the distance
Soon you'll be healed, forgiven, and refreshed, free from all trauma, pain, guilt, and shame
You may even forget your own name, but before you dwell in that house forever
Here's 30 minutes of easy listening to some slow tracks, on 103.5 Dawn FM

            `
        },
        {
            songName: 'We Are Never Ever Getting Back Together',
            singer: 'Taylor Swift',
            img:'./assets/img/2.jpg',
            path:'./assets/music/we-r-never-taylor.mp3',
            ins:'https://www.instagram.com/taylorswift/',
            lyric:`
            I remember when we broke up, the first time
Saying, "this is it, I've had enough"
'Cause like, we hadn't seen each other in a month
When you said you needed space (what?)
Then you come around again and say
"Baby, I miss you and I swear I'm gonna change, trust me"
Remember how that lasted for a day?
I say, "I hate you, " we break up, you call me, "I love you"
Ooh, ooh, ooh
We called it off again last night
But ooh, ooh, ooh
This time, I'm telling you, I'm telling you
We are never ever, ever getting back together
We are never ever, ever getting back together
You go talk to your friends, talk to my friends, talk to me
But we are never ever, ever, ever getting back together
Like, ever
I'm really gonna miss you picking fights
And me falling for it, screaming that I'm right
And you would hide away and find your peace of mind
With some indie record that's much cooler than mine
Ooh, ooh, ooh
You called me up again tonight
But ooh, ooh, ooh
This time, I'm telling you, I'm telling you
We are never ever, ever getting back together
We are never ever, ever getting back together
You go talk to your friends
Talk to my friends, talk to me (talk to me)
But we are never ever, ever, ever getting back together
Ooh, ooh, ooh, yeah
Ooh, ooh, ooh, yeah
Ooh, ooh, ooh, yeah
Oh
I used to think that we were forever ever, ever
And I used to say, "never say never"
Ah, so he calls me up and he's like, "I still love you"
And I'm like, I'm just, I mean this is exhausting, you know?
Like we are never getting back together, like, ever
we are never ever, ever getting back together
We are never ever, ever getting back together
You go talk to your friends, talk to my friends, talk to me
But we are never, ever, ever, ever getting back together
(We) ooh, ooh, ooh
Ooh, ooh, ooh (getting back together)
(We) ooh, ooh, ooh
Oh (getting back together)
You go talk to your friends
Talk to my friends, talk to me (talk to me)
But we are never ever, ever, ever getting back together
            `
        },
        {
            songName: "We're Fucked But It's Fine",
            singer: 'Jeremy Zucker',
            img:'./assets/img/jeremy.jpeg',
            path:'./assets/music/WeReFuckedItSFine-JeremyZucker-6541005.mp3',
            ins:'a',
            lyric:`
            There's nothing like
            Coming home and being in love
            Life would be quite boring without you
            Life would be quite boring without you
            The weather's nice
            Hold me tight, I'm coming undone
            Life would be so boring without you
            I thought about it all last night
            you are
            All these plastic hearts
            So, tell me I'm fucked
            Or tell me I'm fine
            Am I shit outta luck?
            Keep wastin' my time?
            `
        },
        {
            songName: 'Wildest Dream',
            singer: 'Taylor Swift',
            img:'./assets/img/2.jpg',
            path:'./assets/music/wildest-dream-taylor.mp3',
            ins:'https://www.instagram.com/taylorswift/',
            lyric:`
            He said, "Let's get out of this town
Drive out of the city, away from the crowds"
I thought heaven can't help me now
Nothing lasts forever, but this is gonna take me down
He's so tall and handsome as hell
He's so bad but he does it so well
I can see the end as it begins
My one condition is
Say you'll remember me standing in a nice dress
Staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just in your wildest dreams, ah-ha
Wildest dreams, ah-ha
I said, "No one has to know what we do"
His hands are in my hair, his clothes are in my room
And his voice is a familiar sound
Nothing lasts forever but this is getting good now
He's so tall and handsome as hell
He's so bad but he does it so well
And when we've had our very last kiss
My last request it is
Say you'll remember me standing in a nice dress
Staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just in your wildest dreams, ah-ha
Wildest dreams, ah-ha
You'll see me in hindsight
Tangled up with you all night
Burnin' it down
Someday when you leave me
I bet these memories
Follow you around
You'll see me in hindsight
Tangled up with you all night
Burnin' it down
Someday when you leave me
I bet these memories
Follow you around
Say you'll remember me standing in a nice dress
Staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just pretend
Say you'll remember me standing in a nice dress
Staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just in your (Just pretend, just pretend)
Wildest dreams, ah-ha
In your wildest dreams, ah-ha
(Even if it's just in your)
In your wildest dreams, ah-ha
In your wildest dreams, ah-ha
            `
        },
    ],
    render: function(){
        const html = app.songs.map(function(song,index){
            return `
                <div class="song-block ${index===app.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="song-block-content">
                        <p class="song-number">${index + 1}</p>
                        <div class="song-detail">
                            <div class="song-img">
                                <img src="${song.img}" alt="">
                            </div>
                            <div class="song-desc">
                                <h4 class="song-topic">${song.songName}</h4>
                                <span class="song-singer">${song.singer}</span>
                            </div>
                            <div class="song-setting">
                                <i class="fa-solid fa-eye-slash close-icon"></i>
                                <i class="fa-solid fa-eye open-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })
        leftSongContainer.innerHTML = html.join('')
    },
    renderDiscover: function(){
                //RENDER POPULAR ARTIST IMG
                const artists = app.songs.map(function(artist,index){
                    return artist.singer
                })
                const listOfSinger = artists.filter(function(element,index,array){
                    return array.indexOf(element)=== index
                })
                listOfSinger.forEach(function(element){
                    console.log(element)
                })
                
                var output = []
                for(var i = 0;i<listOfSinger.length;i++){
                    const result = app.songs.find(function(singerElement){
                        return singerElement.singer === listOfSinger[i]
                    })
                    output.push(result)
                }


                const htmls = output.map(function(song,index){
                    return `
                         <img class="artist__block-img" data-singer="${song.singer}" src="${song.img}" alt="">
                    `
                })
                artistPopular.innerHTML = htmls.join('')
        
                
                //RENDER SONGS OF ARTIST 
        
                const htmlss = app.songs.map(function(song,index) {
                    return `
                        <div class="artist__songs-block" data-artist="${song.singer}" data-index="${index}">
                            <div class="artist__song-img">
                                <img src="${song.img}" alt="">
                            </div>
                            <div class="artist__song-name">
                                ${song.songName}
                            </div>
                        </div>
                    `
                })
                artistSong.innerHTML = htmlss.join('')
    },

    defineProperties: function(){
        Object.defineProperty(this,'currentSong', {
            get: function(){
                return app.songs[app.currentIndex]
            }
        })
    },

    //Thuc chat cua defineproperty currentSong
    //currentSong: function(){
        // return app.songs[app.currentIndex]
    // }

    loadCurrentsong: function(){

        controlSongName.innerText = app.currentSong.songName
        controlSongSinger.innerText=app.currentSong.singer
        controlImg.src = app.currentSong.img
        sliderHeading.innerText = app.currentSong.songName
        sliderDesc.innerText=app.currentSong.singer
        $('.wallpaper__follow-link').innerText = `Follow ${app.currentSong.singer} At Instagram`
        $('.wallpaper__follow-link').href='https://www.instagram.com/adele/'
        themeCustom.style.background = `linear-gradient(to bottom, transparent -100%,var(--main-background-color) 100%), url("${app.currentSong.img}") no-repeat`
        themeCustom.style.backgroundSize = 'cover'
        themeCustom.style.backgroundAttachment = 'fixed'
        themeCustom.style.backgroundColor = 'var(--main-background-color)'
        audio.src = app.currentSong.path
        lyricsContainer.innerText = app.currentSong.lyric



    },
    nextSong: function(){
        app.currentIndex++;
        if(app.currentIndex>= app.songs.length){
            app.currentIndex = 0;
        }
        app.loadCurrentsong();
        app.render()
        app.scrollToActiveSong()
    },

    prevSong: function(){
        app.currentIndex--;
        if(app.currentIndex<0){
            app.currentIndex=app.songs.length-1
        }
        app.loadCurrentsong();
        app.render()
        app.scrollToActiveSong()
    },

    randomSong: function(){
        let newIndex
        do {
            newIndex = Math.floor(Math.random()*app.songs.length)
        } while (newIndex === app.currentSong)
        //KHONG DUOC = VOI CURRENTINDEX
        app.currentIndex = newIndex;
        app.loadCurrentsong();
        app.render()
        app.scrollToActiveSong()

        
    },

    scrollToActiveSong: function(){
        $('.song-block.active').scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        })
    },

    handleEvent: function(){
        controlBtn.onclick=function(){
            if(app.isPlaying){
                audio.pause()
            } else{
                audio.play()
            }
        }
        audio.onplay=function(){
            app.isPlaying = true;
            controlContainer.classList.add('playing')
        }
        audio.onpause=function(){
            app.isPlaying = false;
            controlContainer.classList.remove('playing')
        }



        audio.ontimeupdate = function(){
            if(audio.duration){
                const progress = Math.floor(audio.currentTime/audio.duration*100);
                timeBar.value = progress
            }
        }
        timeBar.oninput=function(){
            const tour = audio.duration/100*timeBar.value
            audio.currentTime=tour
        }

        nextBtn.onclick=function(){
            if(app.isRandom){
                app.randomSong()
            }else{
                app.nextSong()
            }
            audio.play()

        }

        prevBtn.onclick=function(){
            if(app.isRandom){
                app.randomSong()
            } else{
                app.prevSong()
            }
            audio.play()

        }

        randomBtn.onclick=function(){
            if(app.isRandom){
                app.isRandom=false
                randomBtn.classList.remove('active')
            }else{
                app.isRandom=true
                randomBtn.classList.add('active')
            }
        }

        audio.onended=function(){
            nextBtn.click()
        }
        

        leftSongContainer.onclick=function(e){
            const songNode = e.target.closest('.song-block:not(.active)')
            const setting = e.target.closest('.song-setting')
            const leftSetting = e.target.closest('.song-setting')
            if(songNode && !setting){
                app.currentIndex= Number(songNode.getAttribute('data-index'))
                app.loadCurrentsong()
                app.render()
                audio.play()    
            }
            const lyrics = $('.wallpaper__lyrics')
            if(leftSetting){
                if(app.isOpen){
                    app.isOpen = false
                    leftSetting.classList.remove('active')
                    lyrics.classList.remove('active')
                } else {
                    app.isOpen = true
                    leftSetting.classList.add('active')
                    lyrics.classList.add('active')
                }
            }
        }

        songsOfArtistContainer.onclick=function(e){
            if(e.target.closest('.artist__songs-block')){
                app.currentIndex= Number(e.target.closest('.artist__songs-block').getAttribute('data-index'))
                app.loadCurrentsong()
                app.render()
                audio.play()   
            }
        }


    },

    start: function(){
        app.render()
        app.defineProperties()
        app.loadCurrentsong()
        app.handleEvent()
        app.renderDiscover()
        
    }
}

app.start()

const navBtns = $$('.right__navbar-item')
const mainContents = $$('.main__content')

navBtns.forEach(function(button,index){
    button.onclick=function(){
        const mainContent = mainContents[index]
        $('.right__navbar-item.active').classList.remove('active')
        button.classList.add('active')

        $('.main__content.active').classList.remove('active')
        mainContent.classList.add('active')
    }
})

const artists = $$('.artist__block-img')
const songsOfArtist = $$('.artist__songs-block')


artists.forEach(function(artist){
    artist.onclick=function(){
        let data = artist.getAttribute('data-singer')
        songsOfArtist.forEach(function(song){
            song.style.display='none';
            if(song.getAttribute('data-artist')===data){
            song.style.display='flex';
            }
        })
    }
})

