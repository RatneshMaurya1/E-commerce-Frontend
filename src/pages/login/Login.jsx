import React, { useState } from 'react'
import styles from "./login.module.css"
import toast from 'react-hot-toast'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../components/firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSignUp = async (e) => {
        e.preventDefault()
        if(!email.trim() || !password.trim()){
            return toast.error("Please fill all the fields")
        }
        setLoading(true)
        try {
            await signInWithEmailAndPassword(auth,email,password)
            .then((user) => {
                toast.success("User Logged in successfully")
                localStorage.setItem("userId",user.user.uid)
                setEmail("")
                setPassword("")
                return navigate("/")
            })
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
   return (
    <div className={styles.SignupContainer}>
      <div className={styles.SignupForm}>
        <h2>Login</h2>
        <form onSubmit={handleSignUp}>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='enter your email'  value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className={styles.signUpBtn}>{loading ? "Loading..." : "Login"}</button>
            <p className={styles.alreadyAccount}>Don’t have an account ? <span onClick={() => navigate("/signup")}>Sign Up</span></p>
        </form>
      </div>
    </div>
  )
}

export default Login
