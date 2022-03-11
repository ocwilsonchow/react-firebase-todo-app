import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// }

const firebaseConfig = {
  apiKey: 'AIzaSyAB3iDdY7QH8YozILnuLmySfQ9pfAQFILE',
  authDomain: 'react-todo-app-53a9a.firebaseapp.com',
  projectId: 'react-todo-app-53a9a',
  storageBucket: 'react-todo-app-53a9a.appspot.com',
  messagingSenderId: '702168637698',
  appId: '1:702168637698:web:82e3f1517441d70138221b'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
