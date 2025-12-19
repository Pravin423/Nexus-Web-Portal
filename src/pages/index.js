import React from 'react'
import Layout from '@/Components/Layout';
import Hero from '@/Components/Hompepage/Hero';
import Features from '@/Components/Hompepage/Features/Features';
import OfferMain from '@/Components/Hompepage/Offers/OfferMain';
import ExperienceSection from '@/Components/Hompepage/Experience/ExperienceSection';
import ServicePage from '@/Components/Hompepage/Services/ServicePage';

const Index = () => {
  return (
    <Layout title='Homepage'>
      <Hero/>
      <Features/>  
      <OfferMain/>
      <ExperienceSection/> 
      <ServicePage/>
      
    </Layout>
  )
}

export default Index;
