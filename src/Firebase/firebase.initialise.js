import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialzeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initialzeAuthentication;
