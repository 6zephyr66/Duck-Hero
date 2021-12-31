module.exports={
    name:'joke',
    color:'yellow',
    description:"This command returns a random joke, because 'Laughter is not the best medicine'😁'",
    async execute(message,args,color){
        message.channel.send({embed: {
        title:'The joke you never asked for 🙃',
        color: 3447003,
        description: "This command is currently being checked"
    }})
}}
