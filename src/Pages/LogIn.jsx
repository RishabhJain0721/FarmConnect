import React, { useState } from "react";
// import FormField from "../components/formField";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const LogIn = () => {

  const navigate=useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmittion = (e) => {
    e.preventDefault();

    if (
      values.email === "" ||
      values.password === ""
    ) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    setErrorMsg("");

    signInWithEmailAndPassword(auth,values.email,values.password)
    .then(async(userCredential) => {

      navigate("/aftersignup");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });

  };

  return (
    <div className="login">
      <div className="container">
        <form className="ui large form">
          <h2 className="ui dividing header">Login</h2>

          <div className="field">
            <input
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
              className="ip"
            />
          </div>
          <div className="field">
            <input
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, password: event.target.value }))
              }
              className="ip"
            />
          </div>
          
          <p className="confirmation">
          Don't have an account? <a href="/signup">Sign up</a>
          </p>
          <button
            className="ui button"
            type="submit"
            onClick={handleSubmittion}
          >
            Login
          </button>
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default LogIn;
