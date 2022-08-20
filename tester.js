const {getTweets}=require('./twitterFunction.js')
const {sendEmail}=require('./sendEmail.js')
const {getAllCollection,updateInfo}=require('./fire.js')

const mainFunc=()=>{
    getAllCollection.then((e)=>{
        e.forEach(doc=>{
          var a =doc.data().keyWord.split(" ")

          const succes=[]

        getTweets(doc.data().twitterUserName).then((dat)=>{
            const tempArray=doc.data().history
            dat.forEach((cur, ind)=>{
                const d=new Set(cur[4-ind][1])
                a.forEach((current)=>{
                    const historySet=new Set(tempArray)

                    if(d.has(current) && !historySet.has(cur[4-ind][0])){
                        
                        tempArray.unshift(cur[4-ind][0])
                        updateInfo(doc.id,{history: tempArray}).catch((err)=>console.log(err))
                        succes.push(cur[4-ind][1].join(" "))
                    }
                    if(tempArray.length>5){
                        console.log('to long')
                        tempArray.pop()
                    }
                })
                
            })
            updateInfo(doc.id,{history:tempArray.slice(0,5)}).catch((err)=> console.log(err))

            if(succes.length!= 0){
                sendEmail(doc.data().userEmail,doc.data().twitterUserName,succes).then((j)=>{
                    console.log("email sent to ",doc.data().userEmail,'Succefully')
                }).catch(err=>{console.log(err)})}
            
        })
        })
      })

}
mainFunc()