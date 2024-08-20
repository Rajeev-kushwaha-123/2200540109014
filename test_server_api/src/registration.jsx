import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [companyName, setCompanyName] = useState('goMart');
  const [ownerName, setOwnerName] = useState('Rahul');
  const [rollNo, setRollNo] = useState('1');
  const [ownerEmail, setOwnerEmail] = useState('rahul@abc.edu');
  const [accessCode, setAccessCode] = useState('FKDLjg');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      companyName,
      ownerName,
      rollNo,
      ownerEmail,
      accessCode,
    };

    try {
      const res = await axios.post('http://20.244.56.144/test/register', payload);
      setResponse(res.data);
      setError(null);
      alert('Registration successful! Save your credentials.');
    } catch (err) {
      setError('Registration failed. You can register only once.');
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <h2>Register Your Company</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name: </label>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        <div>
          <label>Owner Name: </label>
          <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
        </div>
        <div>
          <label>Roll No: </label>
          <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
        </div>
        <div>
          <label>Owner Email: </label>
          <input type="email" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} />
        </div>
        <div>
          <label>Access Code: </label>
          <input type="text" value={accessCode} onChange={(e) => setAccessCode(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>

      {response && (
        <div>
          <h3>Registration Successful!</h3>
          <p><strong>Company Name:</strong> {response.companyName}</p>
          <p><strong>Client ID:</strong> {response.clientID}</p>
          <p><strong>Client Secret:</strong> {response.clientSecret}</p>
          <p><strong>Owner Name:</strong> {response.ownerName}</p>
          <p><strong>Owner Email:</strong> {response.ownerEmail}</p>
          <p><strong>Roll No:</strong> {response.rollNo}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Registration;
