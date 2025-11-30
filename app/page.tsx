import Blog1 from '@/components/blog/Blog1'
import Contact1 from '@/components/contacts/Contact1'
import Footer1 from '@/components/footer/Footer1'
import Hero5 from '@/components/heroes/Hero.5'
import Hero1 from '@/components/heroes/Hero1'
import Hero2 from '@/components/heroes/Hero2'
import Hero6 from '@/components/heroes/Hero6'
import Navbar2 from '@/components/navbars/Navbar2'
import Navbar3 from '@/components/navbars/Navbar3'
import Proof1 from '@/components/socialproof/Proof1'
import Proof3 from '@/components/socialproof/Proof3'
import Store1 from '@/components/store/Store1'
import Testimonials1 from '@/components/testimonials/Testimonials1'
import Testimonials2 from '@/components/testimonials/Testimonials2'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gray-50  text-black'>
      <Navbar3/>
      <Hero6/>
      <Proof3/>
      <Testimonials2/>
      <Store1/>
      <Contact1/>
      <Blog1/>
      <Footer1/>
    </div>
  )
}

export default page
