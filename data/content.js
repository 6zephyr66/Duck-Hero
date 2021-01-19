module.exports.getContent = function getContent(link){
    const axios = require('axios')
    const cheerio = require('cheerio')
    let finalResult = []
    axios.get(link).then(res=>{
        const $ = cheerio.load(res.data)
        $('p').each((index, element)=>{
            finalResult[index] = $(element).text()
        })
        console.log(finalResult);
    })
    .catch(err=> console.error(err))
    return Promise.resolve(finalResult)
}