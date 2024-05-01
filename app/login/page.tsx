"use client";
import { useState } from "react";
import styles from "./Login.module.scss";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>{isLogin ? "Login" : "Register"}</h2>
          <form>
            {!isLogin && (
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={styles.input}
                  placeholder="Enter your full name"
                />
              </div>
            )}
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder="Enter your email"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                id="password"
                type="password"
                className={styles.input}
                placeholder="Enter your password"
              />
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.button} type="submit">
                {isLogin ? "Login" : "Register"}
              </button>
              <button
                className={styles.toggleButton}
                type="button"
                onClick={toggleAuthMode}
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
