module.exports={
    name:'news',
    color:'skyblue',
    description:"This command will show you the news related to the anime or manga you ask for",
    async execute(message, args, color){
            let newsList = require('../main')
            let getContent = require('../data/content')
            message.reply({
                embed:{
                    "title": newsList[args].name,
                    "description":`${getContent(newsList[args].link, 3)}`,
                    "color":color,
                    "image":{
                        "url":`${newsList[args].img}`
                    }
                }
            }).then(message => {
                message.react('⏪')
                message.react('⏩')    
            })
        console.log(`${getContent(newsList[args].link, 3)}`);
    }
}