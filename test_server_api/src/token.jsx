import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Example: Storing the access token after receiving it
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEwODM1MjY4LCJpYXQiOjE3MTA4M zQ5NjgsImlzcyI6IkFmZm9yZG11ZCIsImp@aSI6IjM3YmI0OTNjLTczZDMtNDd1YS04Njc1LTIxZjY2ZWY5YjczNSIsInN1YiI6InJhaHVsQGFiYy51ZHUifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjM3YmI0OTNjLTczZDMtNDd1YS04Njc1LTIxZjY2ZWY5YjczNSIsImNsaWVudFN1Y3J1dCI6IkhWSVFCVmJxbVRHRW1hRUQiLCJvd251ck5hbWUiOiJSYW h1bCIsIm93bmVyRW1haWwiOiJyYWh1bEBhYmMuZWR1Iiwicm9sbE5vIjoiMSJ9.gmk2F73GZ7q7EaIGDShc40DKK1zWQ9Up3xQ-4Dbsu8A";
    setAccessToken(token);

    // Optionally, store in localStorage
    localStorage.setItem('accessToken', token);
  }, []);

  return (
    <div className="App">
      <h1>API Auth Example</h1>
      {/* Your app components */}
    </div>
  );
};

export default App;
