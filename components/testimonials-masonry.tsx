'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Volume2, VolumeX, Expand, X } from 'lucide-react';

interface TestimonialItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  height: number; // relative height for masonry layout
}

export default function TestimonialsMasonry() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const fullscreenVideoRef = useRef<HTMLVideoElement | null>(null);
  const [activeAudioIndex, setActiveAudioIndex] = useState<number | null>(null);
  const [fullscreenItem, setFullscreenItem] = useState<TestimonialItem | null>(null);
  const [isFullscreenVideoMuted, setIsFullscreenVideoMuted] = useState(false);

  // Generate random testimonial items with images and videos
  const testimonialItems: TestimonialItem[] = [
    { id: '1', type: 'image', src: 'https://picsum.photos/seed/testimonial1/400/300', alt: 'Testimonial 1', height: 300 },
    {
      id: '2',
      type: 'video',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      alt: 'Testimonial Video 2',
      height: 200,
    },
    { id: '3', type: 'image', src: 'https://picsum.photos/seed/testimonial3/400/400', alt: 'Testimonial 3', height: 300 },
    { id: '4', type: 'image', src: 'https://picsum.photos/seed/testimonial4/400/550', alt: 'Testimonial 4', height: 250 },
    {
      id: '5',
      type: 'video',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      alt: 'Testimonial Video 5',
      height: 200,
    },
    { id: '6', type: 'image', src: 'https://picsum.photos/seed/testimonial6/400/450', alt: 'Testimonial 6', height: 250 },
    { id: '7', type: 'image', src: 'https://picsum.photos/seed/testimonial7/400/450', alt: 'Testimonial 7', height: 300 },
    {
      id: '8',
      type: 'video',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      alt: 'Testimonial Video 8',
      height: 150,
    },
    { id: '9', type: 'image', src: 'https://picsum.photos/seed/testimonial9/400/500', alt: 'Testimonial 9', height: 350 },
    { id: '10', type: 'image', src: 'https://picsum.photos/seed/testimonial10/400/400', alt: 'Testimonial 10', height: 300 },
    {
      id: '11',
      type: 'video',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      alt: 'Testimonial Video 11',
      height: 250,
    },
    { id: '12', type: 'image', src: 'https://picsum.photos/seed/testimonial12/400/550', alt: 'Testimonial 12', height: 250 },
    { id: '13', type: 'image', src: 'https://picsum.photos/seed/testimonial13/400/450', alt: 'Testimonial 13', height: 350 },
    { id: '14', type: 'image', src: 'https://picsum.photos/seed/testimonial14/400/300', alt: 'Testimonial 14', height: 300 },
    {
      id: '15',
      type: 'video',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      alt: 'Testimonial Video 15',
      height: 150,
    },
  ];

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    // If this video is currently playing audio, mute it
    if (activeAudioIndex === index) {
      video.muted = true;
      setActiveAudioIndex(null);
    } else {
      // Mute all other videos
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) {
          v.muted = true;
        }
      });

      // Unmute this video
      video.muted = false;
      setActiveAudioIndex(index);
    }
  };

  const handleFullscreen = (item: TestimonialItem) => {
    setFullscreenItem(item);
    setIsFullscreenVideoMuted(false);
    // Mute all grid videos when opening fullscreen
    videoRefs.current.forEach((v) => {
      if (v) v.muted = true;
    });
    setActiveAudioIndex(null);
  };

  const handleCloseFullscreen = () => {
    setFullscreenItem(null);
    setIsFullscreenVideoMuted(false);
  };

  const toggleFullscreenVideoAudio = () => {
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.muted = !fullscreenVideoRef.current.muted;
      setIsFullscreenVideoMuted(fullscreenVideoRef.current.muted);
    }
  };

  // Handle ESC key to close fullscreen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && fullscreenItem) {
        handleCloseFullscreen();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [fullscreenItem]);

  useEffect(() => {
    // Setup intersection observer for video autoplay and auto-mute when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          const videoIndex = videoRefs.current.indexOf(video);

          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Handle autoplay errors silently
            });
          } else {
            video.pause();

            // If this video was playing audio and went out of view, mute it
            if (videoIndex === activeAudioIndex) {
              video.muted = true;
              setActiveAudioIndex(null);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, [activeAudioIndex]);

  return (
    <>
      <div className="relative h-[110vh] overflow-hidden">
        <div className="section-cont h-full">
          {/* Masonry Grid */}
          <div
            className="grid gap-1 auto-rows-[10px] h-full overflow-hidden"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            }}
          >
            {testimonialItems.map((item, index) => {
              const spanRows = Math.ceil(item.height / 10);

              return (
                <div
                  key={item.id}
                  className="relative overflow-hidden rounded-sm bg-muted group cursor-pointer transition-transform"
                  style={{
                    gridRowEnd: `span ${spanRows}`,
                  }}
                >
                  {item.type === 'image' ? (
                    <>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Fullscreen Button for Image */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFullscreen(item);
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm transition-all duration-200 opacity-50 md:opacity-0 md:group-hover:opacity-50"
                        aria-label="View fullscreen"
                      >
                        <Expand className="size-6 text-white" />
                      </button>
                    </>
                  ) : (
                    <>
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        src={item.src}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        onClick={() => handleVideoClick(index)}
                      />

                      {/* Fullscreen Button for Video */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFullscreen(item);
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm transition-all duration-200 opacity-50 md:opacity-0 md:group-hover:opacity-50"
                        aria-label="View fullscreen"
                      >
                        <Expand className="size-6 text-white" />
                      </button>

                      {/* Mute/Unmute Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVideoClick(index);
                        }}
                        className="absolute bottom-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all duration-200"
                        aria-label={activeAudioIndex === index ? 'Mute video' : 'Unmute video'}
                      >
                        {activeAudioIndex === index ? <Volume2 className="size-5 text-white" /> : <VolumeX className="size-5 text-white" />}
                      </button>
                    </>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Fullscreen Modal */}
      {fullscreenItem && (
        <div
          onClick={handleCloseFullscreen}
          className="fixed inset-0 z-500 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          {/* Close Button */}
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all duration-200"
            aria-label="Close fullscreen"
          >
            <X className="size-6 text-white" />
          </button>

          {/* Content */}
          <div onClick={handleCloseFullscreen} className="relative w-full h-full flex items-center justify-center">
            {fullscreenItem.type === 'image' ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  onClick={(e) => e.stopPropagation()}
                  src={fullscreenItem.src}
                  alt={fullscreenItem.alt}
                  fill
                  className="object-contain"
                  // sizes="100vw"
                  priority
                />
              </div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                <video
                  onClick={(e) => e.stopPropagation()}
                  ref={fullscreenVideoRef}
                  src={fullscreenItem.src}
                  autoPlay
                  loop
                  playsInline
                  className="max-w-full max-h-full object-contain"
                  muted={isFullscreenVideoMuted}
                  controls
                />

                {/* Video Controls */}
                {/* <button
                  onClick={toggleFullscreenVideoAudio}
                  className="absolute bottom-8 right-8 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all duration-200"
                  aria-label={isFullscreenVideoMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isFullscreenVideoMuted ? <VolumeX className="size-6 text-white" /> : <Volume2 className="size-6 text-white" />}
                </button> */}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
