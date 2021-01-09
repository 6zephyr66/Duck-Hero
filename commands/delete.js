module.exports={
    color:'red',
    name:'delete',
    description:'This is to delete the number of messages mentioned. The number of messages to delete should be greater than 1 and less than 100 📧',
    execute(message, args, color){
        message.channel.bulkDelete(args[0])
    }
}