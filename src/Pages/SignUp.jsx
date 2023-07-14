import React, { useState } from "react";
// import FormField from "../components/formField";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate=useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    location: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmittion = (e) => {
    e.preventDefault();

    if (
      values.name === "" ||
      values.email === "" ||
      values.number === "" ||
      values.password === "" ||
      values.location === ""
    ) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    setErrorMsg("");

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async(userCredential) => {
        const user = userCredential.user;
        console.log(user);
        await updateProfile(user, {
          displayName: values.name,
        });
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
    <div className="signup">
      <div className="container">
        <form className="ui large form">
          <h2 className="ui dividing header">Create an account</h2>

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
              name="number"
              placeholder="Phone Number"
              value={values.number}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, number: event.target.value }))
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
          <div className="field">
            <input
              name="location"
              placeholder="Location"
              value={values.location}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, location: event.target.value }))
              }
              className="ip"
            />
          </div>

          <p className="confirmation">
            Already have an account? <a href="/login">Login</a>
          </p>
          <button
            className="ui button"
            type="submit"
            onClick={handleSubmittion}
          >
            Create Account
          </button>
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
