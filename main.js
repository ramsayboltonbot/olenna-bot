//created by: zlnoble
//code available at: https://github.com/zlnoble/olenna-bot

const Snoowrap = require('snoowrap');
const {CommentStream} = require("snoostorm");

const myWrapper = new Snoowrap({
    userAgent: 'YOUR INFO GOES HERE',
    clientId: 'YOUR INFO GOES HERE',
    clientSecret: 'YOUR INFO GOES HERE',
    username: 'YOUR INFO GOES HERE',
    password: 'YOUR INFO GOES HERE',
});

myWrapper.config({requestDelay: 1000, continueAfterRatelimitError: true})

const reply_array = ['Well, if it isn\'t the famous tart Queen Cersei.', 'A sword swallower through and through.', 'Tell Cersei. I want her to know it was me.', 
		     'You look like an angry little boy. Don\'t presume to tell me what I need.', 'War is war, but killing a man at a wedding? Horrid.', 
		     'I\'m leaving this wretched city as fast as I can before that shoeless zealot throws me into one of his cells.', 
		     'Marrying a Targaryen was all the rage back then.', 'Do shut up, dear.', 'Anything from you? No? Good. Let the grown women speak.', 
		     'The lords of Westeros are sheep. Are you a sheep? No. You\'re a dragon. Be a dragon.', 'Put the pen down dear, we both know you\'re not writing anything', 
		     'He really was a cunt, wasn\'t he?', 'Get some rest, dear. You look appalling.',  'I wonder if you\’re the worst person I\’ve ever met.', 'What is your name again? Barbaro?', 
		     'I was told you were drunk, impertinent, and thoroughly debauched.', 'The cheese will be served when I want it served, and I want it served now.', 
		     'I\’ve known a great many clever men. I\’ve outlived them all. You know why? I ignored them.', 'But it\'s a natural thing, two boys having a go at each other beneath the sheets.', 
		     'The world is overflowing with horrible things, but they\'re all a tray of cakes next to death.', 'My grandson is the pride of Highgarden. The most desirable bachelor in all seven kingdoms. Your daughter is...old.', 
		     'Are you here to seduce me?', 'Oh, you can smell the shit from five miles away', 'I would have thought we were perfectly clear the first time. You\'re not welcome.', 'That is hardly your concern', 'Idiots, help your king.', 
		     'Kiss me, child.', 'Speak freely, child. We would never betray your confidence, I swear it.', 'Ah. That\'s a pity.', 'You love her. You really do love her. You poor fool. She\'ll be the end of you.'];

new CommentStream(myWrapper, {subreddit:'freefolk', pollTime:1000}).on('item', (item) => {
	var timestamp = new Date().toLocaleString()
	console.log('Comment received at: ' + timestamp)
     	if (item.body.toLowerCase().includes('olenna') || item.body.toLowerCase().includes('queen of thorns')) { 
        	var index = Math.floor(Math.random()*reply_array.length)
        	item.reply(reply_array[index])
		console.log('Reply generated.')
     	}
})
