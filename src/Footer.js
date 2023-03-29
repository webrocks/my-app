import Logo from './assets/Logo.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <img src={Logo} alt="Little Lemon Footer Logo" />
        <nav>
          <ul>
            <li>
              <h4>Navigation</h4>
              <ul>
                <li><a href="/">Navigation</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
              </ul>
            </li>
            <li>
              <h4>Contact</h4>
              <ul>
                <li><a href="/">Address</a></li>
                <li><a href="/">Phone Number</a></li>
                <li><a href="/">Email</a></li>
              </ul>
            </li>
            <li>
              <h4>Social Media Links</h4>
              <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Foodgram</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;