import React, { useState } from "react";
import './NewsLetter.css'
import { toast } from 'react-toastify';

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      toast.success(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }

  return (
    <div className="newsletter">
      <h1>Subscribe to our newsletter!</h1>
      <div className="validation"> 
            {!isEmailValid ? <p>Please enter a valid email address</p> : null}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address here"
            value={email}
            onChange={handleInput}
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

    </div>
  );
}

export default Newsletter;