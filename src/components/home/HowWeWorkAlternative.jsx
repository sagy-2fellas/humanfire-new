
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Feather, RefreshCw, Boxes, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const journeySteps = [
  {
    icon: Lightbulb,
    phase: "Phase 1",
    title: "Discover",
    tagline: "Understanding and alignment",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Clear diagnostics of current state",
      "Strategic alignment on priorities",
      "Shared understanding of success"
    ],
    color: "from-red-600 to-orange-500"
  },
  {
    icon: Feather,
    phase: "Phase 2",
    title: "Shape",
    tagline: "Co-creation and design",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Customized tools and frameworks",
      "Detailed change roadmap",
      "Pilot-tested solutions"
    ],
    color: "from-slate-700 to-slate-600"
  },
  {
    icon: RefreshCw,
    phase: "Phase 3",
    title: "Mobilise",
    tagline: "Activation and momentum",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Strategy becomes reality",
      "Tools deployed and integrated",
      "Teams trained and engaged"
    ],
    color: "from-slate-600 to-slate-500"
  },
  {
    icon: Boxes,
    phase: "Phase 4",
    title: "Enrich",
    tagline: "Sustainability and evolution",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Data tracking impact",
      "Continuous improvement",
      "Internal capability built"
    ],
    color: "from-teal-600 to-teal-500"
  }
];

export default function HowWeWorkAlternative() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/39aac9433_Email_Design_Pattern.jpg")`,
          backgroundSize: '150px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glass Container Wrapper */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border-2 border-white/20 shadow-2xl glass-effect">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"> {/* Removed uppercase */}
              How We Work
              <span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-2 ember-pulse"></span>
            </h2>
            <p className="text-xl font-medium text-slate-700 max-w-3xl mx-auto leading-relaxed">
              A collaborative journey where your success is built through partnership, not prescription.
            </p>
          </motion.div>

          {/* Journey Steps - Alternating Layout */}
          <div className="space-y-12 lg:space-y-16"> {/* Reduced spacing */}
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Side */}
                <motion.div
                  className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Phase Badge */}
                    <motion.div
                      className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-sm shadow-lg backdrop-blur-sm`}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(220, 38, 38, 0.3)",
                          "0 0 30px rgba(220, 38, 38, 0.5)",
                          "0 0 20px rgba(220, 38, 38, 0.3)"
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {step.phase}
                    </motion.div>

                    {/* Icon Badge */}
                    <motion.div
                      className="absolute bottom-6 right-6 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-8 h-8 text-red-600" strokeWidth={2.5} />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3"> {/* Removed uppercase */}
                      {step.title}
                    </h3>
                    <p className="text-xl text-red-600 font-semibold">
                      {step.tagline}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {step.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}>
                          <CheckCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>
                        <p className="text-lg text-slate-700 font-medium leading-relaxed flex-1">
                          {highlight}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Step Number Indicator */}
                  <motion.div
                    className="flex items-center gap-3 pt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${step.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${((index + 1) / journeySteps.length) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                    <span className="text-sm font-bold text-slate-500">
                      {index + 1}/{journeySteps.length}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 lg:mt-16" // Reduced spacing
          >
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 lg:p-16 text-center overflow-hidden border-2 border-slate-700">
              {/* Animated Logo Lockup Background */}
              <motion.div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `url("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/39aac9433_Email_Design_Pattern.jpg")`,
                  backgroundSize: '200px',
                  backgroundRepeat: 'repeat',
                  backgroundPosition: 'center'
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: "linear"
                }}
              />

              {/* Animated Gradient Overlays */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                  x: [0, 50, 0],
                  y: [0, 30, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-700/20 rounded-full blur-3xl"
                animate={{
                  scale: [1.3, 1, 1.3],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, -50, 0],
                  y: [0, -30, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="w-12 h-12 text-red-500 mx-auto mb-6" />
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4"> {/* Removed uppercase */}
                  The Bottom Line
                </h3>
                <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  <span className="font-bold text-red-400">This isn't a handoff.</span> We're a journey partner. We succeed when you succeed—and success means you're more capable, more confident, and more competitive because of the work we did together.
                </p>
                
                <Link to={createPageUrl("BookDemo")}>
                  <Button size="lg" className="fire-button text-white px-10 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl group">
                    Let's Start Your Journey
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
