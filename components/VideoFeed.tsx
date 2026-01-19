import React, { useState, useRef } from 'react';
import { CUSTOMER_VIDEOS } from '../constants';
import { Play, MapPin, Clock } from 'lucide-react';

const VideoFeed: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  
  // Ref to handle pausing other videos if we were to expand features
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const handlePlay = (id: string) => {
    setPlayingId(id);
    // Note: The autoPlay attribute on the video tag will handle starting it
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-2">Real Proof</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Customer Stories</h3>
          <p className="text-slate-400 mt-2">Quick 10-20 sec reviews from your neighbors in Ujjain.</p>
        </div>

        {/* Changed grid to better support vertical videos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CUSTOMER_VIDEOS.map((video) => (
            <div key={video.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              
              {/* VIDEO PLAYER AREA - FORCED VERTICAL ASPECT RATIO (9:16) */}
              <div className="relative aspect-[9/16] bg-black group">
                {playingId === video.id ? (
                  <video
                    ref={(el) => { videoRefs.current[video.id] = el; }}
                    src={video.videoSrc}
                    poster={video.thumbnailUrl}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    playsInline
                    loop
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <button 
                    onClick={() => handlePlay(video.id)}
                    className="w-full h-full relative cursor-pointer block text-left"
                    aria-label={`Play video from ${video.customerName}`}
                  >
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.customerName} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-75 transition-opacity"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play fill="white" className="text-white ml-1" size={28} />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                        <Clock size={10} />
                        {video.duration}
                    </div>

                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 to-transparent"></div>
                  </button>
                )}
              </div>

              {/* CUSTOMER DETAILS - Compact for "Shorts" look */}
              <div className="p-3 bg-slate-800">
                <h4 className="font-bold text-sm text-white line-clamp-1">{video.customerName}</h4>
                <div className="flex items-center gap-1 text-slate-400 text-[11px] mt-1">
                  <MapPin size={10} className="text-blue-500 shrink-0" />
                  <span className="truncate">{video.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoFeed;