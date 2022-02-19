import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCu0zfwsa1sBw5EUzQJUsGrxShuwa12M6s",
  authDomain: "quick-notes-e476a.firebaseapp.com",
  projectId: "quick-notes-e476a",
  storageBucket: "quick-notes-e476a.appspot.com",
  messagingSenderId: "917781645930",
  appId: "1:917781645930:web:a2e0fac2ad57fa39591813",
  measurementId: "G-B7K325Y1N5"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
