import React, { useState } from 'react';

function Welcome() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // State for login status

  // Toggle login status
  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  // Conditional rendering using 'if' statement
  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome back, User!</h1>
        <button onClick={toggleLogin}>Log out</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please log in to continue</h1>
        <button onClick={toggleLogin}>Log in</button>
      </div>
    );
  }
}

export default Welcome;