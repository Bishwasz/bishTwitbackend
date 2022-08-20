const e = require('express');
const Twitter = require('twitter');
const client = new Twitter({

    consumer_key: 'WGB0n7zYyGqUpSVbrM2EPOVZl',
    consumer_secret: 'NfA9ib9SqLFWEWBHemIM7V0RsfucVk54HSBidLSeyv8pxr0kvp',
    access_token_key: '4537367835-j6WE9AEaj3EPWqEdjpBZs4AYP8n9BFSBY2lLlfN',
    access_token_secret: 'K0e4UuUpgJY5kA7xKEqffxH82Oan1bxRGlyWrcjg35DWo'
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
