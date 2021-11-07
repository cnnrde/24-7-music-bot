# 24/7 Discord Music Bot [![Run on Repl.it](https://repl.it/badge/github/connordennison/24-7-music-bot)](https://repl.it/github/connordennison/24-7-music-bot)

**This project is currently based off of Discord.js v12. I do not have plans to transition it to v13 until I have a better understanding of the new voice library.**

## Description

A 24/7 music bot for Discord that can play from a list of user-defined videos.

## Set-up guide

**Note: [Node.js](https://nodejs.org/) and [ffmpeg](https://ffmpeg.org/) are required.**

1. First, you need to create a bot user for Discord. You can do this by going to the [Discord Developer Dashboard](https://discord.com/developers/applications). Create a new app and add a bot user by going to the `Bot` tab at the side of the screen.

2. The next step is to invite the bot to your server. You can do this by going to the `OAuth2` panel in the [Discord Developer Dashboard](https://discord.com/developers/applications/), checking `bot` and then the permissions that you want the bot to have. The only 3 mandatory permissions are `View Channels`, `Connect`, and `Speak`. Copy the URL it gives you and paste it into your browser. It will ask you to select a server to invite it to. You must have the `Manage Server` permission in the server to add it.

3. The bot is now in your server. The next step is to set the bot up to play music. Download the source code by pulling from this repo. You can do this however you want. Installing `git` and using `git clone https://github.com/connordennison/24-7-music-bot.git` is the method I recommend.

4. The next step is to install the dependencies. Change directory into the folder and install them with `npm i`.

5. After that, rename `config.json.example` to `config.json` and modify the contents inside to contain your voice channel ID, and a list of videos you want the bot to shuffle through. You can find out how to get the channel ID [here](https://youtu.be/6dqYctHmazc). For one singular video the list will only have one element, and should look `["like_this"]`. For multiple videos, the list will need multiple elements separated by commas, and should look `["like", "this"]`. **All video URLs need `https://` at the beginning.**

6. Next you need to add your bot token to the environment variables. This will be different depending on whether you're running on [Replit](https://replit.com) or not. If you're not running on Replit, rename `.env.example` to `.env` and replace the dummy token with your bot token from the Discord Developer Dashboard. If you're on Replit, go to the secrets tab on the left hand side of the screen ![secrets tab](assets/secrets.png) and create a new secret. In the `key` text box enter `TOKEN`, and in the `value` box enter your bot token.

7. Finally, you can run the bot. To run on Replit, simply press ctrl+enter or click the run button at the top of the screen. If you want to have your bot always on, set up UptimeRobot to run on your Repl's URL. Type `npm run bot` (or `yarn bot` if you have yarn) in the same directory as `package.json` to start it. It will connect to the channel and start shuffling from the list of videos in `config.json`.
