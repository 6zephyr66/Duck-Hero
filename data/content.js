module.exports = function getContent(link, number){
    const axios = require('axios')
    const cheerio = require('cheerio')
    let result = []
    axios.get(link).then(res=>{
        const $ = cheerio.load(res.data)
        $('p').each((index, element)=>{
            result[index] = $(element).text()
            console.log($(element).text());
        })
    })
    console.log(result);
    // return result[number]
}