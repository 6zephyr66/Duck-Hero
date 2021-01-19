const content = require('../data/content')

module.exports={
    name:'news',
    color:'skyblue',
    description:"This command will show you the news related to the anime or manga you ask for",
    async execute(message, args, color){
            let newsList = require('../main')
            const getContent = require('../data/content')
            getContent.getContent(newsList[args].link).then(content=>{
                message.reply({
                    embed:{
                        "title": newsList[args].name,
                        "description":`${content[0]}`,
                        "color":color,
                        "image":{
                            "url":`${newsList[args].img}`
                        }
                    }
                }).then(message => {
                    message.react('⏪')
                    message.react('⏩')
                    // console.log(getContent(newsList[args].link));
                })
            })
            
    }
}