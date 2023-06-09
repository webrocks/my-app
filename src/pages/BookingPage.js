import { useNavSwitch } from '../context/NavSwitchContext';
import Header from '../Header';
import BookingForm from '../components/BookingForm';
import Footer from '../Footer';

function BookingPage({availableTimes, setAvailableTimes, submitForm}) {
  const { isNavSwitchActive } = useNavSwitch();
  return (
      <div className={`wrapper ${isNavSwitchActive ? 'nav-active' : ''}`}>
        <Header />
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
          submitForm={submitForm}
        />
        <Footer />
      </div>
  );
}

export default BookingPage;
