// import './Signup.css'
// import React, { useState, useContext } from 'react';
// import { AppContext } from '../../AppContext';
// import { Link, useNavigate } from 'react-router-dom';
// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const { signup } = useContext(AppContext);
//   const navigate=useNavigate();

//   const handleSignup = async(e) => {
//     e.preventDefault();
//     if (signup(username,email, password)) {
//       alert('Signup successful!');
//       navigate("/");
//     } else {
//       alert('Signup failed!');
//     }
//   };
// //   try {
// //     const response = await fetch('mongodb+srv://abdulbaseerk135:Xpbe6DU2NtuUSSxV@cluster0.3h2hpvr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({ username, email, password }),
// //     });

// //     if (response.ok) {
// //       const data = await response.json();
// //       // Handle success response, update context or state
// //       alert('Signup successful!');
// //     } else {
// //       // Handle error response
// //       alert('Signup failed!');
// //     }
// //   } catch (error) {
// //     console.error('Error during signup:', error);
// //     // Handle error case
// //   }
// // };

//   return (
//     <div className='signup1'>
//       <div className='signup-form'>
//       <form onSubmit={handleSignup}>
//       <h2 className='heading'>Signup</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//      <input
//         type="email"
//         placeholder="Enter email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//             {/* <input
//         type="password"
//         placeholder="Confirm your Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       /> */}
//       <button type="submit">Signup</button>
//     </form>
//       </div>
     
//     <div className='login-link'>
//         <p>Already have an account <Link className='link1' to='/login'>login here</Link></p>
//     </div>
//     </div>

//   );
// };

// export default Signup;


import './Signup.css';
import React, { useState, useContext } from 'react';
import { AppContext } from '../../AppContext';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { signup } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const success = await signup(username, email, password);

      if (success) {
        toast.success('Signup successful!');
        navigate('/');
      } else {
        toast.error('Signup failed!');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('Signup failed due to an error!');
    }
  };

  return (
    <div className='signup1'>
      <div className='signup-form'>
        <form onSubmit={handleSignup}>
          <h2 className='heading'>Signup</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Uncomment if you need a confirm password field */}
          {/* <input
            type="password"
            placeholder="Confirm your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <button type="submit">Signup</button>
        </form>
      </div>

      <div className='login-link'>
        <p>Already have an account? <Link className='link1' to='/login'>Login here</Link></p>
      </div>

    </div>
  );
};

export default Signup;
