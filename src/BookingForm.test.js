import { render, screen } from "@testing-library/react";
import App from './App';
import BookingForm from './components/BookingForm';
import { NavSwitchProvider } from './context/NavSwitchContext';

test('Renders the Booking Form labels', () => {
    const mockedAvailableTimes = [];
    render(<BookingForm availableTimes={mockedAvailableTimes} />);
    const dateLabel = screen.getByText('Choose date');
    const timeLabel = screen.getByText('Choose time');
    const guestsLabel = screen.getByText('Number of guests');
    const occasionLabel = screen.getByText('Occasion');
    expect(dateLabel).toBeInTheDocument();
    expect(timeLabel).toBeInTheDocument();
    expect(guestsLabel).toBeInTheDocument();
    expect(occasionLabel).toBeInTheDocument();
});

test('initializeTimes returns the correct expected value', () => {
    const mockedAvailableTimes = ['22:00', '23:30'];
    render(<BookingForm availableTimes={mockedAvailableTimes} />);
    const availableTime1 = screen.getByRole('option', { name: '22:00' });
    const availableTime2 = screen.getByRole('option', { name: '23:30' });
    expect(availableTime1).toBeInTheDocument();
    expect(availableTime2).toBeInTheDocument();
});