const Navbar = ({ className, logo }) => {
  return (
    <div className="navbar-container">
      <div className="header">
        <div className={logo}>LOGO</div>
        <div className="nav">
          <button className={className}>Blog</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// "logo res-logo"
