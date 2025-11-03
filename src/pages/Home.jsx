
import React, { useState } from "react";
import { Contact, Newsletter } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Users, Target, Award, TrendingUp, CheckCircle, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

import RotatingCubeHero from "../components/home/RotatingCubeHero";
import StatsSection from "../components/home/StatsSection";
import InteractiveFrameworkSection from "../components/home/InteractiveFrameworkSection";
import HowWeWorkAlternative from "../components/home/HowWeWorkAlternative";
import PrinciplesSection from "../components/about/PrinciplesSection";
import NewsletterSignup from "../components/common/NewsletterSignup";

export default function Home() {
  const teamMembers = [
  {
    name: "selma de morney",
    role: "founder & lead strategist",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQEfVpmbcyO-aQ/profile-displayphoto-crop_800_800/B4DZkpoK89IcAI-/0/1757340021846?e=1762387200&v=beta&t=wBi8T9O6az2KmkNbJ6YtP7rDFPY-ssXPWGmF3kYVbHE",
    email: "selma@humanfire.co",
    linkedin: "https://www.linkedin.com/in/selma-de-morney-a332733a/"
  },
  {
    name: "raeesah hassa",
    role: "People and Organisational Development",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQFbMDUfR8ZP6g/profile-displayphoto-crop_800_800/B4EZiflFYWGoAM-/0/1755023957189?e=1762387200&v=beta&t=s8kpMtfL6zqOFvtdBCbwkks80sRXkJcWxuLxGWw9BDI",
    email: "raeesah@humanfire.co",
    linkedin: "https://www.linkedin.com/in/raeesah-hassa/"
  }];


  return (
    <div className="min-h-screen overflow-hidden bg-white">
      {/* 1. Hero Section with Rotating Cube - DARK */}
      <RotatingCubeHero />
      
      {/* 2. Stats Section - LIGHT */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5
        }}
        className="py-12 lg:py-16 bg-slate-50">
        <StatsSection />
      </motion.div>
      
      {/* 3. Interactive Framework Section - DARK */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5,
          delay: 0.1
        }} className="bg-slate-900 mt-6 mr-2 mb-6 ml-2 py-12 lg:py-20 rounded-3xl sm:mx-6 lg:mx-8">

        <InteractiveFrameworkSection />
      </motion.div>

      {/* 4. How We Work Section - LIGHT */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5,
          delay: 0.1
        }} className="bg-slate-50 py-12 lg:py-20">

        <HowWeWorkAlternative />
      </motion.div>

      {/* 5. Principles Section - LIGHT */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5,
          delay: 0.1
        }} className="bg-white mx-3 pt-8 pb-12 sm:mx-6 lg:mx-8 lg:pt-16 lg:pb-20">

        <PrinciplesSection />
      </motion.div>

      {/* 6. Team Section - LIGHT */}
      <motion.section
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5,
          delay: 0.1
        }} className="bg-slate-50 py-12 lg:py-20">


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 lg:mb-16">

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Meet Our Leaders
              <span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-2 ember-pulse"></span>
            </h2>
            <p className="text-xl font-medium text-slate-600">The Experienced Team Dedicated To Your Success.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-red-500 transition-all duration-300 hover:shadow-2xl glass-effect">

                <div className="relative mb-6">
                  <motion.img
                  src={member.img}
                  alt={member.name}
                  className="w-56 h-56 mx-auto rounded-2xl object-cover shadow-xl group-hover:shadow-2xl transition-shadow duration-300 border-2 border-slate-200"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(220, 38, 38, 0.4)"
                  }}
                  transition={{ duration: 0.2 }} />

                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 capitalize">{member.name}</h3>
                <p className="text-red-600 font-semibold text-base capitalize mb-4">{member.role}</p>
                
                {/* Contact Links */}
                <div className="flex justify-center gap-4 mt-6">
                  <motion.a
                  href={`mailto:${member.email}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group/icon">

                    <Mail className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                  </motion.a>
                  <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group/icon">

                    <Linkedin className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                  </motion.a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* 7. CTA Section - DARK */}
      <motion.section
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5,
          delay: 0.1
        }}
        className="py-12 lg:py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-6 relative heat-haze">
        <div
          className="absolute inset-0 opacity-[0.03] rounded-3xl"
          style={{
            backgroundImage: `url("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/39aac9433_Email_Design_Pattern.jpg")`,
            backgroundSize: '150px',
            backgroundRepeat: 'repeat'
          }}>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
              Ready To Transform Your HR Strategy<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-red-600 rounded-full ml-2 ember-pulse"></span>
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-200 mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Book a personalized demo and discover how humanfire can help you build a more engaged, productive workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center px-4">
              <Link to={createPageUrl("BookDemo")} className="w-full sm:w-auto">
                <Button size="lg" className="fire-button text-white px-10 lg:px-12 py-6 lg:py-7 text-lg lg:text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto">
                  Book Your Demo
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 ml-3" />
                </Button>
              </Link>
              <Link to={createPageUrl("Services")} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-slate-800 px-10 lg:px-12 py-6 lg:py-7 text-lg lg:text-xl font-semibold fire-glow w-full sm:w-auto">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 8. Newsletter Section - LIGHT */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5,
          delay: 0.1
        }}
        className="py-12 lg:py-16 relative bg-slate-50">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/39aac9433_Email_Design_Pattern.jpg")`,
            backgroundSize: '150px',
            backgroundRepeat: 'repeat'
          }}>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </motion.div>
    </div>);

}
