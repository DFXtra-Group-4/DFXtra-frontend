import './css/Navbar.css';

const Navbar = () => {
  return (
    <div id="nav" style={{ margin: "20px ", padding: "20", width: "90%" }} >
      <p style={{ color: "#fff" }}>DFX</p>
      <ul>

        <div className="dropdown">
          <button className="dropbtn">Menu
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="link">Job board</a>
            <a href="link">Industry partners</a>

          </div></div>
        <div className="dropdown">
          <button className="dropbtn">Account
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="link">My profile</a>
            <a href="link">Edit profile</a>
            <a href="link">Log out</a>

          </div></div>

      </ul>
    </div>
  )
}

export default Navbar;