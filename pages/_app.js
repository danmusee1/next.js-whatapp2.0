import '../styles/globals.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from "./login";
import {auth, db} from "../firebase";

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  if (!user) return <Login/>;

  return <Component {...pageProps} />;
}

export default MyApp
