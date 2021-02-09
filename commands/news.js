module.exports={
    name:'news',
    color:'skyblue',
    description:"This command will show you the news related to the anime or manga you ask for",
    async execute(message, args, color){
            let newsList = require('../main')
            let newArg = args - 1
            let newsNumber = 0
            if(newArg<0) {
                message.reply("Enter a number greater than 0 😡😠")
                return
            }
            else{ 
            const getContent = require('../data/content')
            getContent(newsList[newArg].link).then(content=>{
                message.reply({
                    embed:{
                        "title": newsList[newArg].name,
                        "color":color,
                        "image":{
                            "url":`${newsList[newArg].image}`
                        },
                        "description":`${content[newsNumber]}`
                    }
                }).then(message => {

                    const collector = message.createReactionCollector((reaction, user)=>{
                        return reaction.emoji.name === '⏩' || reaction.emoji.name === '⏪';
                    },{time:300000})

                    Promise.all([
                        message.react('⏪'),
                        message.react('⏩')
                    ])
                    collector.on('collect', (reaction, user)=>{
                        console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
                        if(reaction.emoji.name === "⏩"){
                            newsNumber+=1;
                            message.edit({
                                embed:{
                                    "title":newsList[newArg].name,
                                    "color":color,
                                    "image":{
                                        "url":`${newsList[newArg].image}`
                                    },
                                    "description":`${content[newsNumber]}`
                                }
                            })
                        }
                        else if(reaction.emoji.name === "⏪"){
                            newsNumber-=1;
                            message.edit({
                                embed:{
                                    "title":newsList[newArg].name,
                                    "color":color,
                                    "image":{
                                        "url":`${newsList[newArg].image}`
                                    },
                                    "description":`${content[newsNumber]}`
                                }
                            })
                        }
                    })

                    collector.on('end', collected=>{
                        console.log(`Collected ${collected.size} items`);
                    })
                })
            })
            .catch(err=>console.error(err))
        }
    }
}