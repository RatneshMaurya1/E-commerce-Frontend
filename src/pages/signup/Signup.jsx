import React, { useState } from "react";
import styles from "./signup.module.css";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      return toast.error("Please fill all the fields");
    }
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (user) => {
          console.log(user);
          toast.success("User created successfully");
          setEmail("");
          setPassword("");
          return navigate("/login");
        }
      );
    } catch (error) {
      toast.error(error.message);
    }finally{
        setLoading(false)
    }
  };
  return (
    <div className={styles.SignupContainer}>
      <div className={styles.SignupForm}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.signUpBtn}>{loading ? "Loading..." : "Sign Up"}</button>
          <p className={styles.alreadyAccount}>
            Already have an account ?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
