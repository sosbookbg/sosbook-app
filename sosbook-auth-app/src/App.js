
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSc8R6zpHVE-6D8B5dXUXgaOE0MXRfaIA",
  authDomain: "sosbook-app.firebaseapp.com",
  projectId: "sosbook-app",
  storageBucket: "sosbook-app.appspot.com",
  messagingSenderId: "188604167437",
  appId: "1:188604167437:web:5e6c3461f3bbe0bde56c44"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, provider).catch(console.error);
  };

  const handleLogout = () => {
    signOut(auth).catch(console.error);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>SosBook App</h1>
      {user ? (
        <>
          <p>Здравей, {user.displayName || user.email}!</p>
          <button onClick={handleLogout}>Изход</button>
        </>
      ) : (
        <button onClick={handleLogin}>Вход с Google</button>
      )}
    </div>
  );
}
