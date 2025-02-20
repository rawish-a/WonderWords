import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

console.log('Domain:', import.meta.env.VITE_AUTH0_DOMAIN);
console.log('Client ID:', import.meta.env.VITE_AUTH0_CLIENT_ID);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='column'>
        <h1>Auth0 Login</h1>
        <LoginButton />
        <LogoutButton />
        
      </main>
    </>
  )
}

export default App
