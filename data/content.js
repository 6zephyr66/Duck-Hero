module.exports= function getContent(link){
    return new Promise(function(resolve, reject){
        const cheerio = require('cheerio')
        let finalResult = []
        const axios = require('axios')
        axios.get(link).then(res=>{
            const $ = cheerio.load(res.data)
            $('p').each((index, element)=>{
                finalResult[index] = $(element).text()
            })
            resolve(finalResult)
            reject(new Error("Something's wrong"))
        })
        .catch(err=> console.error(err))
    })
}