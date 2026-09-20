// Miragracematt Firebase Initialization

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

console.log("Miragracematt Firebase connected successfully.");
