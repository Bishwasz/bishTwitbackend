const e = require('express');
const Twitter = require('twitter');
const client = new Twitter({

    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});



function getTweets(name){
    return new Promise((resolve, reject)=>{
        let params={
            screen_name:name,
            count:5
        }
        var d=[]
        client.get('statuses/user_timeline',params,(err, data)=>{
            if (err){
                reject(err)
            }
            else{
                data.map((tweet,index)=>{
                    var dicKey={}
                    dicKey[index]=[tweet.id,tweet.text.toLowerCase().split(" ")]
                    d.push(dicKey)
                })
                return resolve(d.reverse())
            }
        })
    })
}
getTweets("bha_dub").then(e => {
    e.forEach((ele, index) => {
        console.log(ele[4-index])
        
    });
})

module.exports={getTweets}
