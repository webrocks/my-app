import { useNavSwitch } from '../context/NavSwitchContext';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function Homepage() {
  const { isNavSwitchActive } = useNavSwitch();
  return (
      <div className={`wrapper ${isNavSwitchActive ? 'nav-active' : ''}`}>
        <Header isShowHero={true} />
        <Main />
        <Footer />
      </div>
  );
}

export default Homepage;
