import LogoImg from '../assets/Logo.svg';

function Logo() {
  return (
    <a
      className='logo'
      href="/"
    >
      <img src={LogoImg} alt="Little Lemon" />
    </a>
  )
}

export default Logo;