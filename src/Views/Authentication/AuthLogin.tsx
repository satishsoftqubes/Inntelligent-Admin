import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginButtonIcon from "../../../src/assets/Images/Icons/LoginButtonIcon.svg";
import LoginKeyIcon from "../../../src/assets/Images/Icons/LoginKeyIcon.svg";
import LoginUserIcon from "../../../src/assets/Images/Icons/LoginUserIcon.svg";
import { Login } from "../../services/LoginServices";

function AuthLogin() {
  const [IsloginClick, setIsloginClick] = useState(false);
  const [ShowPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    userName: "",
    password: "",
    clientID: null,
    errors: {
      userName: "",
      password: "",
    },
  });

  async function loginClick() {
    if (validate()) {
      setIsloginClick(true);
      const res: any = await Login(input);
      setIsloginClick(false);

      if (res.data.statusCode === 200) {
        const data = res.data.data;
        navigate("/clientSelection", { state: { data: data, inputValue: input } });
      } else {
        toast.error("Please Enter Valid Credentials", {
          // icon: "🚀",
          theme: "colored",
        });
      }
    }
  }
  function validate() {
    let isValid = true;
    const errors: any = {};
    if (!input.userName) {
      errors.userName = "Email";
      isValid = false;
    } else {
      errors.userName = "";
    }

    if (!input.password) {
      errors.password = "Password is required";
      isValid = false;
    } else {
      errors.password = "";
    }

    return isValid;
  }

  function showPassword() {
    setShowPassword(!ShowPassword);
  }
  return (
    <>
      <div className="login-title">
        Sign in to
        <span className="d-block">
          your account <span className="three-dots">...</span>
        </span>
      </div>
      <p className="login-description">
        Specific-Measureable-Action Plan Driven-Realistic-TIme Oriented Customer Relationship
        Management System, built by hoteliers for hoteliers, offering organization, automation and
        synchronization of all your sales offers via a cloud based platform.
      </p>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <span>
              <img src={LoginUserIcon} alt="" width={24} height={24} />
            </span>
          </InputGroup.Text>
          <FormControl
            type="email"
            placeholder="Username"
            aria-label="Username"
            name="userName"
            aria-describedby="basic-addon1"
            onChange={(e) =>
              setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            }
          />
        </InputGroup>
        <InputGroup className="mb-3 position-relative">
          <InputGroup.Text id="basic-addon1">
            <span>
              <img src={LoginKeyIcon} alt="" width={24} height={24} />
            </span>
          </InputGroup.Text>
          <FormControl
            onChange={(e) =>
              setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            }
            type={ShowPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            autoComplete="current-password"
          />

          <div className="eye-visible">
            {ShowPassword ? (
              <span
                role="button"
                tabIndex={-1}
                onClick={() => showPassword()}
                onKeyDown={() => showPassword()}
              >
                <i className="fa-solid fa-eye-slash"></i>
              </span>
            ) : (
              <span
                role="button"
                tabIndex={-1}
                onClick={() => showPassword()}
                onKeyDown={() => showPassword()}
              >
                <i className="fa-solid fa-eye"></i>
              </span>
            )}
          </div>
        </InputGroup>
        <Form.Group className="form-button d-flex justify-content-between">
          {IsloginClick === false ? (
            <button onClick={loginClick} className="btn btn-primary" type="button">
              <span className="me-3">
                <img src={LoginButtonIcon} alt="" />
              </span>
              Login
            </button>
          ) : (
            <button className="btn btn-primary" type="button">
              <span className="me-3">
                <i className="fa-duotone fa-spinner fa-spin"></i>
                {/* <img src={LoginButtonIcon} alt="" /> */}
              </span>
              Login...
            </button>
          )}
          <Link className="forgot-link d-flex align-items-center" to="/forgotPassword">
            Forgot Password ?
          </Link>
        </Form.Group>
      </Form>
    </>
  );
}

export default AuthLogin;
