import React from 'react';
import Navbar from '../components/Home/Navbar';
import Features from '../components/home/Features';
import Hero from '../components/home/Hero';

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
    </main>
  )
}

export default Home;