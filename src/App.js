import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use useEffect to add the onAuthStateChanged listener once
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const register = async () => {
    try {
      setLoading(true);
      setError(null);
      const newUser = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setUser(newUser);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const login = async () => {
    try {
      setLoading(true);
      setError(null);
      const loggedInUser = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setUser(loggedInUser);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button onClick={register}>Create User</button>
      </div>

      <div>
        <h3>Login</h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button onClick={login}>Login</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {user && (
        <div>
          <h4>User Logged In:</h4>
          {user.email}
          <button onClick={logout}>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default App;
