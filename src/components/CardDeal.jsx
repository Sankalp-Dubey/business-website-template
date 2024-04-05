import React from "react";
import { card } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";

const CardDeal = () => {
  return (
    <section id="features" className={layout.section}>
      {/* <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor,
          purus in mattis at sed integer faucibus.
          Aliquet quis aliquet eget mauris tortor.ç
          Aliquet ultrices ac, ametau.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div> */}
      <div className=" w-fit">
      <div className=" justify-center items-center flex">
      <span class="text-white text-4xl border-b-2 border-secondary uppercase">
        About us
      </span>
      </div>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div class="text">
            <h2 class="mb-12 font-semi-bold text-3xl text-white sm:text-4xl ">
              <span class="text-secondary">Amo IT Solution </span>
            </h2>
            <p class="text-white">
            At Amo IT Solution, we're more than just an IT service provider; we're your strategic partner in navigating the complexities of modern technology. With a focus on delivering innovative solutions and unparalleled customer service, we empower businesses of all sizes to thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default CardDeal;
