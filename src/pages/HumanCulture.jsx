
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Shield, Target, Users, MessageSquare, TrendingUp, Heart, Zap, Brain } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function HumanCulture() {
  const services = [
  {
    icon: BarChart3,
    title: "Culture Intelligence",
    description: "We use analytics to uncover what's working, what's missing, and where resistance lives—so you can act with precision, not guesswork. We decode cultural barriers—from misaligned behaviours to invisible norms—and design targeted strategies to shift them at the source.",
    color: "from-[#591E45] to-[#6d2454]"
  },
  {
    icon: Shield,
    title: "From Concept to Practice",
    description: "We turn abstract values into lived behaviours through rituals, feedback loops, and daily habits that make culture tangible, not theoretical.",
    color: "from-[#6d2454] to-[#591E45]"
  },
  {
    icon: Target,
    title: "Clear Ownership, Real Accountability",
    description: "We define who leads culture at every level—from Exco to team leads—so culture becomes everyone's work, not just HR's responsibility.",
    color: "from-[#591E45] to-[#6d2454]"
  },
  {
    icon: Users,
    title: "Aligned Messaging, Authentic Action",
    description: "We help you walk the talk—syncing values with leadership behaviour, communication, and systems so what you say matches what people experience.",
    color: "from-[#6d2454] to-[#591E45]"
  },
  {
    icon: MessageSquare,
    title: "Momentum Over Moments",
    description: "Our talent technology allows you to embed culture experiences into the daily flow of work. It's continuous, not campaign-based—designed to evolve with your business, not fade after the kickoff.",
    color: "from-[#591E45] to-[#6d2454]"
  },
  {
    icon: TrendingUp,
    title: "Business-Driven Culture Design",
    description: "We link culture to strategy, performance, and growth—making it a lever for competitive advantage.",
    color: "from-[#6d2454] to-[#591E45]"
  }];


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#591E45]/10 to-slate-950">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(89, 30, 69, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(89, 30, 69, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#591E45]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }} />

        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#591E45]/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }} />

      </div>

      {/* Hero Section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
        className="relative py-16 sm:py-24 lg:py-32 overflow-hidden z-10">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 lg:space-y-8">

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}>

                <Badge className="mb-4 lg:mb-6 bg-[#591E45]/20 text-[#d984b8] border-[#591E45]/30 px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-semibold">
                  <Heart className="w-3 h-3 lg:w-4 lg:h-4 mr-2 inline" />
                  human+culture
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 lg:mb-8">
                  "Culture is not just about values - it's the rhythm of how we work, lead, and belong."
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>

                <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed">
                  We tune the rhythm to match your ambition, because change doesn't happen in a memo. It happens in a movement. And movement ignites culture.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3 lg:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}>

                <Link to={createPageUrl("BookDemo")}>
                  <Button size="lg" className="bg-gradient-to-r from-[#591E45] to-[#6d2454] hover:from-[#6d2454] hover:to-[#7d2a5f] text-white px-6 py-5 lg:px-8 lg:py-6 text-base lg:text-lg shadow-lg shadow-[#591E45]/25 hover:shadow-[#591E45]/40 transition-all duration-300 group border-0 w-full sm:w-auto">
                    Start Your Transformation
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block">

              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-[#591E45]/30 shadow-2xl shadow-[#591E45]/20">
                <motion.img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/9eebaf541_AdobeStock_13128754921.jpg"
                  alt="Culture Transformation"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#591E45]/60 via-transparent to-transparent"></div>
                
                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    boxShadow: [
                      "inset 0 0 60px rgba(89, 30, 69, 0.3)",
                      "inset 0 0 80px rgba(89, 30, 69, 0.5)",
                      "inset 0 0 60px rgba(89, 30, 69, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Culture Transformation Context */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }} className="py-8 sm:py-12 lg:py-16 relative z-10">


        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative">

            {/* Main Content Card */}
            <div className="relative rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-14 overflow-hidden glass-effect border-2 border-[#591E45]/20">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#591E45]/20 via-[#591E45]/10 to-[#6d2454]/20" />
              
              {/* Decorative corner elements */}
              <motion.div
                className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#591E45]/30 to-transparent rounded-br-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }} />

              <motion.div
                className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#591E45]/30 to-transparent rounded-tl-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }} />


              <div className="relative z-10">
                {/* First Paragraph with Icon */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#591E45] to-[#6d2454] flex items-center justify-center flex-shrink-0 shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}>

                      <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
                        Culture transformation isn't about better campaigns—it's about shifting the invisible patterns that actually drive behavior. The organizations that get this right don't declare culture; they diagnose it, design interventions that fit their reality, and embed change into how work happens every day.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6 lg:my-8">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#591E45]/40 to-transparent"></div>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#591E45]"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }} />

                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#591E45]/40 to-transparent"></div>
                </div>

                {/* Transformation Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center p-4 sm:p-6 rounded-xl lg:rounded-2xl bg-gradient-to-br from-[#591E45]/10 to-transparent border border-[#591E45]/20 hover:border-[#591E45]/40 transition-all duration-300">

                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#591E45]/20 mb-3 sm:mb-4">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#d984b8]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      <span className="block text-slate-400 text-xs sm:text-sm mb-1">From</span>
                      <span className="font-semibold text-slate-300">culture as communication</span>
                      <span className="block text-slate-400 text-xs sm:text-sm mt-1">To</span>
                      <span className="font-semibold text-[#d984b8]">culture as capability</span>
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center p-4 sm:p-6 rounded-xl lg:rounded-2xl bg-gradient-to-br from-[#591E45]/10 to-transparent border border-[#591E45]/20 hover:border-[#591E45]/40 transition-all duration-300">

                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#591E45]/20 mb-3 sm:mb-4">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#d984b8]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      <span className="block text-slate-400 text-xs sm:text-sm mb-1">From</span>
                      <span className="font-semibold text-slate-300">aspirational statements</span>
                      <span className="block text-slate-400 text-xs sm:text-sm mt-1">To</span>
                      <span className="font-semibold text-[#d984b8]">actionable intelligence</span>
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center p-4 sm:p-6 rounded-xl lg:rounded-2xl bg-gradient-to-br from-[#591E45]/10 to-transparent border border-[#591E45]/20 hover:border-[#591E45]/40 transition-all duration-300 sm:col-span-2 md:col-span-1">

                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#591E45]/20 mb-3 sm:mb-4">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#d984b8]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      <span className="block text-slate-400 text-xs sm:text-sm mb-1">From</span>
                      <span className="font-semibold text-slate-300">isolated initiatives</span>
                      <span className="block text-slate-400 text-xs sm:text-sm mt-1">To</span>
                      <span className="font-semibold text-[#d984b8]">integrated strategy</span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* How We Build Culture That Sticks */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-16 sm:py-20 lg:py-24 relative z-10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 lg:mb-16">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              How We Build Culture That Sticks
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-[#591E45] rounded-full ml-2 ember-pulse"></span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              Moving beyond posters and one-off workshops to create lasting cultural change
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

            {services.map((item, index) =>
            <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-2 border-slate-800/50 hover:border-[#591E45]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[#591E45]/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />


                  <CardHeader className="pb-3 sm:pb-4 relative z-10">
                    <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}>

                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-slate-200">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>

                  {/* Animated corner accent */}
                  <motion.div
                  className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tl from-[#591E45]/20 to-transparent rounded-tl-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }} />

                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Culture Canvas Section - DESIGN 1 (Original) */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-16 sm:py-20 lg:py-24 relative z-10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-10 lg:mb-12">

            <Badge className="mb-4 bg-[#591E45]/20 text-[#d984b8] border-[#591E45]/30 px-3 py-1.5 text-xs">
              Design 1 - Original
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              The Culture Canvas
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-[#591E45] rounded-full ml-2 ember-pulse"></span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              A comprehensive blueprint for assessing and evolving your workplace culture
            </p>
          </motion.div>

          {/* Culture Canvas Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl mx-auto">

            <div className="relative">
              {/* Three Column Headers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                {/* Functional Culture - Agility */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center">

                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-700/20 border-2 border-blue-500/30 mb-3 sm:mb-4">
                    <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-1 sm:mb-2">FUNCTIONAL CULTURE</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">Agility</p>
                </motion.div>

                {/* The Core - Alignment */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center">

                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#591E45]/20 to-[#6d2454]/20 border-2 border-[#591E45]/30 mb-3 sm:mb-4">
                    <Target className="w-7 h-7 sm:w-8 sm:h-8 text-[#d984b8]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#d984b8] mb-1 sm:mb-2">THE CORE</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">Alignment</p>
                </motion.div>

                {/* Emotional Culture - Belonging */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center">

                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-600/20 to-pink-700/20 border-2 border-pink-500/30 mb-3 sm:mb-4">
                    <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-pink-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-pink-400 mb-1 sm:mb-2">EMOTIONAL CULTURE</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">Belonging</p>
                </motion.div>
              </div>

              {/* Main Canvas Grid */}
              <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-slate-800/50 overflow-hidden backdrop-blur-sm">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50" />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {/* Left Column - Functional Culture Elements */}
                  <div className="space-y-4 sm:space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 bg-gradient-to-br from-blue-900/10 to-transparent">

                      <h4 className="text-base sm:text-lg font-bold text-blue-400 mb-1 sm:mb-2">DECISION-MAKING</h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">How decision-making is shared</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 bg-gradient-to-br from-blue-900/10 to-transparent">

                      <h4 className="text-base sm:text-lg font-bold text-blue-400 mb-1 sm:mb-2">COMMUNICATION</h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">How we meet, communicate and collaborate</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 bg-gradient-to-br from-blue-900/10 to-transparent">

                      <h4 className="text-base sm:text-lg font-bold text-blue-400 mb-1 sm:mb-2">NORMS & RULES</h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">Our ways of work and talent practices</p>
                    </motion.div>
                  </div>

                  {/* Center Column - The Core */}
                  <div className="flex flex-col items-center justify-center my-6 md:my-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="relative w-full max-w-[280px] sm:max-w-xs">

                      {/* Outer ring */}
                      <div className="relative">
                        <motion.div
                          animate={{
                            rotate: 360
                          }}
                          transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute inset-0 rounded-full border-2 border-dashed border-[#591E45]/30" />

                        
                        {/* Main purpose circle */}
                        <div className="relative glass-effect rounded-full p-4 sm:p-6 border-4 border-[#591E45]/40 bg-gradient-to-br from-[#591E45]/30 via-slate-900/50 to-[#591E45]/30">
                          <div className="text-center space-y-2 sm:space-y-3">
                            <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#591E45] to-[#6d2454] mb-1 sm:mb-2">
                              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-[10px] sm:text-xs text-[#d984b8] font-semibold mb-1 sm:mb-2">CULTURAL PRIORITIES</p>
                              <p className="text-[10px] sm:text-xs text-slate-400 mb-2 sm:mb-3 leading-relaxed">The core strategies that will guide our focus and energy</p>
                            </div>
                            <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 mb-2 sm:mb-3">
                              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">PURPOSE</h4>
                              <p className="text-[10px] sm:text-xs text-slate-600">Why we exist,<br />our shared meaning</p>
                            </div>
                            <div className="border-t border-[#591E45]/30 pt-2 sm:pt-3">
                              <h4 className="text-xs sm:text-sm font-bold text-slate-200 mb-1">BEHAVIOURS</h4>
                              <p className="text-[10px] sm:text-xs text-slate-400">How we live our values and behaviours</p>
                            </div>
                          </div>
                        </div>

                        {/* Pulsing effect */}
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 rounded-full bg-[#591E45]/20 blur-xl" />

                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column - Emotional Culture Elements */}
                  <div className="space-y-4 sm:space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 bg-gradient-to-br from-pink-900/10 to-transparent">

                      <h4 className="text-base sm:text-lg font-bold text-pink-400 mb-1 sm:mb-2">RITUALS</h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">How we celebrate our people, projects, successes and work</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 bg-gradient-to-br from-pink-900/10 to-transparent">

                      <h4 className="text-base sm:text-lg font-bold text-pink-400 mb-1 sm:mb-2">FEEDBACK</h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">How we help each other learn and grow</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 bg-gradient-to-br from-pink-900/10 to-transparent">

                      <h4 className="text-base sm:text-lg font-bold text-pink-400 mb-1 sm:mb-2">PSYCHOLOGICAL SAFETY</h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">How we encourage everyone to speak up<br />How we promote participation and candor</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Culture Canvas Section - DESIGN 2 (Horizontal Flow) */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-16 sm:py-20 lg:py-24 relative z-10 bg-slate-900/30">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-10 lg:mb-12">

            <Badge className="mb-4 bg-[#591E45]/20 text-[#d984b8] border-[#591E45]/30 px-3 py-1.5 text-xs">
              Design 2 - Horizontal Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              The Culture Canvas
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-[#591E45] rounded-full ml-2 ember-pulse"></span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              A journey through the layers of workplace culture
            </p>
          </motion.div>

          {/* Horizontal Flow Design */}
          <div className="max-w-6xl mx-auto">
            {/* Functional Culture - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-700/20 border-2 border-blue-500/30 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">FUNCTIONAL CULTURE</h3>
                  <p className="text-slate-400">Agility</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "DECISION-MAKING", desc: "How decision-making is shared" },
                  { title: "COMMUNICATION", desc: "How we meet, communicate and collaborate" },
                  { title: "NORMS & RULES", desc: "Our ways of work and talent practices" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="glass-effect rounded-xl p-6 border-2 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 bg-gradient-to-br from-blue-900/10 to-transparent">
                    <h4 className="text-lg font-bold text-blue-400 mb-2">{item.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* The Core - Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12">
              
              <div className="relative glass-effect rounded-3xl p-8 border-4 border-[#591E45]/40 bg-gradient-to-br from-[#591E45]/30 via-slate-900/50 to-[#591E45]/30 max-w-2xl mx-auto">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#591E45] to-[#6d2454] flex items-center justify-center">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-[#d984b8]">THE CORE</h3>
                      <p className="text-slate-400">Alignment</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-slate-900 mb-2">PURPOSE</h4>
                      <p className="text-sm text-slate-600">Why we exist, our shared meaning</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-2xl p-6 border-2 border-[#591E45]/30">
                      <h4 className="text-xl font-bold text-slate-200 mb-2">BEHAVIOURS</h4>
                      <p className="text-sm text-slate-400">How we live our values and behaviours</p>
                    </div>
                  </div>

                  <p className="text-xs text-[#d984b8] font-semibold">
                    CULTURAL PRIORITIES: The core strategies that will guide our focus and energy
                  </p>
                </div>

                {/* Pulsing effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-3xl bg-[#591E45]/20 blur-xl -z-10" />
              </div>
            </motion.div>

            {/* Emotional Culture - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-0">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600/20 to-pink-700/20 border-2 border-pink-500/30 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-400">EMOTIONAL CULTURE</h3>
                  <p className="text-slate-400">Belonging</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "RITUALS", desc: "How we celebrate our people, projects, successes and work" },
                  { title: "FEEDBACK", desc: "How we help each other learn and grow" },
                  { title: "PSYCHOLOGICAL SAFETY", desc: "How we encourage everyone to speak up. How we promote participation and candor" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="glass-effect rounded-xl p-6 border-2 border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 bg-gradient-to-br from-pink-900/10 to-transparent">
                    <h4 className="text-lg font-bold text-pink-400 mb-2">{item.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Culture Canvas Section - DESIGN 3 (Radial/Circular) */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-16 sm:py-20 lg:py-24 relative z-10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-10 lg:mb-12">

            <Badge className="mb-4 bg-[#591E45]/20 text-[#d984b8] border-[#591E45]/30 px-3 py-1.5 text-xs">
              Design 3 - Radial Interconnected
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              The Culture Canvas
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-[#591E45] rounded-full ml-2 ember-pulse"></span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              An interconnected ecosystem of cultural elements
            </p>
          </motion.div>

          {/* Radial Design */}
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-square max-w-4xl mx-auto">
              {/* Background orbital rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                  className="w-[80%] h-[80%] rounded-full border-2 border-dashed border-[#591E45]/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[95%] h-[95%] rounded-full border border-dotted border-blue-500/10"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[95%] h-[95%] rounded-full border border-dotted border-pink-500/10"
                />
              </div>

              {/* Center Core */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, type: "spring" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-20">
                
                <div className="relative w-full h-full">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-[#591E45] to-[#6d2454] blur-2xl"
                  />
                  
                  <div className="relative glass-effect rounded-full p-8 border-4 border-[#591E45]/50 bg-gradient-to-br from-[#591E45]/40 via-slate-900/90 to-[#591E45]/40 h-full flex flex-col items-center justify-center text-center">
                    <Target className="w-12 h-12 text-[#d984b8] mb-3" />
                    <h3 className="text-xl font-bold text-[#d984b8] mb-2">THE CORE</h3>
                    <p className="text-xs text-slate-400 mb-3">Alignment</p>
                    <div className="space-y-2">
                      <div className="bg-white/90 rounded-lg px-3 py-2">
                        <p className="text-xs font-bold text-slate-900">PURPOSE</p>
                      </div>
                      <div className="border border-[#591E45]/40 rounded-lg px-3 py-2">
                        <p className="text-xs font-bold text-slate-200">BEHAVIOURS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Functional Culture Elements (Blue) - Top Half */}
              {/* Decision-Making - Top */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-48 z-10">
                
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glass-effect rounded-2xl p-4 border-2 border-blue-500/40 bg-gradient-to-br from-blue-600/20 to-blue-900/20 backdrop-blur-xl shadow-lg">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-blue-400">DECISION-MAKING</h4>
                    <p className="text-xs text-slate-300 leading-tight">How decision-making is shared</p>
                  </div>
                </motion.div>
                {/* Connection line to center */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-500/50 to-transparent" />
              </motion.div>

              {/* Communication - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-[15%] left-[5%] w-48 z-10">
                
                <motion.div
                  whileHover={{ scale: 1.1, x: -5, y: -5 }}
                  className="glass-effect rounded-2xl p-4 border-2 border-blue-500/40 bg-gradient-to-br from-blue-600/20 to-blue-900/20 backdrop-blur-xl shadow-lg">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-blue-400">COMMUNICATION</h4>
                    <p className="text-xs text-slate-300 leading-tight">How we meet, communicate and collaborate</p>
                  </div>
                </motion.div>
                {/* Connection line to center */}
                <div className="absolute top-1/2 left-full w-20 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent origin-left rotate-[35deg]" />
              </motion.div>

              {/* Norms & Rules - Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-[15%] right-[5%] w-48 z-10">
                
                <motion.div
                  whileHover={{ scale: 1.1, x: 5, y: -5 }}
                  className="glass-effect rounded-2xl p-4 border-2 border-blue-500/40 bg-gradient-to-br from-blue-600/20 to-blue-900/20 backdrop-blur-xl shadow-lg">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-blue-400">NORMS & RULES</h4>
                    <p className="text-xs text-slate-300 leading-tight">Our ways of work and talent practices</p>
                  </div>
                </motion.div>
                {/* Connection line to center */}
                <div className="absolute top-1/2 right-full w-20 h-0.5 bg-gradient-to-l from-blue-500/50 to-transparent origin-right -rotate-[35deg]" />
              </motion.div>

              {/* Emotional Culture Elements (Pink) - Bottom Half */}
              {/* Rituals - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-[15%] left-[5%] w-48 z-10">
                
                <motion.div
                  whileHover={{ scale: 1.1, x: -5, y: 5 }}
                  className="glass-effect rounded-2xl p-4 border-2 border-pink-500/40 bg-gradient-to-br from-pink-600/20 to-pink-900/20 backdrop-blur-xl shadow-lg">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-pink-400">RITUALS</h4>
                    <p className="text-xs text-slate-300 leading-tight">How we celebrate our people, projects, successes and work</p>
                  </div>
                </motion.div>
                {/* Connection line to center */}
                <div className="absolute bottom-1/2 left-full w-20 h-0.5 bg-gradient-to-r from-pink-500/50 to-transparent origin-left -rotate-[35deg]" />
              </motion.div>

              {/* Feedback - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-[15%] right-[5%] w-48 z-10">
                
                <motion.div
                  whileHover={{ scale: 1.1, x: 5, y: 5 }}
                  className="glass-effect rounded-2xl p-4 border-2 border-pink-500/40 bg-gradient-to-br from-pink-600/20 to-pink-900/20 backdrop-blur-xl shadow-lg">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-pink-400">FEEDBACK</h4>
                    <p className="text-xs text-slate-300 leading-tight">How we help each other learn and grow</p>
                  </div>
                </motion.div>
                {/* Connection line to center */}
                <div className="absolute bottom-1/2 right-full w-20 h-0.5 bg-gradient-to-l from-pink-500/50 to-transparent origin-right rotate-[35deg]" />
              </motion.div>

              {/* Psychological Safety - Bottom */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 z-10">
                
                <motion.div
                  whileHover={{ scale: 1.1, y: 5 }}
                  className="glass-effect rounded-2xl p-4 border-2 border-pink-500/40 bg-gradient-to-br from-pink-600/20 to-pink-900/20 backdrop-blur-xl shadow-lg">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-pink-400">PSYCHOLOGICAL SAFETY</h4>
                    <p className="text-xs text-slate-300 leading-tight">How we encourage everyone to speak up</p>
                  </div>
                </motion.div>
                {/* Connection line to center */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-t from-pink-500/50 to-transparent" />
              </motion.div>

              {/* Category Labels */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute top-[5%] left-[20%] glass-effect rounded-full px-4 py-2 border border-blue-500/30 bg-blue-900/20">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold text-blue-400">FUNCTIONAL - Agility</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute bottom-[5%] right-[20%] glass-effect rounded-full px-4 py-2 border border-pink-500/30 bg-pink-900/20">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-400" />
                  <span className="text-xs font-bold text-pink-400">EMOTIONAL - Belonging</span>
                </div>
              </motion.div>
            </div>

            {/* Legend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 text-center">
              <p className="text-sm text-slate-400 italic">
                All cultural elements orbit and connect to your organization's core purpose and behaviors
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-16 sm:py-20 lg:py-24 relative z-10">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 overflow-hidden">

            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#591E45]/20 via-[#591E45]/10 to-[#6d2454]/20 backdrop-blur-xl" />
            <div className="absolute inset-0 border-2 border-[#591E45]/20 rounded-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Ready to tune your culture's rhythm?
              </h2>
              <p className="text-lg sm:text-xl text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let's create a culture that moves your people and business forward together.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to={createPageUrl("BookDemo")}>
                  <Button size="lg" className="bg-gradient-to-r from-[#591E45] to-[#6d2454] hover:from-[#6d2454] hover:to-[#7d2a5f] text-white px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg shadow-lg shadow-[#591E45]/25 hover:shadow-[#591E45]/40 transition-all duration-300 border-0 w-full sm:w-auto">
                    Book Your Culture Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
                <Link to={createPageUrl("Services")}>
                  <Button size="lg" variant="outline" className="border-2 border-[#591E45]/30 bg-[#591E45]/5 text-[#d984b8] hover:bg-[#591E45]/10 px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg backdrop-blur-sm w-full sm:w-auto">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>);

}
