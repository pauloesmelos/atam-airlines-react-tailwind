import React from 'react';
import About from '../components/home/About';
import Blog from '../components/home/Blog';
import Features from '../components/home/Features';
import Footer from '../components/home/Footer';
import Hero from '../components/home/Hero';
import Navbar from '../components/home/Navbar';
import Newsletter from '../components/home/Newsletter';
import Plans from '../components/home/Plans';

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Plans />
      <Newsletter />
      <Blog />
      <Footer />
    </main>
  )
}

export default Home;