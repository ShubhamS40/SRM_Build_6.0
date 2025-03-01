import Herosection from '@/components/Herosection';
import Navbar from '@/components/Navbar';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import React from 'react';
import Link from 'next/link';
import Categorysection from '@/components/Categorysection';
import { Fa0 } from 'react-icons/fa6';
import FAQ from '@/components/Faq';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

import TopOffers from '@/components/TopOffers';
import Footer from '@/components/Footer';

function Home() {
  const testimonials = [
    {
      quote: "RelocateEase made my transition to a new city seamless. I found a great rental home within days!",
      name: "Amit Sharma",
      designation: "Software Engineer",
      src: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1624561172888-ac93c696e10c%3Fq%3D80%26w%3D2592%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75",
    },
    {
      quote: "I was worried about finding household appliances on rent, but this platform had everything I needed.",
      name: "Priya Verma",
      designation: "Marketing Manager",
      src: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1623582854588-d60de57fa33f%3Fq%3D80%26w%3D3540%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75",
    },
    {
      quote: "The domestic help service was a lifesaver! Found a reliable maid in just a few clicks.",
      name: "Rahul Mehta",
      designation: "Financial Analyst",
      src: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1535713875002-d1d0cf377fde%3Fq%3D80%26w%3D3560%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75",
    },
    {
      quote: "Ironing and laundry services were top-notch. Never thought relocating could be this easy!",
      name: "Sneha Kapoor",
      designation: "Doctor",
      src: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1438761681033-6461ffad8d80%3Fq%3D80%26w%3D3540%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75",
    },
  
  ];
  return (
    <div>
    
      <Herosection />
      <Categorysection/>
      <TopOffers/>
      <AnimatedTestimonials testimonials={testimonials}/>
      <FAQ/>
      <Footer/>

  </div>
  )}
export default Home;
