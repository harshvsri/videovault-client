import LoginForm from "./LoginForm";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="landing">
      <h1>
        VIDEO<span>VAULT</span>
      </h1>
      <p>Dynamic video sharing and streaming platform inspired by YouTube.</p>
      <LoginForm />
      <Button variant="dark">
        <Link className="link" to="/register">
          New to VideoVault? Sign up now!
        </Link>
      </Button>
    </div>
  );
}

export default Login;
