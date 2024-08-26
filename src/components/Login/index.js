import React from 'react'
import Cookies from 'cookies'
import './index.css'

const Login = () => {
  const onSubmitSuccess = jwtToken => {
    // const {history} = jwtToken.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    // history.replace('/')
    // const {username, password} = this.state
    // localStorage.setItem('username', username)
    // localStorage.setItem('password', password)
  }

  const onSubmitFailure = errorMsg => {
    console.log(errorMsg)
  }
  const submitForm = async () => {
    const url =
      'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https%3A%2F%2Ffrontend.com'
    //   'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com'
    const options = {
      method: 'GET',
      mode: 'no-cors',
    }
    await fetch(url, options)
      .then(res => {
        onSubmitSuccess(res.jwt_token)
        console.log(res.jwt_token)
      })
      .catch(error => console.log(error))
    // const data = await response.json()
    // console.log(data)
    // if (response.ok === true) {
    //   this.onSubmitSuccess(data.jwt_token)
    // } else {
    //   this.onSubmitFailure(data.error_msg)
    // }
  }

  return (
    <div className="login-container">
      <div className="login-header">
        <img
          className="login-website-logo"
          src="https://res.cloudinary.com/dljgducmq/image/upload/v1724588946/1680d9613629542a2474f79f92f7c022_ac73ut.png"
          alt="website-logo"
        />
      </div>
      <div className="login-contents">
        <div className="content-box">
          <h1 className="login-heading">Create New Account</h1>
          <button className="google-button" onClick={submitForm}>
            <img
              className="google"
              src="https://res.cloudinary.com/dljgducmq/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724651145/transparent-google-logo-google-logo-with-multicolored-g-and-1710875587855_fhcpwc.webp"
              alt="google"
            />
            Sign Up with Google
          </button>
          <button className="create-button">Create an account</button>
          <p className="text-account">
            Already have an account? <span className="sign-text">Sign in</span>
          </p>
        </div>
      </div>
      <div className="login-footer">
        <p className="footer-text">© 2023 Reachinbox. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Login
