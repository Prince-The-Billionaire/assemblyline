import Blog1 from '@/components/blog/Blog1'
import Contact1 from '@/components/contacts/Contact1'
import Footer1 from '@/components/footer/Footer1'
import Hero8 from '@/components/heroes/Hero8'
import Navbar5 from '@/components/navbars/Navbar5'
import Proof3 from '@/components/socialproof/Proof3'
import Store3 from '@/components/store/Store3'
import Testimonials2 from '@/components/testimonials/Testimonials2'


const page = () => {
  return (
    <div className='bg-gray-50  text-black'>
      <Navbar5/>
      <Hero8/>
      <Proof3/>
      <Testimonials2/>
      <Store3/>
      <Contact1/>
      <Blog1/>
      <Footer1/>
    </div>
  )
}

export default page
