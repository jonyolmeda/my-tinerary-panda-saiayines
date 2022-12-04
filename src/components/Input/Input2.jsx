import { React, useRef } from "react";
import "./input.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../../api/url";
import loginAction from "../../redux/actions/loginForm";
import { useNavigate } from "react-router-dom";

export default function Input2() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();
  const dispatch = useDispatch();
  let store = useSelector((state) => state.loginReducer);
  const navigate = useNavigate();

  console.log(store)
async function saveData(e) {
    e.preventDefault();
    let logged = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      let res = await axios.post(`${URL}/auth/signin`, logged);
      let tokenx = res.data.response.token;
      if (res.data.success) {
        dispatch(loginAction.getToken(tokenx));
        localStorage.setItem("token", tokenx);
        Swal.fire({
          icon: "success",
          text: res.data.message,
        });
        navigate('/')
      } else {
        Swal.fire({
          icon: "error",
          title: "We found an error... ",
          text: `Errors: ${res.data.message.join(" , ")}`,
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "We found an error...",
        text: `Errors: You have entered an invalid email or password.`,
      });
    }
  }

  return (
    <form ref={formRef}>
      <label>
        Email:
        <input
          className="inputin"
          type="email"
          id="emailSignIn"
          ref={emailRef}
          required
        />
      </label>
      <label>
        Password:
        <input
          className="inputin"
          type="password"
          id="passSignIn"
          ref={passwordRef}
          required
        />
      </label>
      <div className="container-submit-two">
        <input
          onClick={saveData}
          className="submit-signup"
          type="button"
          value="Submit"
        />
      </div>
    </form>
  );
}
