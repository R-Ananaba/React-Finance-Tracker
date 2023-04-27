import { useState } from 'react'
import { UserLogin } from '../../hooks/userLogin'

//styles
import styles from './Login.module.css'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = UserLogin() 

  const handleSubmit = (e) => {
    e.preventDefault()
    Login(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h3>Login</h3>
      <label>
        <span>Email:</span>
        <input 
        type="email"
        placeholder='Enter your email' 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        />  
      </label>

      <label>
        <span>Password:</span>
        <input 
        type="password" 
        placeholder='Enter your password'
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && <button className="btn" disabled>Loading</button>}
      {error && <p>{error}</p>}
    </form>
  )

}
