import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import RegisterForm from "./RegisterForm";

function Register() {
  return (
    <div className="landing">
      <h1>
        VIDEO<span>VAULT</span>
      </h1>
      <p>Dynamic video sharing and streaming platform inspired by YouTube.</p>
      <RegisterForm />
      <Button variant="dark">
        <Link className="link" to="/login">
          Already have an account? Login now!
        </Link>
      </Button>
    </div>
  );
}

export default Register;
