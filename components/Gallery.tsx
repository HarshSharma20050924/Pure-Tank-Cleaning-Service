import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">गैलरी (Work Gallery)</h2>
            <p className="text-slate-400">सफाई से पहले और बाद की तस्वीरें (Before & After)</p>
          </div>
        </div>

        {/* 
           INSTRUCTION TO ADD MORE PHOTOS:
           Copy the <div> block below and replace the 'src' URL with your new image URL.
        */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* PHOTO 1: Dirty Tank */}
          <div className="relative group overflow-hidden rounded-xl border-2 border-red-500/50 h-64">
             <img 
               src="/photos/Dirty.jpeg" 
               alt="Dirty water tank" 
               className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-110"
             />
             <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow-md">BEFORE (पहले)</div>
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
               <span className="text-white font-bold">गंदी टंकी (Sludge)</span>
             </div>
          </div>

          {/* PHOTO 2: Clean Tank */}
          <div className="relative group overflow-hidden rounded-xl border-2 border-green-500/50 h-64">
            <img 
               src="/photos/2.jpg" 
               alt="Clean Tank" 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
             />
              <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded shadow-md">AFTER (बाद में)</div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
               <span className="text-white font-bold">साफ और स्वच्छ टैंक</span>
             </div>
          </div>

          {/* PHOTO 3: Clean Water */}
          <div className="relative group overflow-hidden rounded-xl border-2 border-green-500/50 h-64">
            <img 
               src="/photos/1.jpg" 
               alt="Clear Water" 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
             />
             <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded shadow-md">RESULT</div>
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
               <span className="text-white font-bold">पीने योग्य साफ पानी</span>
             </div>
          </div>

          {/* ADD MORE PHOTOS HERE BY COPYING THE BLOCKS ABOVE */}

        </div>
        
        <p className="text-center text-slate-500 mt-8 text-sm">
            हमारी टीम पूरी सफाई और स्वच्छता का ध्यान रखती है।
        </p>
      </div>
    </section>
  );
};

export default Gallery;