import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Works from '../components/works/Works'
import Footer from '../components/footer/Footer'
import Contact from '../components/contact/Contact'

const page = () => {
  return (
    <>
    <Hero />
    <About />
    <Skills />
    <Works />
    <Contact />
    <Footer />
    </>
  )
}

export default page