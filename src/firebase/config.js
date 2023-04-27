import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB7MTrMgTCpi0ZiNnNK48CViU2G4KPbSzg",
    authDomain: "finance-tracker-bbba5.firebaseapp.com",
    projectId: "finance-tracker-bbba5",
    storageBucket: "finance-tracker-bbba5.appspot.com",
    messagingSenderId: "272718855211",
    appId: "1:272718855211:web:5e743425c7dcff2d797e6e"
  }

  //initialize all firebase services
  firebase.initializeApp(firebaseConfig)

  //initializing each firebase service e.g firestore service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //export the service
  export { projectFirestore, projectAuth }
  