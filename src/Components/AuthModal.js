import React, { useState } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { getUser } from "../redux/reducer"

const AuthModal = ({getUser}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    axios
      .post("/auth/login", { email, password })
      .then(results => getUser(results.data))
      .catch(err => console.log(err))
  }

  const register = () => {
    axios
      .post("/auth/register", { email, password })
      .then(results => getUser(results.data))
      .catch(err => console.log(err))
  }

  return (
    <div className="auth-modal">
      <input
        value={email}
        placeholder="enter email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="enter password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
      <button>Cancel</button>
    </div>
  )
}

export default connect(null, { getUser })(AuthModal)
