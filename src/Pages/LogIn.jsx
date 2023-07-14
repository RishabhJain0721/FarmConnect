import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useFarmContext } from "../Context/useContext";

const LogIn = () => {
  const { currUser,currUserName, setCurrUserName } = useFarmContext();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmittion = (e) => {
    e.preventDefault();

    if (values.name === "" || values.email === "" || values.password === "") {
      setErrorMsg("Please fill all the fields");
      return;
    }
    setErrorMsg("");

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (userCredential) => {
        if (currUser === "farmer") {
          setCurrUserName(values.name);
          navigate("/farmer");
        } else {
          setCurrUserName(values.name);
          navigate("/consumer");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMsg(error.message);
        console.log(errorMsg);
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
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
              className="ip"
            />
          </div>
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
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}> Sign Up </span>
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
