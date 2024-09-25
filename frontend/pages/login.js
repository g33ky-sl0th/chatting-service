import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorr, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/auth/login', { username, password }).then((data)=>{localStorage.setItem('token', data.data.token);
    router.push('/chat');

    }).catch((err)=>setError(err.message));
    
  };

  return (
    <div className='forms'>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button onClick={handleSubmit}>Login</button>
      <p>{errorr}</p>
    </div>
  );
};

export default Login;
