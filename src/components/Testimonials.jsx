import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import styles from '../style';

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>What people are <br className='sm:block hidden'/>saying about us</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>  
        </div>
      </div>
      <div className='w-full max-w-[800px] mx-auto'>
        <Carousel infiniteLoop autoPlay showThumbs={false}>
          {/* Dummy images */}
          <div>
            <img src="https://via.placeholder.com/800x400" alt="dummy1" />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="dummy2" />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="dummy3" />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="dummy4" />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="dummy5" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
