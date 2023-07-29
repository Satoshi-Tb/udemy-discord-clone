import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

import "./Login.scss";
const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, googleProvider).catch((err: Error) =>
      alert(err.message)
    );
  };

  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./vite.svg" alt="" />
      </div>
      <Button className="button" onClick={signIn}>
        ログイン
      </Button>
    </div>
  );
};

export default Login;
