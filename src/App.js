import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navibar from './components/Navibar';
import Homepage from './components/Homepage';
import Caregvrbooking from './components/Caregvrbooking';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const { t, i18n } = useTranslation();
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleBookingSelect = (booking) => {
    setSelectedBooking(booking);
  };

  // Function to handle language change
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <div className="App">
        <Navibar changeLanguage={changeLanguage} />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                title={t('welcome')}
                trustMessage={t('trust_message')}
                buttonText={t('book_caregiver')}
              />
            }
          />
          <Route
            path="/book"
            element={<Caregvrbooking onBookingSelect={handleBookingSelect} />}
          />
        </Routes>
        <Footer
          footerText={t('footer_text')}
          contactText={t('contact_us')}
          email={t('email')}
        />
      </div>
    </Router>
  );
}

export default App;
