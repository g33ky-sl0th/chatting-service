import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:5000/api/auth/register', { username, password });
    // Redirect or show message
    if (response){
        router.push("/login")
    }
  };

  return (
    <div className='forms'>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button onClick={()=>{handleSubmit()}}>Register</button>
    </div>
  );
};

export default Register;
