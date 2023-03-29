import Hero from "./components/Hero";
import Logo from "./components/Logo";
import Nav from "./components/Nav";

function Header(props) {
  return (
    <header className="header">
      <div className="container logo-nav-section">
        <Logo />
        <Nav />
      </div>
      {props.isShowHero &&
        <Hero />
      }
    </header>
  );
}

export default Header;