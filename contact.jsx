import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
  });

  const data = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className='contact_container'>
        <div className='contant'>
          <h2># contact us</h2>
          <div className='form'>
            <form method='POST'>
              <input
                type='text'
                name='Name'
                value={user.Name}
                onChange={data}
                placeholder='Enter Your Full Name'
                required
                autoComplete='off'
              />
              <input
                type='email'
                name='Email'
                value={user.Email}
                onChange={data}
                placeholder='Enter Your E-mail'
                autoComplete='off'
              />
              <input
                type='text'
                name='Subject'
                value={user.Subject}
                onChange={data}
                placeholder='Enter Your Subject'
                autoComplete='off'
              />
              <textarea
                name='Message'
                value={user.Message}
                onChange={data}
                placeholder='Your Message'
              />
              <button type='submit'>send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
