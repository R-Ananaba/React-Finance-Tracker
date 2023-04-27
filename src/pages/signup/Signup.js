import { useState } from 'react'
import { UserSignup } from '../../hooks/userSignup'

//styles
import styles from './Signup.module.css'


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const {signup, isPending, error} = UserSignup()     //returned parameters from the signup function in userSignup hook

  const handleSubmit = (e) => {
    e.preventDefault()
   // console.log(email, password,displayName)
   signup(email, password, displayName) //same sequence with the signup function in the userSignup hook
  }

  return (
    <form onSubmit= {handleSubmit} className={styles['signup-form']}>
      <h3>Signup</h3>
      <label>
        <span>Email: </span>
          <input
          required
          placeholder='Enter email'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />     
      </label>

      <label>
        <span>Password: </span>
          <input
          required
          placeholder='Enter password'
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}         
          />         
      </label>

      <label>
        <span>Displayname: </span>
          <input
          required
          placeholder='Enter username'
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}        
          />        
      </label>

      {!isPending && <button className="btn">Signup</button>}  
      {isPending && <button className="btn" disabled>loading</button>}

      {error && <p>{error}</p>}     
    </form>
  )
}
