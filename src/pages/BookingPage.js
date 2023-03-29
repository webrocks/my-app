import { useNavSwitch } from '../context/NavSwitchContext';
import Header from '../Header';
import BookingForm from '../components/BookingForm';
import Footer from '../Footer';

function BookingPage() {
  const { isNavSwitchActive } = useNavSwitch();
  return (
      <div className={`wrapper ${isNavSwitchActive ? 'nav-active' : ''}`}>
        <Header />
        <BookingForm />
        <Footer />
      </div>
  );
}

export default BookingPage;
