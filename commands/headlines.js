module.exports = {
    name:'headlines',
    color:'limegreen',
    description:"This command will return the headlines of the day and you can read them using the news command",
    async execute(message,args,color){
        let newsList = require('../main')
        message.channel.send({
            embed:{
                title:"Headlines",
                color:color,
                fields:newsList.map((item,index)=>{
                    return new Object({name:`${index + 1}.) ${item.name}`,value:'\u200b'})
                })
            }
        })
    }
}