import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle ='Our Program' title='What we offer'/>
      <Programs/>
      <About/>
      <Title subTitle ='Gallary' title='Campus Photos'/>
      <Campus/>
      <Title subTitle ='Testimonials' title='What a student says'/>
      <Testimonials/>
      <Title subTitle ='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      </div>
  )
}

export default App