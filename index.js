const Discord = require("discord.js")
const ytdl = require("ytdl-core")
const {
    token,
    channel_id,
    video_urls
} = require("./config.json")
const client = new Discord.Client()

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    const voiceChannel = client.channels.cache.get(channel_id)
    voiceChannel.join().then(connection => {
        console.log("Joined voice channel")
        const dispatcher = connection.play(ytdl(video_urls[Math.floor(Math.random() * video_urls.length)], { filter: "audioonly" }))
        dispatcher.on("finish", handler => {
            connection.play(ytdl(video_urls[Math.floor(Math.random() * video_urls.length)], { filter: "audioonly" }))
        })
        dispatcher.on("error", err => {
            console.log(err)
        })
    })
})

client.login(token)