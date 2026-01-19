import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Quality from './components/Quality';
import Gallery from './components/Gallery';
import VideoFeed from './components/VideoFeed';
import Testimonials from './components/Testimonials';
import Guidelines from './components/Guidelines';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StaffPortal from './components/StaffPortal';

function App() {
  const [isStaffPortalOpen, setIsStaffPortalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Quality />
      <Pricing /> {/* Includes Subscriptions now */}
      <VideoFeed /> {/* New Efficient Video Streaming */}
      <Gallery />
      <Testimonials />
      <Guidelines /> {/* New Terms & Safety */}
      <FAQ />
      <Contact />
      <Footer onOpenStaffPortal={() => setIsStaffPortalOpen(true)} />
      
      {/* Staff Worker Portal Modal */}
      <StaffPortal 
        isOpen={isStaffPortalOpen} 
        onClose={() => setIsStaffPortalOpen(false)} 
      />
    </div>
  );
}

export default App;