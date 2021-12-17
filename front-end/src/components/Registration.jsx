import './css/registration.css'

const Registration = ({ registration }) => {
  const registrationElements = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <div id='registration'>
      <div id="registrationContainer">
        <h1>Digital Futures</h1>
        <h2>{registration ? 'Create your account' : 'Login'}</h2>
        <form>
          <span className='registrationSpan'>
            <label>Email</label>
            <input type="email" required></input>
          </span>
          {registration && registrationElements()}
          <span className='registrationSpan'>
            <label>Password</label>
            <input type="text"></input>
          </span>
          <button className='registerSubmit' type='submit'>{registration ? 'Create your account' : 'Login'}</button>
        </form>
      </div>
      <div id='registrationStyleDiv'></div>
    </div>
  )
}

export default Registration