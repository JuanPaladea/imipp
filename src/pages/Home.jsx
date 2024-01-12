import React, { useEffect, useState } from 'react';
import HeaderComponent from '../components/Header/HeaderComponent';
import HeroComponent from '../components/Hero/HeroComponent';
import ContactComponent from '../components/Contact/ContactComponent';
import LineasDeInvestigacionHome from '../components/LineasDeInvestigacionHome/LineasDeInvestigacionHome';
import { Element, scroller } from 'react-scroll';

const Home = () => {
  const [scrollingEnabled, setScrollingEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        // Scroll down detected
        if (scrollingEnabled) {
          // Scroll to the next section
          scroller.scrollTo('heroSection', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });

          // Disable auto-scrolling after reaching heroSection
          setScrollingEnabled(false);
        }
      } else {
        // Scroll up detected
        if (!scrollingEnabled) {
          // Enable auto-scrolling when scrolling up to headerSection
          setScrollingEnabled(true);
        }
      }
    };

    window.addEventListener('wheel', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scrollingEnabled]);

  return (
    <div>
      <Element name="headerSection">
        <HeaderComponent />
      </Element>
      <Element name="heroSection">
        <HeroComponent />
      </Element>
      <LineasDeInvestigacionHome />
      <ContactComponent />
    </div>
  );
};

export default Home;
