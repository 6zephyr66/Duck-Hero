module.exports={
    name:'8ball',
    description:'This command will answer all your questions 😝',
    color:'cyan',
    async execute(message,args, color){
        let replies = require('../data/eightBallReplies')
        let reply = replies[Math.floor(Math.random() * replies.length)]
        message.channel.send(`${reply}`)
    }
}