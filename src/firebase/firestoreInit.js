import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firestore =  firebaseApp.firestore()
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)
export default firestore