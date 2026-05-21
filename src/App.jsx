import React, { useState, useEffect } from 'react';
import translations from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Areas from './components/Areas';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  const [locale, setLocale] = useState('ar');
  const content = translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <>
      <Navbar content={content.nav} locale={locale} setLocale={setLocale} />
      <Hero content={content.hero} />
      <WhyChooseUs content={content.why} />
      <Services content={content.services} />
      <HowItWorks content={content.process} />
      <Areas content={content.areas} />
      <CTASection content={content.ctaSection} />
      <Footer content={content.footer} />
    </>
  );
}

export default App;
