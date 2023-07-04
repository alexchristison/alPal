import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  const [userPref, setUserPref] = useState('signup')
  function handlePref() {
    if( userPref === 'signup') {
      setUserPref('login')
    } else {
      setUserPref('signup')
    }
  }
  return (
    <div>
      <Logo />
      { userPref === 'signup' ? <SignUpForm setUser={setUser}/> : <LoginForm setUser={setUser} />}
      <button onClick={handlePref}>
        { userPref === 'signup' ? 'Already a member? Log In' : 'Need an Account? Sign Up'}
      </button>
    </div>
  );
}