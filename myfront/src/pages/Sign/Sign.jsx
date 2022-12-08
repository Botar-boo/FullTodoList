import React from 'react';
import MyInput from "../../components/MyInput/MyInput";
import classes from './Sign.module.css'
import MyButton from "../../components/MyButton/MyButton";

const SignIn = () => {
    return (
        <div>
            <div className={classes.signinflds}>
                <MyInput placeholder="Login"></MyInput>
                <br/>
                <MyInput placeholder="Password"></MyInput>
            </div>
            <div className={classes.signinbtn}>
                <MyButton>
                    Sign in
                </MyButton>
            </div>
            <div className={classes.signupbtn}>
                <MyButton style={{ width: 90 }}>
                    Sign up
                </MyButton>
            </div>
        </div>
    );
};

export default SignIn;