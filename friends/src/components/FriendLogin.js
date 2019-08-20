
import React, { useState } from "react";
import { withFormik, Form, Field } from 'formik'
import { axiosWithAuth } from '../utility/axiosWithAuth'



const FriendLogin = (props) => {
  const [isLoading, setIsLoading] = useState();

  return (
    <div>
      <Form>
        <legend>Log In Here</legend>
        <label>Username</label>
        <Field name="username" type="text" placeholder="Username" />
        <label>Email</label>
        <Field name='email' type='email' placeholder='Email' />
        <label>Password</label>
        <Field name='password' type='password' placeholder='Password' />
        <button>Login</button>
      </Form>
    </div>
  )
}

export default withFormik({
  mapPropsToValues ({ username,email, password }) {
    return {
      username: username || "christian",
      email: email || '',
      password: password || ''
    }
  },
  handleSubmit (values) {
    console.log(values)
    axiosWithAuth
      .post('/login', values)
      .then(res => console.log(res))
      .then(res => {
        localStorage.setItem('token', res.data.payload)
      })
      .catch(err => console.log(err.response))
  }
})(FriendLogin)
