import React, { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch(console.error);
  };

  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
  }, []);

  if (!user) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Добре дошъл в SosBook</h1>
        <button onClick={login}>Вход с Google</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Здравей, {user.displayName || user.email}</h1>
      <p>Имаш достъп до приложението!</p>
      <button onClick={logout}>Изход</button>
    </div>
  );
}

export default App;
