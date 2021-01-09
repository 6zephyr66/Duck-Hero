module.exports={
    name:'ping',
    description:'Ping!',
    reply:'Pong 🏓',
    async execute(message, args, color){
        message.channel.send(`**${this.reply}**`)
    }
}