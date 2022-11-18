import firebase from "firebase/compat/app";
import "firebase/compat/auth";


// import { getAuth } from 'firebase/auth';
// import { getFirestore, doc, getDoc} from 'firebase/firestore';

export const app = firebase.initializeApp ({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
});

 
// export const auth = getAuth(appF)
// const db = getFirestore(appF) //base de datos

// export async function userExist(uid){
//   const docRef = doc(db, 'users', uid)
//   const res = await getDoc(docRef)
//   console.log(res);
//   return res.exists();
// }