INSTRUCTIONS:

1. Create your bot account just as you would a regular reddit account. Navigate to your preferences tab, then go to apps. Register your bot as a script. Put in dummy websites where it requires them (i.e. https://example.com). Your bot will be given 2 important character strings; a "secret" and an "id". Make a note of them; these values will be used later to fill in data for our program.

2. Open up main.js. Fill in the data for myWrapper using the information from above, along with your reddit username and password.

3. Change lines in 'reply_array' to the quotes you want your bot to say.

4. Change the triggers from 'olenna' and 'queen of thorns' where the CommentStream is instantiated to whatever you want your bot to respond to. You can have as many or as few as you would like. Note that it is currently set to ignore case when searching for the trigger.

5. Note that the subreddit is currently set to 'freefolk'. This, of course, can be changed to any subreddit.

6. Make sure you have Node.js installed. If you don't, a quick google search will clue you in on how it's done. The process varies between operating systems. Node.js is very lightweight and easy to install.

7. Once you have Node.js installed, open up a terminal/cmd prompt and navigate to the project's directory. Once you're in the project directory, type 'npm install' to install the project's dependencies.

8. After that, if everything is done correctly, your bot should be ready to use. Just type  'node main.js' in the terminal/cmd window to run the application.


NOTES:
   - Early on, you may find error messages that pop up referencing a rate limit with a given timeout. This will happen while your bot has low karma; reddit is just throttling posting to prevent spam on new accounts.

   - Your bot will only run so long as you have the application running. Should be obvious, but I thought I would point that out.

   - I set up the bot to print out every time it receives a comment. If you find this annoying, you can nix the console.log() in the code; it's not necessary for the program to run.

   - If you have any further questions, feel free to message me @ reddit.com/user/olenna-bot
