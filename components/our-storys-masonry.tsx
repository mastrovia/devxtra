'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Volume2, VolumeX, Expand, X } from 'lucide-react';

interface TestimonialItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
  height: number; // relative height for masonry layout
}

const images: TestimonialItem[] = [
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618907.jpg',
    alt: 'Image description',
    id: 0,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618910.jpg',
    alt: 'Image description',
    id: 1,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618924.jpg',
    alt: 'Image description',
    id: 2,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618932.jpg',
    alt: 'Image description',
    id: 3,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618938.jpg',
    alt: 'Image description',
    id: 4,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618943.jpg',
    alt: 'Image description',
    id: 5,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618946.jpg',
    alt: 'Image description',
    id: 6,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618954.jpg',
    alt: 'Image description',
    id: 7,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618961.jpg',
    alt: 'Image description',
    id: 8,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618967.jpg',
    alt: 'Image description',
    id: 9,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618972.jpg',
    alt: 'Image description',
    id: 10,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618977.jpg',
    alt: 'Image description',
    id: 11,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618982.jpg',
    alt: 'Image description',
    id: 12,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618988.jpg',
    alt: 'Image description',
    id: 13,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479618994.jpg',
    alt: 'Image description',
    id: 14,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479619000.jpg',
    alt: 'Image description',
    id: 15,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479619005.jpg',
    alt: 'Image description',
    id: 16,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479619013.jpg',
    alt: 'Image description',
    id: 17,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479619015.jpg',
    alt: 'Image description',
    id: 18,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479619022.jpg',
    alt: 'Image description',
    id: 19,
    height: 512,
  },
  {
    type: 'image',
    src: 'https://r2.devxtra.com/ig_1763479619028.jpg',
    alt: 'Image description',
    id: 20,
    height: 512,
  },
];

const videos: TestimonialItem[] = [
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362016.mp4',
    alt: 'Image description',
    id: 13,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362032.mp4',
    alt: 'Image description',
    id: 14,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362045.mp4',
    alt: 'Image description',
    id: 15,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362059.mp4',
    alt: 'Image description',
    id: 16,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362073.mp4',
    alt: 'Image description',
    id: 17,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362087.mp4',
    alt: 'Image description',
    id: 18,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362100.mp4',
    alt: 'Image description',
    id: 19,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362131.mp4',
    alt: 'Image description',
    id: 20,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362155.mp4',
    alt: 'Image description',
    id: 21,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362161.mp4',
    alt: 'Image description',
    id: 22,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362174.mp4',
    alt: 'Image description',
    id: 23,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362186.mp4',
    alt: 'Image description',
    id: 24,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362217.mp4',
    alt: 'Image description',
    id: 25,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362241.mp4',
    alt: 'Image description',
    id: 26,
    height: 512,
  },
  {
    type: 'video',
    src: 'https://r2.devxtra.com/ig_1762878362251.mp4',
    alt: 'Image description',
    id: 27,
    height: 512,
  },
];

// Generate random testimonial items with images and videos
export default function OurStoriesMasonry() {
  const [testimonialItems, setTestimonialItems] = useState<TestimonialItem[]>([]);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const fullscreenVideoRef = useRef<HTMLVideoElement | null>(null);
  const [activeAudioIndex, setActiveAudioIndex] = useState<number | null>(null);
  const [fullscreenItem, setFullscreenItem] = useState<TestimonialItem | null>(null);
  const [isFullscreenVideoMuted, setIsFullscreenVideoMuted] = useState(false);

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

  useEffect(() => {
    const items = [];

    for (let i = 0; i < images.length + videos.length; i++) {
      items.push(i % 2 == 0 ? { ...videos.splice(0, 1)[0], height: 300 } : { ...images.splice(0, 1)[0], height: 200 });
    }

    setTestimonialItems(items);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="section-cont h-full max-h-[100vh]">
          {/* Masonry Grid */}
          <div
            className="grid gap-1 auto-rows-[10px] h-full overflow-hidden"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            }}
          >
            {testimonialItems.map((item, index) => {
              const spanRows = Math.ceil(item?.height / 10);

              return (
                <div
                  key={item.id}
                  className="relative overflow-hidden rounded-sm bg-muted group cursor-pointer transition-transform"
                  style={{
                    gridRowEnd: `span ${spanRows}`,
                  }}
                >
                  {item?.type === 'image' ? (
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
