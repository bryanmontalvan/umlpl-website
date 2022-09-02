import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCux9IsxIQt4NbJ77JGnlElRHHQtRqmLDU",
  authDomain: "umlpl-website.firebaseapp.com",
  projectId: "umlpl-website",
  storageBucket: "umlpl-website.appspot.com",
  messagingSenderId: "987111731464",
  appId: "1:987111731464:web:d4255c21cf4cd014fd3cbd",
  measurementId: "G-D1QCHT9Q9H"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };