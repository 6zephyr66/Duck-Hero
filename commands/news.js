module.exports={
    name:'news',
    color:'skyblue',
    description:"This command will show you the news related to the anime or manga you ask for",
    async execute(message, args, color){
        const axios = require('axios')
        let link = "https://www.cbr.com/category/anime-news/"
        const cheerio = require('cheerio')
        var newsList = []
        axios.get(link).then(res=>{
            const $ = cheerio.load(res.data)
            $('.bc-title').each((index, element) => newsList[index] = {name: $(element).text().trim(), link:`https://www.cbr.com${$(element).children('a').attr('href')}`, img: $(element).parents('article').find('source').eq(0).attr('data-srcset').split(" ").shift()})
            message.reply({
                embed:{
                    "title": newsList[args].name,
                    "description":`To read more about this topic, go to this link 👉🏻 ${newsList[args].link}`,
                    "color":color,
                    "image":{
                        "url":`${newsList[args].img}`
                    }
                }
            })
        })
        .catch(err=>console.error(err))
    }
}