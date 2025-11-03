
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const cubeData = [
  {
    title: "human+design",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fb2ab3fec3046c331dd954/9d537cf47_AdobeStock_876973765.jpg",
    color: "#B82E2B"
  },
  {
    title: "human+assist",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/b74bb5907_coverpage.jpg",
    color: "#6F88B5"
  },
  {
    title: "human+insight",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/88cf9af30_AdobeStock_1423904126.jpg",
    color: "#1A6566" // Updated color
  },
  {
    title: "human+culture",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/9eebaf541_AdobeStock_13128754921.jpg", // Updated image URL
    color: "#591E45" // Updated color
  }
];

export default function RotatingCubeHero() {
  const [currentFace, setCurrentFace] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cubeInteractionComplete, setCubeInteractionComplete] = useState(false);
  const lastScrollTime = useRef(Date.now());
  const [cubeFaceTranslateZ, setCubeFaceTranslateZ] = useState(85); // Updated from 100 * 0.85
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCubeFaceTranslateZ(238); // Updated from 280 * 0.85
      } else {
        setCubeFaceTranslateZ(85); // Updated from 100 * 0.85
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop wheel event
  useEffect(() => {
    const handleWheel = (e) => {
      const scrollTop = window.scrollY;
      
      if (cubeInteractionComplete || scrollTop > 300) {
        return;
      }

      if (scrollTop > 100) {
        return;
      }

      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < 800 || isAnimating) {
        return;
      }
      lastScrollTime.current = now;

      const delta = e.deltaY;
      
      if (delta > 0 && currentFace < 3) {
        setIsAnimating(true);
        setCurrentFace(prev => prev + 1);
        setTimeout(() => setIsAnimating(false), 800);
      } else if (delta < 0 && currentFace > 0) {
        setIsAnimating(true);
        setCurrentFace(prev => prev - 1);
        setTimeout(() => setIsAnimating(false), 800);
      } else if (delta > 0 && currentFace === 3) {
        setCubeInteractionComplete(true);
        setIsAnimating(false);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentFace, isAnimating, cubeInteractionComplete]);

  // Mobile touch events
  useEffect(() => {
    const handleTouchStart = (e) => {
      const scrollTop = window.scrollY;
      
      if (cubeInteractionComplete || scrollTop > 300 || scrollTop > 100) {
        return;
      }
      
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const scrollTop = window.scrollY;
      
      if (cubeInteractionComplete || scrollTop > 300 || scrollTop > 100) {
        return;
      }

      // Prevent default scrolling while interacting with cube
      if (!cubeInteractionComplete && scrollTop <= 100) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      const scrollTop = window.scrollY;
      
      if (cubeInteractionComplete || scrollTop > 300 || scrollTop > 100) {
        return;
      }

      touchEndY.current = e.changedTouches[0].clientY;
      
      const now = Date.now();
      if (now - lastScrollTime.current < 800 || isAnimating) {
        return;
      }
      
      const swipeDistance = touchStartY.current - touchEndY.current;
      const minSwipeDistance = 50; // minimum distance for a swipe
      
      if (Math.abs(swipeDistance) < minSwipeDistance) {
        return;
      }
      
      lastScrollTime.current = now;

      if (swipeDistance > 0 && currentFace < 3) {
        // Swiped up -> next face
        setIsAnimating(true);
        setCurrentFace(prev => prev + 1);
        setTimeout(() => setIsAnimating(false), 800);
      } else if (swipeDistance < 0 && currentFace > 0) {
        // Swiped down -> previous face
        setIsAnimating(true);
        setCurrentFace(prev => prev - 1);
        setTimeout(() => setIsAnimating(false), 800);
      } else if (swipeDistance > 0 && currentFace === 3) {
        // Reached last face -> release control
        setCubeInteractionComplete(true);
        setIsAnimating(false);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentFace, isAnimating, cubeInteractionComplete]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 && cubeInteractionComplete) {
        setCubeInteractionComplete(false);
        setCurrentFace(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cubeInteractionComplete]);

  return (
    <section className="relative bg-slate-900 min-h-screen flex items-center py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* LIVE ANIMATED BACKGROUND - Generative Art / Flowing Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Large flowing orb 1 - Warm Red */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(184, 46, 43, 0.4) 0%, rgba(184, 46, 43, 0.1) 40%, transparent 70%)',
            top: '10%',
            left: '5%',
          }}
          animate={{
            x: [0, 100, 50, 0],
            y: [0, 80, 120, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.25, 0.35, 0.3, 0.25],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Large flowing orb 2 - Warm Coral/Orange */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(185, 71, 44, 0.35) 0%, rgba(237, 205, 182, 0.15) 40%, transparent 70%)',
            top: '40%',
            right: '10%',
          }}
          animate={{
            x: [0, -80, -120, 0],
            y: [0, 100, 60, 0],
            scale: [1, 0.9, 1.1, 1],
            opacity: [0.2, 0.3, 0.25, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Medium flowing orb 3 - Deep Blue accent */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(111, 136, 181, 0.3) 0%, rgba(111, 136, 181, 0.1) 50%, transparent 70%)',
            bottom: '15%',
            left: '20%',
          }}
          animate={{
            x: [0, 120, 80, 0],
            y: [0, -60, -100, 0],
            scale: [1, 1.1, 0.95, 1],
            opacity: [0.15, 0.25, 0.2, 0.15],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />

        {/* Subtle flowing orb 4 - Warm neutral */}
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(242, 239, 234, 0.2) 0%, rgba(242, 239, 234, 0.05) 50%, transparent 70%)',
            top: '60%',
            right: '30%',
          }}
          animate={{
            x: [0, -50, -80, 0],
            y: [0, -80, -40, 0],
            scale: [1, 0.9, 1.05, 1],
            opacity: [0.1, 0.2, 0.15, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        />

        {/* Accent flowing orb 5 - Teal/Green */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(26, 101, 102, 0.25) 0%, rgba(26, 101, 102, 0.08) 50%, transparent 70%)',
            bottom: '30%',
            right: '15%',
          }}
          animate={{
            x: [0, 60, 100, 0],
            y: [0, 70, 40, 0],
            scale: [1, 1.15, 0.95, 1],
            opacity: [0.12, 0.2, 0.15, 0.12],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
        />

        {/* Subtle gradient waves overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(184, 46, 43, 0.05) 0%, transparent 30%, rgba(111, 136, 181, 0.05) 70%, transparent 100%)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Subtle particle/noise texture overlay for depth */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      {/* MAIN CONTENT - Now sits on top of live background */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center">
          
          {/* LEFT SIDE - STATIC CONTENT */}
          <motion.div 
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge 
              variant="outline" 
              className="mb-3 sm:mb-4 lg:mb-6 text-red-400 border-red-400/50 bg-white/10 backdrop-blur-xl glass-effect px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider"
            >
              TALENT MANAGEMENT STRATEGY
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight mb-3 sm:mb-4 lg:mb-6 uppercase">
              TALENT STRATEGY THAT MOVES THE BUSINESS<span className="inline-block w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-red-600 rounded-full ml-2 align-middle"></span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-xl font-medium text-slate-200 mb-3 sm:mb-4 lg:mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We fuse talent management design and brand experience with AI-enabled technology and data intelligence to align your talent strategy with business ambition.
            </p>

            <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-200 mb-5 sm:mb-7 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Humanfire exists to help organisations unleash human potential by enabling talent and the organisations they work for to thrive together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link to={createPageUrl("BookDemo")}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg lg:text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto"
                >
                  Get in touch
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/50 bg-white/10 backdrop-blur-xl glass-effect text-white hover:bg-white hover:text-slate-800 px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg lg:text-xl font-semibold flex items-center gap-2 sm:gap-3 justify-center w-full sm:w-auto"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span>How it works</span>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT SIDE - ROTATING 3D CUBE */}
          <motion.div 
            className="order-1 lg:order-2 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: "2000px" }}
          >
            <motion.div
              className="relative w-[170px] h-[170px] lg:w-[476px] lg:h-[476px]" // Updated from 200px and 560px (reduced by 15%)
              style={{
                transformStyle: "preserve-3d"
              }}
              animate={{ rotateY: currentFace * 90 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {/* Face 0 - Front (human+design) */}
              <div 
                className="absolute inset-0 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl"
                style={{ 
                  transform: `translateZ(${cubeFaceTranslateZ}px)`,
                  backfaceVisibility: "hidden"
                }}
              >
                <img 
                  src={cubeData[0].imageUrl} 
                  alt={cubeData[0].title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <h3 
                  className="absolute bottom-6 lg:bottom-12 left-0 right-0 text-center font-bold text-lg lg:text-3xl"
                  style={{ color: cubeData[0].color }}
                >
                  {cubeData[0].title.toUpperCase()}
                </h3>
              </div>
              
              {/* Face 1 - Right (human+assist) */}
              <div 
                className="absolute inset-0 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl"
                style={{ 
                  transform: `rotateY(90deg) translateZ(${cubeFaceTranslateZ}px)`,
                  backfaceVisibility: "hidden"
                }}
              >
                <img 
                  src={cubeData[1].imageUrl} 
                  alt={cubeData[1].title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <h3 
                  className="absolute bottom-6 lg:bottom-12 left-0 right-0 text-center font-bold text-lg lg:text-3xl"
                  style={{ color: cubeData[1].color }}
                >
                  {cubeData[1].title.toUpperCase()}
                </h3>
              </div>
              
              {/* Face 2 - Back (human+insight) */}
              <div 
                className="absolute inset-0 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl"
                style={{ 
                  transform: `rotateY(180deg) translateZ(${cubeFaceTranslateZ}px)`,
                  backfaceVisibility: "hidden"
                }}
              >
                <img 
                  src={cubeData[2].imageUrl} 
                  alt={cubeData[2].title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <h3 
                  className="absolute bottom-6 lg:bottom-12 left-0 right-0 text-center font-bold text-lg lg:text-3xl"
                  style={{ color: cubeData[2].color }}
                >
                  {cubeData[2].title.toUpperCase()}
                </h3>
              </div>
              
              {/* Face 3 - Left (human+culture) */}
              <div 
                className="absolute inset-0 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl"
                style={{ 
                  transform: `rotateY(270deg) translateZ(${cubeFaceTranslateZ}px)`,
                  backfaceVisibility: "hidden"
                }}
              >
                <img 
                  src={cubeData[3].imageUrl} 
                  alt={cubeData[3].title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <h3 
                  className="absolute bottom-6 lg:bottom-12 left-0 right-0 text-center font-bold text-lg lg:text-3xl"
                  style={{ color: cubeData[3].color }}
                >
                  {cubeData[3].title.toUpperCase()}
                </h3>
              </div>
            </motion.div>
            
            {/* Scroll indicator */}
            <div className="absolute -bottom-8 sm:-bottom-12 lg:-bottom-20 left-1/2 -translate-x-1/2 text-white/60 text-xs sm:text-sm">
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                <span className="text-xs uppercase tracking-wider">
                  SCROLL TO EXPLORE ({currentFace + 1}/4)
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
