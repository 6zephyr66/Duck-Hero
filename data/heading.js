module.exports  = function getHeading(){
    const axios = require('axios')
    const cheerio = require('cheerio')
    let link = "https://www.cbr.com/category/anime-news/"
    let newsList = []
    axios.get(link).then(res=> {
        const $ = cheerio.load(res.data)
        $('.bc-title').each((index, element) => newsList[index] = {name: $(element).text().trim(), link:`https://www.cbr.com${$(element).children('a').attr('href')}`, image: $(element).parents('article').find('source').eq(0).attr('data-srcset').split(" ").shift()})
    })
    return newsList
} 

