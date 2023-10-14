import { objToArr } from '$lib/helpers';

export type SongTrackNamesOnly = {
	id: string;
	name: string;
};

const earthbound_track_names_only_obj = {
	wax_n_wane: {
		id: 'earthbound-wax_n_wane',
		name: "Wax 'n Wane"
	},

	talkin_bout_you: {
		id: 'earthbound-talkin_bout_you',
		name: 'Talkin Bout You'
	},

	blood: {
		id: 'earthbound-blood',
		name: 'Blood'
	},

	katyas_song: {
		id: 'earthbound-katyas_song',
		name: "Katya's song"
	},

	earthbound: {
		id: 'earthbound-earthbound',
		name: 'Earthbound'
	},

	goliath: {
		id: 'earthbound-goliath',
		name: 'Goliath'
	}
} as const;

export const earthbound_track_names_only = objToArr(
	earthbound_track_names_only_obj
) as SongTrackNamesOnly[];

const this_music_thing_track_names_only_obj = {
	healin_train: {
		id: 'this_music_thing-healin_train',
		name: "Healin' train"
	},

	rebekahs_lullaby: {
		id: 'this_music_thing-rebekahs_lullaby',
		name: "Rebekah's Lullaby"
	},

	pegasus: {
		id: 'this_music_thing-pegasus',
		name: 'Pegasus'
	},

	blackbird_for_liam: {
		id: 'this_music_thing-blackbird_for_liam',
		name: 'Blackbird for Liam'
	},

	national_tv: {
		id: 'this_music_thing-national_tv',
		name: 'National TV - A Lament for Anneli Alderton'
	},

	melody_for_ruth: {
		id: 'this_music_thing-melody_for_ruth',
		name: 'Melody for Ruth'
	},

	this_music_thing: {
		id: 'this_music_thing-this_music_thing',
		name: 'This Music Thing'
	},

	lenas_song: {
		id: 'this_music_thing-lenas_song',
		name: "Lena's Song"
	},

	the_trial_of_ruby_bates: {
		id: 'this_music_thing-the_trial_of_ruby_bates',
		name: 'The Trial of Ruby Bates'
	},

	for_jasmine_a_ghost_story: {
		id: 'this_music_thing-for_jasmine_a_ghost_story',
		name: 'For Jasmine - a Ghost Story'
	},

	azhia: {
		id: 'this_music_thing-azhia',
		name: 'Azhia'
	}
} as const;

export const this_music_thing_track_names_only = objToArr(
	this_music_thing_track_names_only_obj
) as SongTrackNamesOnly[];

export const songs_tracks_names_only = [
	...earthbound_track_names_only,
	...this_music_thing_track_names_only
];

const earthbound = {
	wax_n_wane: {
		albumName: 'Earthbound',
		albumKey: 'earthbound',
		id: 'earthbound-wax_n_wane',
		name: "Wax 'n Wane",
		number: '1',
		length: '4:34',
		youtubeEmbed: null,
		lyrics:
			"Hey girl - you lookin worried<br /> Walkin home on a rainy night<br /> You in no hurry<br /> Like something on your mind<br /> Maybe you lost your man to sweet<br /> Or struggling to make ends meet<br /> Tryin' to make a house a home<br /> On nothing and dry bone<br /><br /> Stars that's fallin' <br /> Too far to catch <br /> Our pockets are empty<br /> But not our hearts<br /> Wax and wane the moon<br /> That day is comin' soon<br /> Its only a lifetime <br /> Of fallin' stars<br /> Before we're goin' home<br /><br /> Hey man — your load is heavy<br /> Walkin' home under moonlight <br /> You're pieced together<br /> With tape and tied on tight<br /> How you reach there I don't know<br /> Your broken body moves you so slow<br /> Jangled outa space and time <br /> A discord in your rhyme<br /><br /> Seems like the evening lasts<br /> Full of day time woe<br /> It holds the memories fast<br /> Until the light has passed<br /> And we can feel the glow of …<br /> Stars …..  ",
		localSrc: '/songs/earthbound/01-wax_n_wane-128.mp3',
		description:
			"Wax 'n Wane is an Alternative Indie Ballad about acceptance of life and hardship.<br/><br/>As a young single parent, I often sat at my window in the evening and Wax 'n Wane describes two characters I usually saw on their separate ways home; I felt I could relate to their loneliness and their struggles.",
		credits:
			'© Original version Rachel Bennett, Dan Cochrane, Jem Clark 2007<br /> © Re-arranged version Rachel Bennett, Wes Maebe 2011<br /> Produced: Wes Maebe, Rachel Bennett 2011<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br /> Track recorded @ Inspired Studios & Sonic Cuisine<br/><br/>PRS CODE: 372291AN'
	},

	talkin_bout_you: {
		albumName: 'Earthbound',
		albumKey: 'earthbound',
		id: 'earthbound-talkin_bout_you',
		name: 'Talkin Bout You',
		number: '2',
		length: '3:15',
		youtubeEmbed: 'https://www.youtube.com/embed/-8pC2h8qap0?si=PZxo87wanWUtNnRu',
		lyrics:
			"Losin love is bitter<br/>But livin is sweet<br/>Life can turn in a minute<br/>An you think you beat<br/>Then s'mbody comes along<br/>Puts you back on your feet<br/>Talking bout you<br/>I'm talking bout you<br/></br>You're my morning sun<br/> Such a sweet surprise<br/> You ain't been round but a minute<br/> An already you wise<br/> I hope you're listenin' now<br/> Hope you realize<br/> That I'm talking bout you<br/> I'm talking bout you<br/></br> A lot 'a people say<br/> I'm on a high<br/> An there aint nothing can bring me down<br/> I wanna tell them the reason why<br/> Its cos you're around<br/></br> You're a merchant of truth<br/> With a heart of gold<br/> You still but you movin<br/> Fragile but you bold<br/> I'm still tryin to figure out<br/> If you young or you old<br/> Talking bout you<br/> I'm talking bout you<br/> Talking bout you<br/> I'm talking bout you<br/> Talking bout you<br/> I'm talking bout you",
		localSrc: '/songs/earthbound/02-talkin_bout_you-128.mp3',
		description:
			"Talkin' Bout You is a Country Ballad about love and devotion when the 'chips are down<br/><br/>Talkin' Bout You is about my son's support during our early lives together and it's a description of his uncanny perception, his support, his honesty and his wisdom.",
		credits:
			' &copy; Original version Rachel Bennett, peter J Pinto 2007<br> &copy; Re-arranged version Rachel Bennett, Peter J Pinto, Wes Maebe 2011<br> Produced: Wes Maebe, Rachel Bennett 2011<br> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br> Track recorded @ Inspired Studios &amp; Sonic Cuisine <br> <br> Drums Matt Earnshaw / Guitars &amp; Bass Peter J Pinto / Background Vocals Lynieve Austin, Nazarene, Peter J Pinto / Lead Vocal Rachel Bennett <br> <br> PRS CODE: 372333AR'
	},

	blood: {
		albumName: 'Earthbound',
		albumKey: 'earthbound',
		id: 'earthbound-blood',
		name: 'Blood',
		number: '3',
		length: '4:51',
		youtubeEmbed: null,
		lyrics:
			"Do da'm do dap doo dap doo d'u doo do'm<br/><br/> There's this place I've seen<br/> I never been anywhere like that before<br/> Too many lost chances<br/> Second shots rappin' on the door<br/> Winter branches laden<br/> With the fruits of youth cut short<br/> The street end symbol<br/> Of a commodity a cheap import<br/><br/> Life can disappear round here<br/> Rockin' 'tween a hard place and fear<br/> Think you seen a grey sky oh my<br/> Why don't you try watchin' your line die<br/> In the twinkling of an eye<br/><br/> If it takes all the fight in my bein'<br/> I'm gonna' hold back the flood<br/> If it takes all the sight in my seein'<br/> I'm gonna' look out for my blood<br/><br/> All the mothers' tears<br/> Flowin' downstream on the Harlem river<br/> Won't wash that garbage to infinity<br/> Draggin' 'em down forever<br/> Project ghost towns<br/> Stand up like heartless centries in a line<br/> A legacy to the bereft<br/> An ongoin' theft of human dignity<br/><br/> If it takes….<br/><br/> This is a time for the survival of the fittest<br/> Forefathers' lines prophetic rhymes<br/> Of a re-visit<br/> The youth have found a scheme profound<br/> An ancient strategy<br/> A seeing sense frank and intense<br/> Their ghetto liturgy<br/> Truth has insistence<br/> Metamorphosising through the ages<br/> You have to recognize<br/> Its path in all its many stages<br/> It measures out its many treasures<br/> To the ones that hear<br/> This ain't no trend<br/> Just lend this Hip Hop troubadour your ear<br/> Cos his message is loud and clear<br/><br/> If it takes….",
		localSrc: '/songs/earthbound/03-blood-128.mp3',
		description:
			"Blood is a Rock Blues — a song for mothers/parents — about protecting 'their own' against all the odds It's also a tribute to the youth who create incredible poetry and beats — regardless of the pressures in their lives.<br/></br>Blood was actually inspired by a visit to Harlem where I saw a tree loaded with the trainers of young men who had been shot in the drug-war crossfire on that particular corner (there were many more trees) <br /> <br /> I could relate this to my own son&rsquo;s life, being a single parent living in a deprived area of London at the time where the increase in crack sales was evident and on more than one occasion I had to &lsquo;step into the fray&rsquo; for my young son&rsquo;s safety.",
		credits:
			' &copy; Original version Rachel Bennett, Dan Cochrane 2003<br /> &copy; Re-arranged version Rachel Bennett, Peter J Pinto, Nixon Rosembert, Wes Maebe 2011<br /> Produced: Wes Maebe, Rachel Bennett 2011<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br /> Track recorded @ Inspired Studios &amp; Sonic Cuisine <br /> <br /> Drums &amp; Percussion Graham Cuttill / Guitars &amp; Bass Peter J Pinto / Keys Kevin Leo / Horns Mark Chandler / Background Vocals Nazarene, Peter J Pinto, Wes Maebe, Rachel Bennett / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 372313FP '
	},

	katyas_song: {
		albumName: 'Earthbound',
		albumKey: 'earthbound',
		id: 'earthbound-katyas_song',
		name: "Katya's song",
		number: '4',
		length: '4:09',
		youtubeEmbed: null,
		lyrics:
			"You said in your dark pressed suit<br/>Things would change<br/>I remember the glass of wine<br/>You promisin' better circumstances<br/>Car window sped by fields of heavy soil<br/> The earth turned over<br/> I watched you spell out<br/> A new beginnin' for my heart<br/> An' I listened<br/> Yeah I listened<br/> But I didn't have a clue<br/> It wasn't really you<br/><br/> You brought me here to<br/>  This no mans land<br/> Inhabited by all your demons<br/> Alone and scared and talking to the walls<br/> Lookin' for conversation<br/> I turned my eyes from the truth<br/> For as long as I could close them<br/> But it didn't take too long before<br/> You prized them open<br/> So I watched you<br/> Yeah I watched you<br/> Like watchin someone else<br/> But you were just yourself<br/><br/> In the dark of blue night<br/> I recall your voice<br/> Becomin' like a stranger<br/> My mind reelin' from a deep confusion<br/> Of fast disappearin' colours<br/> And your insistent harsh and drivin' whisper<br/> That thin thread strainin' tighter<br/> Cross my heart<br/> But I held on<br/> Yeah I held on<br/> Till it broke in two<br/> There was nothing I could do<br/><br/> Now I feel you prowlin' in the corner of<br/> A distant doorway<br/> And I know that you want to blur the edges<br/> Of my picture frame<br/> And I know you find it hard to be<br/> Nothin' more than a shadow babe<br/> I made up my mind<br/> You're nothin' anyway<br/> Youre nothing babe<br/> Youre nothing babe<br/><br/> I'm not gonna listen<br/> To your dark suit lies<br/> Anymore<br/> I'm not gonna buy<br/> Your hard sales talk<br/> At my front door<br/>I'm not gonna wait at a chain<br/>Of empty coffee tables<br/>I'm not gonna lock up y heart<br/>Cos I see<br/>Yeah I see<br/>What you done to me<br/>Now I've broken free",
		localSrc: '/songs/earthbound/04-katyas_song-128.mp3',
		description:
			"Katya's Song is an Indie Blues — it's about abandonment and eventual release from a relationship.<br/><br/> Katya&rsquo;s Song is actually based on a true story — the experience of the mother of the first bassist in my band whose mother&rsquo;s name was Katya.<br /> <br /> Katya came to UK from Hungary in the 50&rsquo;s to an arranged marriage that turned into a fight for her life and her freedom; she had run a caf&eacute; in West London with her husband for many years before breaking away from his cruelty, to make a life for herself and her two children.",
		credits:
			'&copy; Original version Rachel Bennett, Dan Cochrane 2002<br /> &copy; Re-arranged version Rachel Bennett, Peter J Pinto, Nixon Rosembert, Wes Maebe 2011<br /> Produced: Wes Maebe, Rachel Bennett 2011<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br /> Track recorded @ Inspired Studios &amp; Sonic Cuisine <br /> <br /> Guitars Peter J Pinto / Bass Guitar Mike Comber / Percussion Gabriel Nuzzoli / Background Vocals Kevin Mark Trail, Nazarene / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 372313FU'
	},

	earthbound: {
		albumName: 'Earthbound',
		albumKey: 'earthbound',
		id: 'earthbound-earthbound',
		name: 'Earthbound',
		number: '5',
		length: '4:56',
		youtubeEmbed: 'https://www.youtube.com/embed/HJ0sxl7s3EU?si=eaQUmFPHp7Rfw4Nz',
		lyrics:
			"The will of someone who<br/>With rags and tin and paper shoe<br/>Can put together whats undone<br/>Sew bundle wrap and sell<br/>'Neath bindi sun<br/>The power of beast of burden under<br/>Toil and ache and monsoon thunder<br/>Sacred cow in pasture green<br/>Horns that trumpet to the Gods unseen<br/><br/> Stand still enough its real<br/> The love your heart can feel<br/> The force of earth beneath our feet moves round<br/> The angels coming down<br/> We need them here<br/> Earthbound<br/><br/> Salt lies white in water fields<br/> Patient hands tend soil to yield<br/> No portion hand to mouth but what is need<br/> Rhythm through the heat of day concede<br/> To sacrifice and bless so all can thrive<br/> Magic the acceptance just to be alive<br/> The rainbow dyes and bright, bright weaves<br/> Adorn earth body in devotion and belief<br/><br/> Stand still enough and long<br/> Your ear will know a joyful song<br/> Where heaven meets the earth no sweeter sound<br/> Than angels coming down<br/> We need them here earthbound<br/><br/> Our need is mmet by circumstance<br/> Diamond shoals and dolphin dance<br/> From dawn to dusk they laugh between the sands<br/> And mercury their soul from watered lands<br/> White horses bring the fishers home<br/> To waiting arms whose work is just begun<br/> No need for angels to come down<br/> They're walking here amongst us<br/><br/> Earthbound<br/> The angels have come down<br/>Earthbound<br/>There's no sweeter sound<br/>Earthbound<br/> The angels coming down<br/>They're walking here amongst us<br/>Earthbound",
		localSrc: '/songs/earthbound/05-earthbound-128.mp3',
		description:
			'Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.<br /> <br /> I journeyed to Goa in India with friends and Earthbound was inspired by seeing the incredible resourcefulness of the people.',
		credits:
			'&copy; Original version Rachel Bennett, Peter J Pinto 2006<br /> &copy; Re-arranged version Rachel Bennett, Wes Maebe 2011<br /> Produced: Wes Maebe, Rachel Bennett 2011<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br /> Track recorded @ Inspired Studios &amp; Sonic Cuisine <br /> <br /> Drums Ralph Salmins / Piano Manley O&rsquo;Connor / Double Bass Mike Comber / Background Vocals Lynieve Austin, Nazarene / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 372313GM'
	},

	goliath: {
		albumName: 'Earthbound',
		albumKey: 'earthbound',
		id: 'earthbound-goliath',
		name: 'Goliath',
		number: '6',
		length: '4:12',
		youtubeEmbed: null,
		lyrics:
			"Stone in ya' head<br/>Brought you down to your knees<br/>Cold, cold chill runnin' thru' you dread<br/>Somewhere at minus five degrees<br/>The thud of your heartbeat stops you dead<br/>In the mud at the bottom of your street<br/><br/> Goliath<br/> You done ruled the roost for years<br/> But something out there<br/> Is bigga' than you<br/><br/> Thought you had it nailed<br/> Put up all your fences<br/> But it's your heart that got impaled<br/> Love done got thru' to your senses<br/> Your reign of hate has failed<br/> You got no future tenses<br/><br/> Goliath …<br/><br/> You been playin' God<br/> Like you can judge an' jurify<br/> Just give the wink an' the nod<br/> An' your dogs gonna' let it fly<br/> You keep talkin' 'bout blood on the walls<br/> But when your destiny calls<br/> Goliath<br/><br/> Goliath there is no debate<br/> Power done made you insane<br/> Your giant heart broke way too late<br/> Now blood pumpin' fear thru' you veins<br/> You done made your final mistake<br/> Dust from you bones is all that remains<br/><br/> Goliath …",
		localSrc: '/songs/earthbound/06-goliath-128.mp3',
		description:
			'Goliath is a Contemporary Blues about war, world bullies &ndash; about how bullying begins in the back yard, the school yard then transfers to work, politics and world leaders&rsquo; tables &ndash; out on the frontline &#8230; in the homes of innocent victims <br /> It&rsquo;s a blues of hope that Love will eventually conquer all.<br /> <br /> I am proud to say that Elliot Randall (Doobie Brothers) requested to play on this track and his outro solo completes it beautifully! <br /> I wrote the song almost 20 years ago but once I put it in the hands of Wes Maebe it came to life &#8230;<br /> <br /> Goliath was inspired, on a personal level, by my experience as a child living in a broken home &#8230; and as the youngest, I was the victim of terrible bullying; I was raised in Dundee and subsequently in Glasgow; in both cities I saw the &lsquo;rougher side of life&rsquo; on the street.',
		credits:
			' &copy; Original version Rachel Bennett, Dan Cochrane 2004<br /> &copy; Re-arranged version Rachel Bennett, Wes Maebe 2011<br /> Produced: Wes Maebe, Rachel Bennett 2011<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br /> Track recorded @ Inspired Studios &amp; Sonic Cuisine <br /> <br /> Drums Matt Earnshaw / Bass Guitar Mike Comber / Guitars Elliot Randall, Jon Klein, Wes Maebe / Horns Mark Chandler / Background Vocals &amp; Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 372313KW'
	}
} as const;

const this_music_thing = {
	healin_train: {
		albumName: 'This Music Thing',
		albumKey: 'this_music_thing',
		id: 'this_music_thing-healin_train',
		name: "Healin' train",
		number: '1',
		length: '3:18',
		youtubeEmbed: null,
		lyrics:
			"When we were young — we were wild yeah<br/>Always together just we three<br/>Me an' Jon and Gypsy Boy — tryin' to feel free<br/>Tattered jeans and sneakers<br/>Wanderin' on the train line<br/>Getting' high on weed an' pills — all at the same time<br/><br/> Take me back home — healin' train<br/>With my boys — where we went walkin'<br/>Let me sing to them once more<br/>Where we were true and rockin'<br/><br/> Singin' to truckers in the dark<br/>Down by the motorway café<br/>Hitched that ride down south — to break away<br/>They was old 'fore they got young<br/>Wish I could see them now<br/>Maybe they're still walkin' round free — I doubt it somehow<br/><br/> Take me back home…<br/><br/> We'd go walkin' in the shady wood		<br/>I was their chanteuse 				<br/> Didn't need to love them any other way  	<br/> I know they understood<br/><br/> Take me back home…<br/><br/> Oh healin' train	<br/> If I knew I could see my boys again<br/>I'd wait forever in the fallin' rain <br/>Just to see my boys again <br/>",
		localSrc: '/songs/this_music_thing/01-healin_train-128.mp3',
		description:
			'Healin&rsquo; Train is a Rock Country Blues about a chequered youth.<br /> <br /> Healin&rsquo; Train is a memory dedicated to my teen years spent with two guys &ndash; Jon and &rsquo;Gypsy Boy&rsquo;; we experimented with various stimulants and immersed ourselves in the music of the early 70&rsquo;s before I eventually hitch-hiked to London and a new life.',
		credits:
			'&copy; Written and Arranged: Rachel Bennett, Wes Maebe 2017<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jon Klein, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli) / Percussion Chris Bell, Wes Maebe / Keys Wes Maebe / Background Vocals Wes Maebe / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370760DM'
	},

	rebekahs_lullaby: {
		albumName: 'This Music Thing',
		albumKey: 'this_music_thing',
		id: 'this_music_thing-rebekahs_lullaby',
		name: "Rebekah's Lullaby",
		number: '2',
		length: '4:30',
		youtubeEmbed: null,
		lyrics:
			"On top of a coal tip I was nine years old<br/>Me an my soul mate — talkin' bout the world<br/>What'd it be like — to let go of it all<br/>So I stood up — scared but I was ready to fall<br/>I took a dare — felt the world give way<br/>I learned a hit hard lesson that day<br/><br/> Sippin' salt tears as I crawled to the top<br/>Slippin' and slidin' from half way up<br/>Thinkin' I'd never ever get back home<br/>Darkness fallin' and my friend — she already gone<br/>Scared to get a belt form her Da'<br/>An he done it too — you know that<br/><br/> I rolled to the bottom<br/>Over and down<br/>Down to the bottom<br/>All the way down<br/><br/> Well I ran all the way home in the darkness<br/>As scared a' the backstreets as that coalmine mess<br/>Sneakin' in the back door dust all on ma' dress<br/>Ma didn't even notice — she was doin' her best<br/>Her head was gettin' further from anywhere<br/>It didn't seem like it sometimes but she really did care<br/>My sisters all tellin' me where you been at — where<br/>To get dirt in your fingernails an' dust in your hair<br/><br/> I told 'em I rolled<br/>Over and down<br/><br/> A little time ago I remembered that day<br/>The feelin' came back like the ground givin' way<br/>Took me by surprise how it got control<br/>How easy it was to give way and roll …<br/>Buckle my knees and stop up my heart<br/>Tighten my throat make my eyes water and smart<br/><br/> Early in the morning in my dirty city, cold<br/>Out of her head a child in trouble — she was fifteen years old<br/>Lookin' down<br/>Over the muddy river water<br/>Alone an' hurtin' no sense in her thoughts, no<br/>Except knowing she couldn't go back home<br/>By sun up she was already gone<br/><br/> She went to the bottom <br/>Under and down <br/>Down to the bottom <br/>All the way down <br/><br/> She musta' ran all the way there in the darkness<br/>As scared of her future as that river mess<br/>Lookin' lost an' pretty in her dancin' dress<br/>Her ma didn't miss her — she was doin' her best<br/>Family broke up an' too angry to care<br/>She was way too alone an' runnin' scared<br/>They found her on the bank far from anywhere<br/>River mud in her fingernails 'n dirt in her hair <br/>",
		localSrc: '/songs/this_music_thing/02-rebekahs_lullaby-128.mp3',
		description:
			'Rebekah&rsquo;s Lullaby is a Rock Country Blues about a teen suicide.<br /> <br /> I wrote Rebekah&rsquo;s Lullaby on hearing about the suicide of a young girl whose sister I taught in an arts organisation; her tragic death brought back memories of a time when my friend and I attempted to end our lives on a coalmine slag heap in Hamilton near Glasgow.  ',
		credits:
			'&copy; Original version written Rachel Bennett 2018<br /> &copy; Background Vocal lyric Nathan Devonte, Abdul Shyllon, Kevin Mark Trail 2019<br /> &copy; Re-arranged version Rachel Bennett, Wes Maebe 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli) / Percussion Chris Bell / Keys Wes Maebe / Horns Wes Maebe / Strings Wes Maebe / Background Vocals Nathan Devonte, Abdul Shyllon, Kevin Mark Trail / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 418901AR'
	},

	pegasus: {
		albumName: 'This Music Thing',
		albumKey: 'this_music_thing',
		id: 'this_music_thing-pegasus',
		name: 'Pegasus',
		number: '3',
		length: '4:11',
		youtubeEmbed: null,
		lyrics:
			"My name is Pegasus<br/>This is my odyssey<br/>Name of a Greek horse<br/>But I am a hadji<br/><br/> It didn't start like this<br/>I was just a youth<br/>Bein' helpful and kind<br/>Runnin' favours for the man<br/>He was my Zeuss<br/>He helped me to survive<br/><br/> I am a brother in arms<br/>Out on the front line<br/>I am a brother in arms<br/>Fighting a war that ain't mine<br/><br/> They named me Broken Wing<br/>You know my history<br/>Proud of my Shawnee name<br/>But my people ain't free<br/><br/> Once we carried<br/>The thunderbolts of heaven<br/>We were sentient and live<br/>Once we ran<br/>With the braves in the crossfire<br/>White man cain't handle that jive<br/><br/> I am a brother …<br/><br/> But when I am still 	<br/> You can smell my sweat<br/>See my fragile heart<br/>Beat at the fine bones<br/>Under my skin<br/>That carry me on<br/>Thru this star filled night<br/><br/> I am a brother …<br/><br/> My name is young man<br/>An' I don't fit in<br/>An' this ain't your land<br/>An' I ain't your kin",
		localSrc: '/songs/this_music_thing/03-pegasus-128.mp3',
		description:
			'Pegasus is a Country Ballad about young boys who end up in &lsquo;the war game&rsquo;.<br /> <br /> I wrote Pegasus as a response to research I did on the young boys who traffic drugs in war torn Syria; the information I gathered led me to think about how children are &lsquo;lost&rsquo; to their families when their country is at war and how the bigger power bullies are happy to use them for their own purposes &ndash; like cannon fodder; this issue is ageless and eternal.',
		credits:
			'&copy; Original version written Rachel Bennett 2014<br /> &copy; Re-arranged version Rachel Bennett, Jon Klein 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jon Klein, Wes Maebe / Bass Mike Comber / Percussion Chris Bell, Wes Maebe / Keys Jon Klein / Trumpet Rick Leigh / Background Vocals Nathan Devonte, Abdul Shyllon / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370644EU'
	},

	blackbird_for_liam: {
		albumName: 'This Music Thing',
		albumKey: 'this_music_thing',
		id: 'this_music_thing-blackbird_for_liam',
		name: 'Blackbird for Liam',
		number: '4',
		length: '4:39',
		youtubeEmbed: null,
		lyrics:
			"On my block the youth<br/>Spit rhymes of truth<br/>Their season has arrived<br/>Knowin' they belong<br/>Rooftop black bird song<br/>The reason to survive<br/>The storm it takes me<br/>You won't forsake me<br/>In the changin' tide<br/>Your flight is love<br/>I'm not afraid to move<br/>You are my guide (Nate)<br/><br/> You callin'<br/>Wake up get ready<br/>Wake up get ready<br/>Get up get ready<br/>Get up get ready<br/><br/> Blackbird testify<br/>Soar with The Most High<br/>This strange migration<br/>Warrior of light<br/>Stand up in the fight<br/>Improve this situation<br/>You need only look<br/>In the holy book<br/>To know your true potential<br/>It lies deep within<br/>Sinew heart an' skin<br/>A Love that is essential<br/><br/> You callin' …<br/><br/> Spoken Word section<br/>Transcendent<br/>Reverent<br/>Yes you shine in divine excellence! <br/>Blackbird — mysterious — freedom — lunar sun,<br/>Spiritual path embark — and pass-everyone! <br/>So now is the time, plus we see who you are,<br/>… cannot wait, it's your fait, having faith, be your star. <br/>Must just trust — the richness of self. <br/>The value of 'you' is far far beyond priceless wealth. <br/>Magnitude of magnificence — togetherness,<br/>Intelligence. Eternal. Wisdom & benevolence. <br/>Your extend wings it brings vulnerability,<br/>Reach possibilities, embracing serenity. <br/>Heights, spirit guide, find your truths through your dreams,<br/>Your presence is felt — even when it's unseen,<br/>Changes are happening — awakening minds. <br/>So get up get — get ready to just leave it all behind. Blackbird. <br/><br/> Wake up with the dawn<br/>Ready to move on<br/>To the prime position<br/>Standing by The One<br/>No one stands alone<br/>Lets move with this transition<br/>Carrying the word<br/>Beat your wings Blackbird<br/>So His Will be done — yeah<br/>Let the Trumpet sound<br/>In the Higher Ground<br/>We are going home<br/><br/> You callin' …<br/><br/> Have you got a song for me<br/>They seem to come so easy<br/>Have you got a song for me<br/>They seem to come so easy<br/>Yeah mmhmmh <br/>",
		localSrc: '/songs/this_music_thing/04-blackbird-128.mp3',
		description:
			'Blackbird for Liam is a Soft Rock Pop Ballad with a Hip Hop Beat and is a tribute to the youth around my area and with whom I have often worked (as a vocal coach) and who write and perform lyrics in UK Hip Hop and Grime styles.<br /> <br /> I am constantly in awe of the determined creativity of the youth who are brilliantly creative and who are peace-seekers regardless of their very challenging environment; their lyrics are extensive, deep and prophetic<br /> Any reference to &lsquo;holy&rsquo; in the song is not intended as a religious comment but is a wider analogy that pays tribute to the Aramaic word.',
		credits:
			'&copy; Original version written Rachel Bennett, Mike Comber 2010<br /> &copy; Re-arranged version Rachel Bennett, Jordan Brown (now Christiano Tortoioli), L Nkechi MgBado, Wes Maebe 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli) / Percussion Chris Bell, Ben Danso-Bennett, Rachel Bennett, Niamh Webb / Keys Jordan Brown (now Christiano Tortoioli), Wes Maebe / Spoken Word Feat. LyricL courtesy of Westbury Music Limited / Background Vocals Bukola Abdul, Nathan Devonte, Nazarene / Lead Vocal Rachel Bennett<br /> <br /> PRS CODE: 418901AU'
	},

	national_tv: {
		albumName: 'This Music Thing',
		albumKey: 'this_music_thing',
		id: 'this_music_thing-national_tv',
		name: 'National TV - A Lament for Anneli Alderton',
		number: '5',
		length: '4:51',
		youtubeEmbed: null,
		lyrics:
			"And if we captured that moment<br/>In the tree rings<br/>Picked up and touched<br/>The worn river pebbles<br/>Found the altered pattern<br/>In the blackbird's nest<br/>Saw the runaway fear<br/>In the fox's footprints<br/><br/> Oh but we watched you<br/>On national TV<br/>On a train<br/>In a police check scene<br/>Combin' your pretty blonde hair<br/>For the men to see<br/>In the window of a night train 	<br/>On the TV screen<br/><br/> How do the May tree seeds know<br/>To let go and fly<br/>And the turtles return<br/>When thirty years has passed by<br/>What brings the whale from the deep<br/>When the sailors cry<br/>Why couldn't we<br/>Hear the riverbed call out<br/>At your demise<br/><br/> When we could watch you …<br/><br/> We'd see you there<br/>Caught in a moment<br/>Caught in a moment<br/>In the before<br/>Caught in a moment<br/>And in the after<br/>In the before<br/>Caught in a moment<br/>And in the after<br/><br/> Oh but we watched you …",
		localSrc: '/songs/this_music_thing/05-national_tv-128.mp3',
		description:
			'National TV – A Lament for Anneli Alderton is a Contemporary Country Ballad about Anneli who was the 3rd victim of convicted 2006 Ipswich serial killer Wright.  I watched TV footage of Anneli on a train – a police ‘call out’ for any witnesses; it seemed bizarre and ‘upside down’ that police could not use their deeper knowledge and instincts to trace this killer (even though after this TV piece it transpires that they had already interviewed him) and in this context I struggled with the idea that we could use advanced technology to spread news of Anneli’s death; I found her particular story deeply tragic.',
		credits:
			'&copy; Original version written Rachel Bennett, Jamie Coe, Jordan Brown (now Christiano Tortoioli) 2010<br /> &copy; Re-arranged version Rachel Bennett, Jamie Coe, Jon Klein 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Jon Klein, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli / Banjo Tom Chudley Evans / Percussion Chris Bell / Keys Jon Klein / Violin Jo Eaton-Kent (now Joni Kent) / Background Vocals Bukola Abdul, Nathan Devonte, Nazarene, Evie Rose, Abdul Shyllon / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370644CV'
	},

	melody_for_ruth: {
		albumName: 'This Music Thing',
		albumKey: 'this_music_thing',
		id: 'this_music_thing-melody_for_ruth',
		name: 'Melody for Ruth',
		number: '6',
		length: '4:49',
		youtubeEmbed: null,
		lyrics:
			'One night my sweet friend<br /> She told me a story <br /> Bout Ruth in the bible<br /> Her love for Naomi<br /> Each word she said<br /> Brought me closer to God<br /> To a truth that we need<br /> To the sense of the Word <br /> <br /> And I heard her song <br /> Full of fire so strong <br /> Going on an&rsquo; on <br /> Bout the weight we carry<br /> The bond of humanity<br /> Heard her song <br /> Full of fire so strong <br /> Bout the way that we&rsquo;re living<br /> The ways that we&rsquo;ve forgotten to give <br /> <br /> Held in the darkness <br /> The city around us the sirens and traffic<br /> But something had found us<br /> A love that had bound us<br /> Dust on the moonbeam<br /> Red fox in the shadow<br /> The breath of the smallest of birds as he flies<br /> Bringin&rsquo; rhymes for tomorrow<br /> <br /> And I heard her song &#8230;. <br /> <br /> &#8230; And my soul &#8230;&#8230;.my soul <br /> Sang the melody <br /> So I could sing it to you<br /> Shoo do do do do do do<br /> Sang the melody <br /> Shoo do do do do <br /> So I could sing it to you<br /> Oh<br /> <br /> Where you go <br /> That&rsquo;s where I go<br /> Where you go <br /> That&rsquo;s where I go',
		localSrc: '/songs/this_music_thing/06-melody_for_ruth_fr-128.mp3',
		description:
			'Melody for Ruth is a Folk Country Ballad about deep friendship and commitment.<br /> <br /> I wrote Melody for Ruth on hearing the story of Ruth (in the bible) late one night from my dear friend Lynieve Austin who is a Christian; Lynieve&rsquo;s ability to narrate was so inspiring that I woke the next day and wrote the song in about one hour! The song is not a religious tribute though there is biblical reference.',
		credits:
			'&copy; Original version written Rachel Bennett, Mike Comber 2012<br /> &copy; Re-arranged version Rachel Bennett, Wes Maebe 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Jon Klein, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli) / Banjo Wes Maebe / Background Vocals Bukola Abdul, Nathan Devonte, Nazarene / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370644DR'
	},

	this_music_thing: {
		albumName: 'This Music Thing',
		albumKey: 'this_music_thing',
		id: 'this_music_thing-this_music_thing',
		name: 'This Music Thing',
		number: '7',
		length: '4:24',
		youtubeEmbed: null,
		lyrics:
			"I get in a room<br/>With you<br/>We're gettin' in tune boy<br/>I know you're feelin' it too<br/>I'm not talkin' bout your body<br/>Although I 'preciate your moves<br/>I'm talkin' bout your soul<br/>And the music that you do<br/><br/> You read my mind<br/>Anticipate<br/>You're always right on time boy<br/>I don't ever have to wait<br/>I'm not talkin' bout a love thing<br/>Oh no that's not our fate<br/>I'm just feelin' your music<br/>And the way that you play it	<br/><br/>I'm proud to tell the people<br/>I got somethin' goin' on with you<br/>I'm not ashamed of what I feel<br/>About you<br/>You could sell all I own<br/>An' I wouldn't even know<br/>Cos I'm already sold on you<br/>On this new love<br/>On this old blues<br/><br/> I don't have to explain<br/>You understand<br/>You know l my joy and pain boy<br/>You're no ordinary man<br/>I don't even need to hold you<br/>I know that's not God's plan<br/>I just need to sing my song<br/>'N put it in your hands <br/>I need to sing my song<br/>'N put it in your hands <br/><br/> C'mon! This music thing<br/>Goes deeper",
		localSrc: '/songs/this_music_thing/07-this_music_thing_mt-128.mp3',
		description:
			'This Music Thing is a Soft Rock Country Blues about a deep love of music.<br /> <br /> I was initially coached and supported in my music career by Kevin Leo &ndash; a singer songwriter of renown; Kevin directed me with care and the utmost respect and the song is a tribute to this, particularly in an industry where &lsquo;support&rsquo; and &lsquo;relationships&rsquo; can be confused with other &lsquo;gains&rsquo;.',
		credits:
			'&copy; Original version written Rachel Bennett, Peter J Pinto 2010<br /> &copy; Re-arranged version Rachel Bennett, Jon Klein 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jon Klein, Wes Maebe / Bass Mike Comber/ Percussion Chris Bell, Jon Klein / Keys Wes Maebe / Background Vocals Nathan Devonte, Abdul Shyllon / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370645ET'
	},

	lenas_song: {
		albumName: 'This Music Thing',
		albumKey: 'this_music_thing',
		id: 'this_music_thing-lenas_song',
		name: "Lena's Song",
		number: '8',
		length: '6:15',
		youtubeEmbed: null,
		lyrics:
			"I stood by the water<br/>An' I gazed in wonder<br/>An' it called me<br/>Sang its sweet ringin' music<br/>On a cold hazy mornin'<br/><br/> So I stepped in the water<br/>Walked on in<br/>Up to my middle<br/>An' I looked into the darkness 	<br/> An' I stepped on secret stones shinin' 	<br/> And the rushes they pulled me in<br/><br/> And they sang to me 	<br/> Of calamity<br/>And how to be free<br/>Free of all this<br/>Yes they sang to me<br/>Of their beauty<br/>And how to be free<br/>Free of all this	<br/><br/>An' above me the heavy sky opened	<br/> Chemical rain hit the water<br/>Makin' a show  <br/>Beautiful kaleidoscope sparkles<br/>In the waiting mornin'<br/>An' I gazed in wonder yeah<br/><br/> So I walked on in<br/>Under the water<br/>Just to be free<br/>Just to be free of all this<br/><br/> An I saw refuse in poisoned distended bird bellies<br/>Oily black feathers starin' eyes all dis-eased   <br/>An' polar bears swimmin' for days in the ocean<br/>On islands of ice that are too early broken  <br/>Reaching the shoreline to die in the essence<br/>There with the seals lookin' on in the silence  <br/>An' children's cries callin' on phone lines vibrating<br/>Tight ropes of tension hearts ready for breakin'  <br/>Echoing screams 'bout Mummy's new Daddy<br/>An' please can you help me not hurt in my body<br/><br/> I wanna be free of all this  <br/>Let me be free of all this  <br/>I wanna be free 	<br/> Let me be free of all this	<br/><br/>So I looked up one more time at the sky  <br/>To the arrow of geese callin' goodbye  <br/>An' I heard water's laughter<br/>An' I heard the wind song chasin' after<br/>An' I heard the faithful robin sing<br/>An' I heard the blackbird answer<br/>An' I heard the low clouds rumble<br/>An' I heard the water  <br/><br/> Callin' me down<br/>Just get closer<br/>Come on under<br/>Yeah<br/><br/> So I walked on in<br/>Under the water<br/>An' I felt it cold<br/>On my shoulders<br/><br/> An' I looked around  <br/>An' I saw duck feet paddle<br/>An' I saw the fish swimmin' by<br/>An' I saw my hair tangled in the rushes  <br/>An' I saw my body<br/>Floatin' on down  <br/>I saw my body<br/>Floatin' on down  <br/><br/> Free of all this  <br/>Let me be free of all this<br/>I was free of all this<br/>I was free of all this  <br/><br/> An' I saw the water<br/>An' I saw the water<br/>An' I heard distant birds singin' in my mornin'<br/>An' the water rushin' past my ears …",
		localSrc: '/songs/this_music_thing/08-lena-128.mp3',
		description:
			'Lena&rsquo;s Song is a Contemporary Folk Country Ballad and is a tribute to my mum Lena Maria<br /> <br /> The deeper description:<br /> Lena was a lonely and abused child who suffered schizophrenia from teen years into her old age; she was &ndash; regardless &ndash; a wonderful lady! The story relays her childhood attempt to drown herself in the River Annan on the borders of Scotland; in my adult life, she recalled this event <br /> My mum was my first Eco Warrior!',
		credits:
			'&copy; Original version written Rachel Bennett, Jordan Brown (now Christiano Tortoioli), Jamie Coe 2013<br /> &copy; Re-arranged version Rachel Bennett, Nathan Devonte, Jon Klein, Wes Maebe 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Jon Klein, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli) / Percussion Chris Bell / Keys Jordan Brown (now Christiano Tortoioli), Wes Maebe / Background Vocals Bukola Abdul, Nathan Devonte, Nazarene with WacArts Professional Singers / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 418901AS'
	},

	the_trial_of_ruby_bates: {
		albumName: 'This Music Thing',
		albumKey: 'this_music_thing',
		id: 'this_music_thing-the_trial_of_ruby_bates',
		name: 'The Trial of Ruby Bates',
		number: '9',
		length: '5:43',
		youtubeEmbed: null,
		lyrics:
			"Ruby is that you<br/>Runnin' cross my skyline<br/>Where the freight trains cry<br/>'Gainst the Alabama rain<br/>I'm callin' from your window<br/>Words fallin' on the wind<br/>Rusty nail torn curtains blowin'<br/>It's a dirty shame<br/><br/> Ruby don't run<br/>Wear out what's left 'a your shoes<br/>Don't burn out<br/>Everything might just<br/>Turn out<br/>I know you're frettin'<br/>'Bout what I can see<br/>But I believe your soul<br/>Needs to be free<br/>'Cos Ruby<br/>You dreamed me<br/><br/> Ruby you know<br/>Why I came here<br/>With my platinum hair<br/>An' my city ways<br/>You took me walkin'<br/>Real talkin' bout your first kiss<br/>'Gainst the rusty old turbines<br/>Lyin' in decay<br/><br/> Ruby don't fear<br/>What's inside of you<br/>Try'n' stay strong<br/>Even if you know<br/>You done wrong<br/>I know you're hidin'<br/>From your history<br/>But I believe your soul<br/>Is longin' to be free<br/>'Cos Ruby<br/>You dreamed me<br/><br/> You got so much goin' on<br/>But nothin' to lose<br/>From the Whitehouse lawn<br/>To the soup kitchen line<br/>A whole nation wanna' hear<br/>The truth you choose<br/>An' if you come right<br/>You might mend that ache<br/>If you come contrite<br/>I could open my eyes<br/>And live this dream<br/>When I awake<br/><br/><i>Newscaster</i><br/>Under a typical Charlottsville tin coloured sky,<br/>violent clashes between white nationalists and Black Lives Matter activists<br/> put an end to a noon rally that hadn't even begun. <br/>The activists are defending the right to remove a confederate statue<br/> that they believe represents white supremacy; in a time when unarmed black youth<br/> are still being shot down in cold blood between here and the county line<br/><br/><br/>Ruby you testified<br/>In your brand new clothes<br/>On the courthouse steps<br/>The camera caught you smilin'<br/>But runnin 'cross your eyes	<br/> I see your first boy	<br/> The one who kissed you 'gainst the turbines<br/>With the dark brown skin <br/><br/> Ruby you tangled with truth<br/>Till your life let you go		<br/>An now there's too many<br/>Firearms in the hands of fives<br/>An' saggin' in death row	<br/> But you can help us fight<br/>'Gainst the powers that be<br/>An' I believe you want to<br/>Cos Ruby you dreamed me<br/>Yeah Ruby Ruby Ruby<br/>You dreamed me<br/>Ruby Ruby Ruby<br/>You dreamed me <br/>",
		localSrc: '/songs/this_music_thing/09-the_trial_of_ruby_bates-128.mp3',
		description:
			'The Trial of Ruby Bates is a Contemporary Country Blues about Hollace Ransdall&rsquo;s revisit as a journalist to the Scottsboro Boys case in Alabama in the 30&rsquo;s.<br /> <br /> The song was inspired by Ellen Feldman&rsquo;s novel Scottsboro that was based on the re-investigation of Ruby Bate&rsquo;s false testimony of rape by nine African American boys who were subsequently incarcerated <br /> The voice is that of Hollace Ransdall.<br /> <br /> NB: I am proud to say that the curator of The Scottsboro Boys Museum in Alabama has listened to and praised the song (from the recording on the Raie album This Music Thing) and it now plays at the museum.',
		credits:
			'&copy; Original version written Rachel Bennett, Jamie Coe, Jordan Brown (now Christiano Tortoioli) 2014<br /> &copy; Re-arranged version Rachel Bennett, Wes Maebe 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Jon Klein, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli) / Trumpet Rick Leigh / Newscaster Voice Niamh Webb / Background Vocals Nathan Devonte, Kevin Mark Trail / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370644DU'
	},

	for_jasmine_a_ghost_story: {
		albumName: 'This Music Thing',
		albumKey: 'this_music_thing',
		id: 'this_music_thing-for_jasmine_a_ghost_story',
		name: 'For Jasmine - a Ghost Story',
		number: '10',
		length: '5:24',
		youtubeEmbed: null,
		lyrics:
			"Hold on<br/>Jasmine<br/>With your jaune-skin love<br/>And your dark stone eyes<br/>That saw him<br/>Like I did 	<br/>Hold onto his memory<br/>And I will too<br/>I'll remember him<br/>For you<br/><br/> Hold on to thoughts<br/>To lay me down<br/>Eyes closed pain caught<br/>Behind a frown<br/>Skin on skin<br/>Mine can't feel<br/>Cold to touch<br/>Seems unreal<br/><br/> Stop and start<br/>No rhyme or reason<br/>Beats out of time<br/>My heavy heart<br/>Stars go on without us<br/>Shiny bright<br/>The moon and me<br/>Move into night<br/><br/> What you lose you find<br/>Mmmh<br/>What you lose you find<br/>Mmmh<br/><br/> Wake up to time<br/>With no seconds in it<br/>Grasp at lines of light<br/>Fragmented minutes<br/>A present tense<br/>That doesn't fit<br/>I mouth his name<br/>But cant make sense of it<br/><br/> Say hello<br/>To this tear stained face<br/>To this chasmic<br/>Inside me place<br/>To this most<br/>Unwelcome dawn<br/>To this he<br/>That cant be gone<br/><br/> What you lose …<br/><br/> You must have been there<br/>Before me<br/>Imagine my surprise<br/>When I learned to love<br/>Your love for him<br/>To see it all<br/>Through your eyes<br/>To empathise<br/><br/> We're left here now<br/>With signs and spirits<br/>Past understanding<br/>Just living with it<br/>I'm letting go<br/>Of bone and breath<br/>His beating heart<br/>There's little left<br/><br/> Except a trace<br/>That whispers by<br/>Too indistinct<br/>To quantify<br/>Too sweet to sour<br/>Too quick to still<br/>Too here too gone<br/>Too warm too chill<br/><br/> What you lose you'll find",
		localSrc: '/songs/this_music_thing/10-jasmine-128.mp3',
		description:
			'For Jasmine &ndash; A Ghost Story is a Contemporary Country Ballad about the death of a friend and lover.<br /> <br /> My dear friend and short-term lover Greg died in France in a road accident; he was there for me at the end of a very painful separation from a 5-year relationship; Greg and I studied at drama school together<br /> I met his long-term girlfriend Jasmine at his funeral and we talked with candid friendliness about him<br /> It was an experience that afforded me a great deal of healing and I am eternally grateful to Jasmine for her maturity and foresight in the circumstances &ndash; she was beautiful inside and out.',
		credits:
			'&copy; Original version written Rachel Bennett, Lynieve Austin, Jamie Coe, Jordan Brown (now Christiano Tortoioli) 2010<br /> &copy; Re-arranged version Rachel Bennett, Jamie Coe, Jon Klein 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Jon Klein, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli / Banjo Tom Chudley Evans / Violin Jo Eaton-Kent (now Joni Kent) / Accordion Tom Chudley Evans / Background Vocals Bukola Abdul, Nathan Devonte, Nazarene, Evie Rose / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370644LP'
	},

	azhia: {
		albumName: 'This Music Thing',
		albumKey: 'this_music_thing',
		id: 'this_music_thing-azhia',
		name: 'Azhia',
		number: '11',
		length: '5:26',
		youtubeEmbed: null,
		lyrics:
			"You settled for this place<br/>Old eyes in a child face<br/>Phosphorous blue<br/>Trusting in the arms that caught you<br/>Remember all the old ones taught you	<br/> Test your fear<br/>Learn to persevere<br/>Know the reason you came here<br/><br/> Out to sea the spirit keep<br/>Turtle song waves in the deep<br/>Wait upon their council<br/>Before you lay the walls to build<br/>It's easier to do His will<br/>See the lie of land<br/>The contours and His plan<br/>Listen look and understand<br/><br/> On and on the life force<br/>Till this old world<br/>Runs its course<br/>Spins its last days<br/>This is His way<br/><br/> Azhia Asiatic 	<br/> In your eyes	<br/>I see an old soul<br/>Azhia Asiatic	<br/> You hold on<br/>Stronger than strong<br/>And help us<br/>To make sense of it all<br/><br/> Earth memory has stayed impressed<br/>Millions of light years from the start<br/>The insight of a loving mothers quest<br/>To help a child endure and play her part<br/>To learn the wisdom of the East<br/>Bring understanding to her heart<br/><br/> Water washes stories in the stone<br/>Wind that bends horizons to its might<br/>Soil that many eons rain has known<br/>Fire igniting stars that fill the night<br/>The battles scream but morning comes anew<br/>The living breathing wonder that is you<br/><br/> On and on …<br/><br/> Azhia Asiatic …. <br/><br/> Lay the stones that will keep you here<br/>Wake me when the moon is up<br/>Inside the silence here that's falling down<br/>And the messages that drift ashore",
		localSrc: '/songs/this_music_thing/11-azhia-128.mp3',
		description:
			'Ahzia is a Contemporary Folk Country Blues about a mother&rsquo;s love.<br /> <br /> When I was a child of nine years my mother would wake me from sleep to see the series on TV &lsquo;India My India&rsquo; because she knew and understood my passion for traditional Indian sitar/flute music; I recall the nights at her side, watching this programme, with deep affection and gratitude for her insight and the seeds she sewed in me that grew to become my life long work with music.',
		credits:
			'&copy; Original version written Rachel Bennett, Manley O&rsquo;Connor 2014<br /> &copy; Re-arranged version Rachel Bennett, Max Anstruther, Wes Maebe 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Guitars Wes Maebe / Piano Max Anstruther / Vocals Feat. Kevin Mark Trail / Background Vocals Bukola Abdul, Nathan Devonte, Nazarene / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 418901AQ'
	}
} as const;

export type AlbumKey = 'earthbound' | 'this_music_thing';

export const albumsArr = [
	{ name: 'Earthbound', key: 'earthbound' },
	{ name: 'This Music Thing', key: 'this_music_thing' }
] as const;

export const songsArr = {
	earthbound: Object.values(earthbound),
	this_music_thing: Object.values(this_music_thing)
};

export const songsMap = {
	earthbound,
	this_music_thing
};

export type Song = {
	albumName: string;
	albumKey: string;
	id: string;
	name: string;
	number: string;
	length: string;
	lyrics: string;
	localSrc: string | null;
	description: string;
	credits: string;
	youtubeEmbed: string | null;
};

export const songsList = [...songsArr.this_music_thing, ...songsArr.earthbound];
