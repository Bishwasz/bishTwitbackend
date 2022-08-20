const sendGrid=require("@sendgrid/mail")

const senGridApiKey='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'

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