import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
import Card from './Card'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
    <div className='flex justify-evenly w-full items-center gap-3'>
    <Card title="Web App Development
" description="Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge." 
  source="https://www.freeiconspng.com/uploads/laptop-icon-png-25.png"
/>
    <Card title="Mobile App Development" description="We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms."
      source="https://www.freeiconspng.com/uploads/mobile-icon-png-cool--mobitrends-1.png"
    />
    <Card title="Digital Marketing
" description="The Digital Marketing Services That We Provide Have Their Own Set Of Charms. By Taking Our Digital Marketing Services, Our Clients Will Be Able To Increase Visibility And Engage With Their Customers At The Online Platform."
  source="https://cdn.iconscout.com/icon/premium/png-512-thumb/digital-marketing-1599510-1356057.png"
/>

    </div>

      {/* <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam.
          Mauris eu adipiscing ultrices ametodio aenean neque.
          Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img
            src={apple}
            alt='app-store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src={google}
            alt='google-play'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div>
      </div>   */}
    </section>
  )
}

export default Billing
