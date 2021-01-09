module.exports={
    name:'8ball',
    description:'This command will answer all your questions 😝',
    color:'cyan',
    async execute(message,args, color){
        var replies = [ "As I see it, yes.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "It is certain",
            "Don't count on it",
            "It is decidely so",
            "No way",
            "There is a chance",
            "I don't think so",
            "Maybe",
            "It depends on you",
            "If you say so",
            "It's already written",
            "Your destiny says so"
        ]
        let reply = replies[Math.floor(Math.random() * replies.length)]
        message.channel.send(`${reply}`)
    }
}