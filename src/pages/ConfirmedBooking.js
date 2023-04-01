import { useNavSwitch } from '../context/NavSwitchContext';
import Header from '../Header';
import Footer from '../Footer';

function Homepage() {
  const { isNavSwitchActive } = useNavSwitch();
  return (
      <div className={`wrapper ${isNavSwitchActive ? 'nav-active' : ''}`}>
        <Header />
        <section className='confirmation-msg'>
          <div className='container'>
            <h2>Thank you!</h2>
            <p>Your booking has been succesfully confirmed!</p>
          </div>
        </section>
        <Footer />
      </div>
  );
}

export default Homepage;
