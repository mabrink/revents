import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLiGDNi3WWpVMGfKnjRygqQd74JjQ8bNs",
    authDomain: "revents-212400.firebaseapp.com",
    databaseURL: "https://revents-212400.firebaseio.com",
    projectId: "revents-212400",
    storageBucket: "revents-212400.appspot.com",
    messagingSenderId: "434901925196"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;