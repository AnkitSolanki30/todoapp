import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import * as actions from "./_redux/SignupAction";

const Signup = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [userValidate, setUserValidate] = useState()
    const [passwordValidate, setpasswordValidate] = useState()

    const validateUser = (usr) => {
        // eslint-disable-next-line
        if (usr.length == "") {
            setUserValidate("Plesae enter UserName")

        } else {
            setUserValidate("");
        }
    }

    const validatePassword = (pass) => {
        // eslint-disable-next-line
        if (pass.length == "") {
            setpasswordValidate("Plesae enter Password")

        } else if (pass.length < 4) {
            setpasswordValidate("Minimum 4 char required")

        }
        else {
            setpasswordValidate("");
        }
    }

    const handleSignup = async () => {
        // eslint-disable-next-line
        if (userValidate == "" && passwordValidate == "") {
            let data = { user, password };
            await dispatch(actions.signup(data));
            navigate("/");
        } else {
            validateUser(user)
            validatePassword(password)
        }
    }

    return (
        <>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1> TODO APP </h1>
                        <h3> SignUp </h3>
                    </div>
                </div>

                <form className="form">
                    <div className="row p-2 justify-content-center">
                        <div className="col-4">
                            <input
                                type="text"
                                value={user}
                                onChange={(e) => {
                                    setUser(e.target.value)
                                    validateUser(e.target.value)
                                }}
                                className=" w-100 form-control"
                                placeholder="User Name"
                                maxLength="10"
                            />
                            {// eslint-disable-next-line
                                userValidate == "" ? null :
                                    <p style={{ color: "red" }}>{userValidate}</p>
                            }
                        </div>
                    </div>
                    <div className="row p-2 justify-content-center">
                        <div className="col-4">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    validatePassword(e.target.value)
                                }}
                                className="w-100 form-control"
                                placeholder="Password"
                            />
                            {// eslint-disable-next-line
                                passwordValidate == "" ? null : (
                                    <p style={{ color: "red" }}>{passwordValidate}</p>
                                )}
                        </div>
                    </div>
                    <div className="row p-2 justify-content-center">
                        <div className="col-4 text-center">
                            <button
                                type="button"
                                className="btn btn-primary btn-border-radius w-75 "
                                onClick={handleSignup}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup