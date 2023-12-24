import React, { use, useState } from "react";
import styles from "@/styles/Login.module.scss";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "primereact/button";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [name, setName] = useState();
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/auth/login`,
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            password: password,
          }),
        }
      );
      const data = await res.json();

      console.log(data);

      if (data.message === "User not found") {
        alert("No user found!");
      } else if (data.message === "Password mismatch") {
        alert("Password mismatch");
      } else if (data) {
        window.sessionStorage.setItem("dair_userId", data._id);
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleSignUp = async () => {
    const userId = Date.now();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userId,
            username: email,
            password: password,
            name: name,
          }),
        }
      );
      const data = await res.json();

      if (data.message === "User already exist") {
        alert("User alreay exists");
      } else if (data.message === "User Created Successfully") {
        window.sessionStorage.setItem("dair_userId", userId);
        window.location.href = "/";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.page_container}>
      <div className={styles.background}>
        <img src="/login-bg.png" />
        <div className={styles.welcome_container}>
          <h1>
            Welcome to <b>MERINA</b>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className={styles.sidebar}>
        <div>
          <Image
            src="/logo.png"
            height={151.2}
            width={180}
            // objectFit={"contain"}
          />
        </div>
        {isLogin ? (
          <>
            <div className={styles.form_container}>
              <h1>Enter your username and password</h1>
              <div className={styles.form_inputs}>
                <span className="p-float-label">
                  <InputText
                    id="inputtext"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="inputtext">Email</label>
                </span>
                <span className="p-float-label">
                  <InputText
                    id="inputtext"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="inputtext">Password</label>
                </span>
                <div
                  className={styles.forgetPasswordTab}
                  onClick={() => setIsLogin(false)}
                >
                  <p>signup</p>
                  <Link href={"/"}>Forgot Password?</Link>
                </div>
                <div className={styles.checkbox_container}>
                  <Checkbox
                    checked={isRemember}
                    onChange={(e) => setIsRemember(e.checked)}
                  ></Checkbox>
                  <label>Remember Me</label>
                </div>
              </div>
            </div>
            <Button
              label="Submit"
              disabled={email === "" || password === ""}
              onClick={handleLogin}
            />
          </>
        ) : (
          <>
            <div className={styles.form_container}>
              <h1>Enter your Name, username and password</h1>
              <div className={styles.form_inputs}>
                <span className="p-float-label">
                  <InputText
                    id="inputtext"
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="inputtext">Name</label>
                </span>
                <span className="p-float-label">
                  <InputText
                    id="inputtext"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="inputtext">Email</label>
                </span>
                <span className="p-float-label">
                  <InputText
                    id="inputtext"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="inputtext">Password</label>
                </span>
                <div className={styles.forgetPasswordTab}>
                  <p onClick={() => setIsLogin(true)}>Login</p>
                  <Link href={"/"}>Forgot Password?</Link>
                </div>
                <div className={styles.checkbox_container}>
                  <Checkbox
                    checked={isRemember}
                    onChange={(e) => setIsRemember(e.checked)}
                  ></Checkbox>
                  <label>Remember Me</label>
                </div>
              </div>
            </div>
            <Button
              label="Submit"
              disabled={email === "" || password === "" || name === ""}
              onClick={handleSignUp}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
