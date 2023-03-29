import { Link } from 'react-router-dom';
import heroImg from '../assets/restauranfood.jpg';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="description">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam expedita iste nemo hic. Eius voluptatem magni officiis commodi pariatur, quos incidunt est officia in? Nam atque ipsam consequatur nobis qui?</p>
          <Link className='btn' to="/booking">Reserve a table</Link>
        </div>
        <img src={heroImg} alt="Little Lemon - Chicago" />
      </div>
    </section>
  )
}

export default Hero;