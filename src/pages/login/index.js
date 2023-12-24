import React, { useState } from "react";
import styles from "@/styles/Login.module.scss";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

import Image from "next/image";
import { Button } from "primereact/button";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username:email,
          password:password
        }),
      });

      if (res.ok) {
        window.location.href = "/";
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed", error);
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
            <p>
              <Link href={"/"}>Forgot Password?</Link>
            </p>
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
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default LoginPage;
