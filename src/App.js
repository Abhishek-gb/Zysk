import React from 'react'
import Header from './Components/Header'
import Ctasection from './Components/Ctasection'
import FAQ from './Components/FAQ'
import FeaturesSection from './Components/FeaturesSection'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'
import CompanyLogos from './Components/CompanyLogos'
import BlogSection from './Components/Blogsection'
import Banner from './Components/Banner'

const App = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <CompanyLogos/>
    <FeaturesSection/>
    <Testimonial/>
    <FAQ/>
    <BlogSection/>
    <Ctasection/>
    <Footer/>
    </>
  )
}

export default App
