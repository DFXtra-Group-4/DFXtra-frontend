import './css/registration.css'

const Registration = () => {

  return (
    <div id='registration'>
      <div id="registrationContainer">
        <h1>Digital Futures</h1>
        <h2>Create your account</h2>
        <form>
          <span className='registrationSpan'>
            <label>Email</label>
            <input type="email" required></input>
          </span>
          <span className='registrationSpan'>
            <label>First Name</label>
            <input type="text" required></input>
          </span>
          <span className='registrationSpan'>
            <label>Last Name</label>
            <input type="text" required></input>
          </span>
          <span className='registrationSpan'>
            <label>Company</label>
            <input type="text"></input>
          </span>
          <span className='registrationSpan'>
            <label>Password</label>
            <input type="text"></input>
          </span>
          <button className='registerSubmit' type='submit'>Create</button>
        </form>
      </div>
      <div id='registrationStyleDiv'></div>
    </div>
  )
}

export default Registration