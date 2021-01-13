const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const getHeading = require('./data/heading')
const colors = require('./colors.json')
const {prefix, token}= require('./botconfig.json')
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync(`./commands/`)
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}
client.once('ready', async()=>{
    console.log("Duck Hero is ready to roll!")
    client.user.setActivity("over you",{type:"WATCHING"})
    let newsList = getHeading()
    module.exports = newsList
})

client.on('message', async message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()
    if(!client.commands.has(command)) return
    try{
        let request = client.commands.get(command)
        if(args[0]=== "help") message.channel.send({embed:{
            title:`Command ${request.name}'s description`,
            color:colors[request.color],
            description:request.description
        }})
        else request.execute(message, args, colors[request.color])
    }
    catch(error){
        console.error(error);
        message.reply("There was an issue executing the command 😢!")
    }
})
client.login(token)