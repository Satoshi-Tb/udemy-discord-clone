import { Button } from "@mui/material";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./vite.svg" alt="" />
      </div>
      <Button className="button">ログイン</Button>
    </div>
  );
};

export default Login;
