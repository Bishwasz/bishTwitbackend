const sendGrid=require("@sendgrid/mail")

const senGridApiKey=''

sendGrid.setApiKey(senGridApiKey)

const sendEmail=(toEmail, userName,text)=>{
    const message={
        to:toEmail,
        from:'bishwas015@gmail.com',
        subject:'Message from bitwit',
        text:`${userName} has recently tweeted "${text}".`
    
    }
    return sendGrid.send(message)
}

module.exports={sendEmail}
