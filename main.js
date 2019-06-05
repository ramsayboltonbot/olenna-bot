//created by: zlnoble
//code available at: https://github.com/zlnoble/olenna-bot

const Snoowrap = require('snoowrap');
const {CommentStream} = require("snoostorm");

const myWrapper = new Snoowrap({
    userAgent: 'Ramsay Bolton in Reddit',
    clientId: 'bCrAnVNIQSMjvA',
    clientSecret: 'LXGm6fjD27RcEUBcWs9iSU8OLuc',
    username: 'ramsay-bolton-bot',
    password: 'KingManwich46',
});

myWrapper.config({requestDelay: 1000, continueAfterRatelimitError: true})

const reply_array = ['Let\'s play a game: which body party do you need the least?', 'If you think this has a happy ending, you haven\'t been paying attention.', 'Say "please" again, and you\'ll wish you hadn\'t.', 
		     'Oh, terrible guess!', 'Do I look like a fucking Umber to you?', 
		     'This isn\'t happening to you for a reason. Well, one reason. I enjoy it', 
		     'I\'m not killing you. I\'m just making a few... alterations.', 'My mother taught me not to throw stones at cripples... but my father taught me, "aim for their head"!', 'You reek.....Reek! That\'s a good name for you!', 
		     'WHAT...IS...YOUR...NAME!?.', 'Jealousy bores me. You remember what happens to people who bore me.', 
		     'You smell particularly ripe this evening.', 'I don\'t need an army. I need 20 good men.',  'I prefer being an only child.', 'That\'s all right. You can\'t kill me, I\'m part of you now.'];

new CommentStream(myWrapper, {subreddit:'freefolk', pollTime:1000}).on('item', (item) => {
	var timestamp = new Date().toLocaleString()
	console.log('Comment received at: ' + timestamp)
     	if (item.body.toLowerCase().includes('ramsay') || item.body.toLowerCase().includes('bolton')) { 
        	var index = Math.floor(Math.random()*reply_array.length)
        	item.reply(reply_array[index])
     	}
})
