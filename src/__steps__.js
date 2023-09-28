/** 
 *               ------------------
 *                  INITIAL SETUP
 *               ------------------
 * 1.visit: console.firebase.google.com
 * 2.create a project (skip google analytics)
 * 3.Register app (create config)
 * 4.install firebase: => npm install firebase
 * 5.add config file to your project
 * 6.DANGER: Do not publish or make firebase config to public by pushing those to github
 *                 -----------------
 *                     INTEGRATION
 *                 -----------------
 * 
 * 7.Visit: Go to Docs > Build > Authentication > WEb > Get Started
 * 8.export app from the firebase.config.js file: export default app
 * 9.Login.jsx: import getAuth from "firebase/auth"
 * ==> if getAuth not auto import got to firebase > project > docs > build > authentication > web> get Started copy paste korte hobe
 * 10.In Login.jsx: create const auth = getAuth(app)
 * 
 *                     -----------------------
 *                          PROVIDER SETUP
 *                     -----------------------
 * 
 * 11.import googleAuthProvider and create a new provider
 * ==> const provider = new GoogleAuthProvider();
 * 12.use singInWithPopUp(auth,provider) and pass auth and provider in button handler
 * 13.activate  sign-in method (google,facebook,github etc) from firebase project authentication
 * 14.[vite]: change 127.0.0.1 to localhost
 * 
 *                     ------------------------
 *                         More Auth Provider
 *                     ------------------------
 * 1.activate the auth provider (create app from github developer , provide Home page url(like http://localhost:5173/) and redirect url from firebase) and get client id, cliend secret from github then paste firebase auth
 * 
 * 2.then go to firebase doc > build> Authentication> web> Github... follow instraction
 * 
 * 
 * 
 * 
*/