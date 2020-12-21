# 24/7 Discord Music Bot
## Description
A 24/7 music bot for Discord that can play from a list of user-defined videos.
## Set-up guide
**Note: Node.js is required. Grab it [here](https://nodejs.org/).**
1. To set the bot up, you must first of all download the source code by pulling from the repo. You can do this however you want. `git pull https://github.com/connordennison/24-7-music-bot.git` is the method I recommend.
2. The next step is to install the dependencies. Change directory into the folder and install them with `npm i`.
3. After that, rename `config.json.example` to `config.json` and modify the contents inside to contain your bot token, voice channel ID, and a list of videos you want the bot to shuffle through. You can find out how to get the channel ID [here](https://youtu.be/6dqYctHmazc).
4. Penultimately, you need to invite the bot to the server with the voice channel you want to play music in. You can do this by going to the OAuth2 panel in the [Discord Developer Portal](https://discord.com/developers/applications/), checking `bot` and then the permissions that you want the bot to have. The only 2 mandatory permissions are `Connect` and `Speak`. Copy the URL it gives you and paste it into your browser. It will allow you to select a server to invite it to. You must have the `Manage Server` permission in the server you want to add it to in order to invite it.
5. Finally, you can run the bot. Type `npm run bot` in the same directory as the bot to start it. It will connect to the channel and start shuffling from the list of videos in `config.json`.
