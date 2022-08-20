// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");

const { getFirestore, setDoc, addDoc, collection,doc, getDoc, updateDoc, getDocs } = require("firebase/firestore");
const { firestore } = require("firebase-admin");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()
const citiesRef = collection(db, "usersData");
const getAllCollection =   getDocs(collection(db, "usersData"));


const addInfo=(uid, val)=> {
  getAllCollection.then(e=>{
    var l=new Set()
    e.forEach((j)=>{
      l.add(j.id)
    })
    if(!l.has(uid)){
      val['history']=[]
      setDoc(doc(db,"usersData",uid),val).catch((err)=>{console.log(err)})
    } 
    else{
      updateDoc(doc(db,"usersData",uid),val).catch((err)=>{console.log(err)})
    }
  })
}

const getInfo=async(uid)=>{

 return getDoc(doc(db,"usersData",uid))
}

const updateInfo=(uid,val)=>{
  return updateDoc(doc(db,"usersData",uid),val)}
  

module.exports={addInfo, getInfo, updateInfo,getAllCollection}
