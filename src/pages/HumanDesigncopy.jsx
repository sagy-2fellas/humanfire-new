import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, TrendingUp, Users, BrainCircuit, Shield, Megaphone, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function HumanDesigncopy() {
  const [activeFocus, setActiveFocus] = useState(null);
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const focusAreas = [
    { 
      icon: BrainCircuit, 
      title: "Leadership Behaviors", 
      description: "We build the behaviors your strategy needs to succeed",
      color: "#8B7355"
    },
    { 
      icon: Target, 
      title: "Strategic Sourcing", 
      description: "Build tomorrow's capability through intelligent sourcing",
      color: "#6B7C93"
    },
    { 
      icon: TrendingUp, 
      title: "Performance Practice", 
      description: "Connect individual goals to organizational growth",
      color: "#7A6C7D"
    },
    { 
      icon: Users, 
      title: "Succession Pipelines", 
      description: "Identify and develop future leaders",
      color: "#8B7355"
    },
    { 
      icon: Shield, 
      title: "Retention Strategies", 
      description: "Protect critical talent",
      color: "#6B7C93"
    },
    { 
      icon: Megaphone, 
      title: "Employer Branding", 
      description: "Articulate what makes you different",
      color: "#7A6C7D"
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F4] overflow-hidden">
      {/* 1. Hero Section - Minimalist Editorial */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#2A2A2A]">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />
        </div>

        {/* Content wrapper */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Minimalist Content */}
            <motion.div 
              style={{ opacity: contentOpacity }}
              className="space-y-12 max-w-xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <Badge 
                  variant="outline" 
                  className="mb-8 text-[#C9B8A8] border-[#C9B8A8]/30 bg-transparent backdrop-blur-none px-5 py-2 text-xs font-light tracking-[0.2em] uppercase"
                >
                  human + design
                </Badge>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-light text-[#E8E6E3] leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Talent as
                <br />
                <span className="italic font-normal">competitive</span>
                <br />
                edge
              </motion.h1>

              <motion.p
                className="text-lg lg:text-xl text-[#B8B5B0] font-light leading-relaxed max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Strategy designed to feel as human as it is intelligent
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.6, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={createPageUrl("BookDemo")}>
                  <Button 
                    size="lg" 
                    className="bg-transparent border border-[#C9B8A8]/40 text-[#E8E6E3] hover:bg-[#C9B8A8]/10 px-10 py-7 text-sm font-light tracking-wider uppercase transition-all duration-500"
                  >
                    Begin
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Hero Image with Motion Blur Effect */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                style={{ y: imageY }}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/68f476ae4_AdobeStock_876973765.jpg"
                  alt="Human consciousness and design"
                  className="w-full h-full object-cover grayscale-[30%] contrast-110"
                />
                
                {/* Subtle gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2A2A2A]/40 via-transparent to-transparent" />
                
                {/* Motion blur band across eyes */}
                <motion.div
                  className="absolute top-[35%] left-0 right-0 h-[15%] bg-gradient-to-r from-[#C9B8A8]/0 via-[#C9B8A8]/40 to-[#C9B8A8]/0 backdrop-blur-md"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Minimalist scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 8, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#C9B8A8] to-transparent" />
        </motion.div>
      </section>

      {/* 2. The Challenge - Clean Typography Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
        className="relative py-32 lg:py-40 bg-[#F8F7F4]"
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-center space-y-8"
          >
            <Badge 
              variant="outline" 
              className="mb-8 text-[#8B7355] border-[#8B7355]/20 bg-transparent px-5 py-2 text-xs font-light tracking-[0.2em] uppercase"
            >
              The Gap
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-light text-[#2A2A2A] leading-tight max-w-3xl mx-auto">
              Strategic intent rarely translates to operational reality
            </h2>
            
            <p className="text-lg lg:text-xl text-[#6B6B6B] font-light leading-relaxed max-w-2xl mx-auto pt-8">
              The gap between what talent teams know they should do and what their systems allow them to do has never been wider
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. Our Approach - The Three Pillars */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
        className="py-32 lg:py-40 bg-[#2A2A2A] relative overflow-hidden"
      >
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,184,168,0.05)_0%,_transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-[#E8E6E3] mb-8">
              We close that gap
            </h2>
            <div className="w-16 h-[1px] bg-[#C9B8A8]/40 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
            {[
              {
                icon: Zap,
                title: "Tools",
                description: "Design and practices for all talent management processes"
              },
              {
                icon: BrainCircuit,
                title: "Technology",
                description: "AI-powered capabilities that bring intelligence"
              },
              {
                icon: Users,
                title: "Team",
                description: "Expert strategists working alongside you"
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="text-center space-y-6"
              >
                <motion.div
                  className="w-16 h-16 mx-auto flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <pillar.icon className="w-10 h-10 text-[#C9B8A8]" strokeWidth={1} />
                </motion.div>
                
                <h3 className="text-xl font-light text-[#E8E6E3] tracking-wider uppercase">
                  {pillar.title}
                </h3>
                
                <p className="text-[#B8B5B0] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. Focus Areas - Grid with Negative Space */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
        className="py-32 lg:py-40 bg-[#F8F7F4]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-[#2A2A2A] mb-4">
              Our focus
            </h2>
            <div className="w-16 h-[1px] bg-[#8B7355]/30 mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseEnter={() => setActiveFocus(index)}
                onMouseLeave={() => setActiveFocus(null)}
                className="cursor-pointer group"
              >
                <Card 
                  className="h-full bg-white/40 backdrop-blur-sm border border-[#E0DDD8]/40 hover:border-[#8B7355]/30 transition-all duration-700 overflow-hidden shadow-none"
                >
                  <CardContent className="p-8 space-y-6">
                    <motion.div
                      className="w-12 h-12 flex items-center justify-center"
                      animate={{
                        scale: activeFocus === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <area.icon 
                        className="w-8 h-8 transition-colors duration-500" 
                        style={{
                          color: activeFocus === index ? area.color : '#B8B5B0'
                        }}
                        strokeWidth={1}
                      />
                    </motion.div>
                    
                    <h3 className="text-lg font-light text-[#2A2A2A] leading-snug">
                      {area.title}
                    </h3>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: activeFocus === index ? 'auto' : 0,
                        opacity: activeFocus === index ? 1 : 0
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#6B6B6B] font-light text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. Final CTA - Minimalist */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
        className="py-32 lg:py-40 bg-[#2A2A2A] relative overflow-hidden"
      >
        {/* Subtle glow */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9B8A8]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-12"
          >
            <h2 className="text-4xl lg:text-6xl font-light text-[#E8E6E3] leading-tight max-w-3xl mx-auto">
              Ready to design your competitive edge
            </h2>
            
            <div className="w-16 h-[1px] bg-[#C9B8A8]/40 mx-auto" />
            
            <p className="text-lg lg:text-xl text-[#B8B5B0] font-light leading-relaxed max-w-2xl mx-auto">
              A talent strategy that is not just a process, but a true driver of business success
            </p>
            
            <Link to={createPageUrl("BookDemo")}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Button 
                  size="lg" 
                  className="bg-transparent border border-[#C9B8A8]/40 text-[#E8E6E3] hover:bg-[#C9B8A8]/10 px-12 py-7 text-sm font-light tracking-wider uppercase transition-all duration-500"
                >
                  Start the conversation
                  <ArrowRight className="w-4 h-4 ml-3" strokeWidth={1} />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}