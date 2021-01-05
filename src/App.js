import { useEffect, useState } from "react";
import { css } from "@emotion/css";
import { colours } from "./constants";
import firebase from "./firebase";
import createAuthenticator from "./auth";

import SkewLoader from "react-spinners/SkewLoader";

const auth = createAuthenticator(firebase);

const handleSignInWithGoogle = () => {
  auth("google");
};

const handleSignOut = () => firebase.auth().signOut();

const Container = ({ children }) => (
  <div
    className={css`
      background: ${colours.green};
      min-height: 100vh;
      display: flex;
    `}
  >
    {children}
  </div>
);

const Brand = () => (
  <h1
    className={css`
      font-family: "Playfair Display", serif;
      color: white;
      font-size: 35px;
      font-weight: 700;
    `}
  >
    {" "}
    Grologue{" "}
  </h1>
);

const Loading = () => {
  return (
    <div
      className={css`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <Brand></Brand>
      <SkewLoader color={"white"} />
    </div>
  );
};

const Authenticated = ({ user }) => {
  return (
    <div>
      <p className="text-white">You are logged in as {user.displayName}</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

const Unauthenticated = () => {
  return (
    <div
      className={css`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <Brand></Brand>
      <button onClick={handleSignInWithGoogle}>Login with Google</button>
    </div>
  );
};

function App() {
  const [authenticating, setAuthenticating] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setAuthenticating(false);

      if (user) {
        return setUser(user);
      }

      setUser(null);
    });
  }, []);

  if (authenticating) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  if (user) {
    return (
      <Container>
        <Authenticated user={user} />
      </Container>
    );
  }

  return (
    <Container>
      <Unauthenticated />
    </Container>
  );
}

export default App;
