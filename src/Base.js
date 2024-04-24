import Rebase from 're-base';
import firebase from 'firebase';

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAnlmzXaw-4pDo_YGnO_NpfJP0_He3cgCc",
    authDomain: "wesbos-reactbeginner.firebaseapp.com",
    databaseURL: "https://wesbos-reactbeginner-default-rtdb.firebaseio.com"  
})

const base = Rebase.createClass(fireBaseApp.database());

export {fireBaseApp}
export default base