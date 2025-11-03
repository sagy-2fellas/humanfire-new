
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, Target, Zap, Shield, TrendingUp, Users, CheckCircle, ChevronDown, Sparkles, Code2, AlertCircle, Palette, Layers } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import EcosystemVisualization from "@/components/humandesign/EcosystemVisualization";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function HumanAssist() {
  const [activeFaq, setActiveFaq] = React.useState(null);

  const features = [
    {
      icon: Zap,
      title: "Deliver Plug & Play Power",
      description: "A talent solution that is fast to deploy, easy to integrate, built to scale that delivers real impact and insights in just under 3 months.",
      color: "from-[#6F88B5] to-[#5a6d95]",
      iconColor: "text-[#6F88B5]"
    },
    {
      icon: Palette,
      title: "Design Elevated",
      description: "We evolve, and shape Integrate talent processes into one ecosystem so culture… engagement… behaviours are part of the talent conversation.",
      color: "from-[#5a6d95] to-[#6F88B5]",
      iconColor: "text-[#6F88B5]"
    },
    {
      icon: Shield,
      title: "One Source of Truth",
      description: "Integrate assessments and insights that fuel smarter decisions and more objective practices.",
      color: "from-[#6F88B5] to-[#8599bf]",
      iconColor: "text-[#6F88B5]"
    },
    {
      icon: TrendingUp,
      title: "Succession Sorted",
      description: "Identify and prepare future leaders before the gaps appear.",
      color: "from-[#8599bf] to-[#6F88B5]",
      iconColor: "text-[#6F88B5]"
    },
    {
      icon: Users,
      title: "Retention Radar",
      description: "Predict and prevent talent loss with AI-powered insights.",
      color: "from-[#6F88B5] to-[#5a6d95]",
      iconColor: "text-[#6F88B5]"
    },
    {
      icon: CheckCircle,
      title: "Performance That Drives Growth",
      description: "Align goals with ambition — and track what matters.",
      color: "from-[#5a6d95] to-[#6F88B5]",
      iconColor: "text-[#6F88B5]"
    }
  ];

  const whyProblems = [
    {
      title: "Traditional HR systems are built for HR, not humans",
      description: "They prioritize process and event-driven talent initiatives over people."
    },
    {
      title: "Too rigid for today's work",
      description: "They don't flex with hybrid, fluid careers or integrate with a range of talent practices and moments that matter that impact talent management."
    },
    {
      title: "Disconnected from culture",
      description: "Ignore what truly drives engagement and adoption of talent practices."
    },
    {
      title: "One-size-fits-none",
      description: "They fail to reflect diverse ambitions of the organisation."
    },
    {
      title: "Automate the wrong things",
      description: "Legacy tech doesn't fix broken processes—it just speeds up and automates what doesn't work."
    }
  ];

  const tailaPrinciples = [
    {
      title: "Strengthen Human Trust",
      description: "Improve relationships and build trust.",
      icon: Users
    },
    {
      title: "Challenge Bias",
      description: "Use data to reduce cognitive bias.",
      icon: Shield
    },
    {
      title: "Elevate Talent Value",
      description: "Recognise and grow each person's unique value.",
      icon: TrendingUp
    },
    {
      title: "Contextual Intelligence",
      description: "Deliver tailored, actionable recommendations.",
      icon: Bot
    },
    {
      title: "Promote Cultural Integrity",
      description: "Reinforce culture with every action.",
      icon: Palette
    },
    {
      title: "Be Transparent",
      description: "Show clear reasoning for every recommendation.",
      icon: CheckCircle
    },
    {
      title: "Protect Data",
      description: "Safeguard people data, ethically and securely.",
      icon: Layers
    }
  ];

  const faqs = [
    {
      question: "How Does TAILA Improve, Rather Than Diminish, the Quality of Human Relationships and Interactions?",
      answer: "TAILA enhances human connection by providing managers with instant, data-backed insights that make talent conversations more meaningful. Instead of replacing human judgment, TAILA equips leaders with context and clarity, enabling deeper, more personalized development discussions. It removes guesswork and administrative burden, freeing managers to focus on what matters most: genuine human connection and strategic guidance."
    },
    {
      question: "How Does TAILA Minimise, Rather Than Amplify, Cognitive Biases?",
      answer: "TAILA is designed with bias mitigation at its core. By analyzing talent data objectively across multiple dimensions—skills, performance, potential, and engagement—it provides a balanced perspective that challenges subjective assumptions. The AI surfaces patterns and insights that might be overlooked due to recency bias, similarity bias, or favoritism, prompting managers to consider a fuller picture before making critical talent decisions."
    },
    {
      question: "How Does TAILA Elevate, Rather Than Reduce or Remove, the Value of the Talent in My Business?",
      answer: "TAILA amplifies talent value by ensuring no one is overlooked. It identifies hidden potential, surfaces development opportunities, and matches people to roles where they'll thrive. Rather than reducing people to data points, TAILA ensures every individual's unique strengths, aspirations, and contributions are visible and valued. It transforms talent from a cost center into a strategic asset by optimizing deployment, development, and retention."
    },
    {
      question: "How Does TAILA Enhance Outcomes, Rather Than Activities?",
      answer: "TAILA shifts focus from busy work to meaningful impact. Instead of tracking compliance metrics or process completion, it provides insights that drive tangible business outcomes: improved retention, faster succession readiness, better role-talent fit, and increased performance. Every recommendation is tied to strategic goals, ensuring talent initiatives deliver measurable value rather than just checking boxes."
    },
    {
      question: "How Does TAILA Make it Easier for People to Do the Right Thing (Contribute to Our Culture), Rather Than the Wrong Thing (Kill Our Culture)?",
      answer: "TAILA embeds your cultural values and leadership principles into everyday talent decisions. By providing real-time guidance aligned with your EVP and strategic priorities, it makes culture-aligned choices the path of least resistance. Managers receive prompts and insights that reinforce desired behaviors, making it natural to invest in development, recognize contributions, and build inclusive teams—all actions that strengthen, rather than erode, your culture."
    }
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#6F88B5]/10 to-slate-950">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(111, 136, 181, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(111, 136, 181, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#6F88B5]/20 rounded-full blur-3xl"
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
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#6F88B5]/15 rounded-full blur-3xl"
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
          }}
        />
      </div>

      {/* Hero Section */}
      <section ref={ref} className="relative py-32 overflow-hidden z-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-6 bg-[#6F88B5]/20 text-[#6F88B5] border-[#6F88B5]/30 px-4 py-2 text-sm font-semibold">
                  <Code2 className="w-4 h-4 mr-2 inline" />
                  human+assist
                </Badge>
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Smart tools.<br/>Human outcomes.
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                We deploy a future-fit talent management solution that unlocks talent value—ensuring the right people, with the right capabilities, are in place to deliver on your business ambition, scale growth, and lead the organisation into what's next.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl("BookDemo")}>
                  <Button size="lg" className="bg-gradient-to-r from-[#6F88B5] to-[#5a6d95] hover:from-[#5a6d95] hover:to-[#4a5d85] text-white px-8 py-6 text-lg shadow-lg shadow-[#6F88B5]/25 hover:shadow-[#6F88B5]/40 transition-all duration-300 group border-0">
                    Explore Solutions
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-[#6F88B5]/30 bg-[#6F88B5]/5 text-[#6F88B5] hover:bg-[#6F88B5]/10 px-8 py-6 text-lg backdrop-blur-sm">
                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#6F88B5]/30"
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fb2ab3fec3046c331dd954/23b9b0c55_humanassist.jpg"
                alt="Human interacting with AI interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-950/20 to-slate-950 opacity-70"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Do It - Problem Section */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-24 bg-slate-900/50 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-[#6F88B5]/20 text-[#6F88B5] border-[#6F88B5]/30 px-4 py-2 text-sm font-semibold">
              Why We Do It
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Old Talent Systems No Longer Work for People
              <span className="inline-block w-3 h-3 bg-[#6F88B5] rounded-full ml-2 ember-pulse"></span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-slate-900/50 backdrop-blur-xl border-2 border-slate-800/50 hover:border-[#6F88B5]/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <motion.div
                        className="w-10 h-10 rounded-lg bg-[#6F88B5]/20 border border-[#6F88B5]/30 flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <AlertCircle className="w-5 h-5 text-[#6F88B5]" />
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-200 mb-3 group-hover:text-[#6F88B5] transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* What We Do - Features Grid */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-24 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What We Do
              <span className="inline-block w-3 h-3 bg-[#6F88B5] rounded-full ml-2 ember-pulse"></span>
            </h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-2 border-slate-800/50 hover:border-[#6F88B5]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[#6F88B5]/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  <CardHeader className="pb-4 relative z-10">
                    <motion.div 
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-slate-200">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>

                  <motion.div
                    className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#6F88B5]/20 to-transparent rounded-tl-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* The Talent Management Ecosystem */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="relative z-10"
      >
        <EcosystemVisualization />
      </motion.div>

      {/* TAILA Section with Principles */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-32 relative overflow-hidden z-10"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6F88B5]/20 via-[#5a6d95]/20 to-[#8599bf]/20" />
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(111, 136, 181, 0.1) 0%, transparent 50%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="flex justify-center mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6F88B5] to-[#5a6d95] rounded-3xl blur-2xl opacity-50" />
                <div className="relative w-32 h-32 rounded-3xl flex items-center justify-center shadow-2xl">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fb2ab3fec3046c331dd954/dfd1e3d7e_1761307876683iwhwms55-removebg-preview.png"
                    alt="TAILA AI Assistant"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet TAILA: Your Virtual Talent Partner
            </h2>
            
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              TAILA, the Virtual Talent Partner powered by AI, gives you instant, personalised responses about your talent. Ask TAILA to summarize individual strengths and development areas, provide a career conversation guide, individual development plan or succession nomination. With TAILA, you can be confident that every manager is having inspiring career and development conversations with their teams.
            </p>
          </motion.div>

          {/* TAILA's 7 Guiding Principles - NEW FLOWING DESIGN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">
              TAILA is built on 7 guiding principles
            </h3>
            
            {/* Flowing alternating layout */}
            <div className="relative">
              {/* Connecting line down the middle */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6F88B5]/30 via-[#6F88B5]/50 to-[#6F88B5]/30 hidden lg:block" />
              
              {tailaPrinciples.map((principle, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    className={`relative mb-12 last:mb-0 lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                      isLeft ? '' : 'lg:grid-flow-dense'
                    }`}
                  >
                    {/* Content side */}
                    <div className={`${isLeft ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                      <motion.div
                        whileHover={{ scale: 1.03, x: isLeft ? 10 : -10 }}
                        className={`relative p-8 rounded-2xl bg-slate-900/50 backdrop-blur-xl border-2 border-[#6F88B5]/30 hover:border-[#6F88B5]/60 transition-all duration-300 group ${
                          isLeft ? 'lg:text-right' : 'lg:text-left'
                        }`}
                      >
                        {/* Gradient glow */}
                        <div className={`absolute inset-0 bg-gradient-to-${isLeft ? 'r' : 'l'} from-[#6F88B5]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                        
                        <div className="relative z-10">
                          <h4 className="text-2xl font-bold text-white mb-3">
                            {principle.title}
                          </h4>
                          <p className="text-slate-300 text-lg leading-relaxed">
                            {principle.description}
                          </p>
                        </div>

                        {/* Connecting dot */}
                        <motion.div
                          className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? '-right-8' : '-left-8'} hidden lg:block`}
                          whileHover={{ scale: 1.5 }}
                        >
                          <div className="w-4 h-4 rounded-full bg-[#6F88B5] shadow-lg shadow-[#6F88B5]/50">
                            <div className="absolute inset-0 rounded-full bg-[#6F88B5] animate-ping opacity-75" />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Icon side */}
                    <div className={`${isLeft ? 'lg:col-start-2' : 'lg:col-start-1'} hidden lg:flex ${
                      isLeft ? 'justify-start' : 'justify-end'
                    } mt-6 lg:mt-0`}>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        {/* Outer glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6F88B5] to-[#5a6d95] blur-xl opacity-50" />
                        
                        {/* Icon container */}
                        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#6F88B5] to-[#5a6d95] flex items-center justify-center shadow-2xl border-4 border-[#6F88B5]/30">
                          <principle.icon className="w-12 h-12 text-white" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile icon display */}
            <div className="lg:hidden flex justify-center gap-4 mt-12 flex-wrap">
              {tailaPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6F88B5] to-[#5a6d95] flex items-center justify-center shadow-lg"
                >
                  <principle.icon className="w-8 h-8 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* TAILA Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center space-y-6"
          >
            <div className="inline-block bg-gradient-to-r from-[#6F88B5]/20 to-[#8599bf]/20 border-2 border-[#6F88B5]/30 rounded-2xl px-8 py-6">
              <p className="text-2xl lg:text-3xl font-bold text-white mb-2">
                ✨ TAILA doesn't replace managers. It empowers them.
              </p>
              <p className="text-xl text-slate-300">
                Turning data into insight.<br/>
                Insight into action.<br/>
                And managers into better leaders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="https://calendly.com/d/cptb-6by-68r/talent-strategy-call" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-[#6F88B5] to-[#5a6d95] hover:from-[#5a6d95] hover:to-[#4a5d85] text-white px-10 py-6 text-lg font-semibold shadow-lg shadow-[#6F88B5]/25 hover:shadow-[#6F88B5]/40 transition-all duration-300 border-0">
                  Book a session to find out more
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-24 bg-slate-900 relative z-10"
      >
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/39aac9433_Email_Design_Pattern.jpg")`,
            backgroundSize: '150px',
            backgroundRepeat: 'repeat'
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-[#6F88B5]/20 text-[#6F88B5] border-[#6F88B5]/30 px-4 py-2 text-sm font-semibold">
              FAQs
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Your TAILA Questions Answered
              <span className="inline-block w-3 h-3 bg-[#6F88B5] rounded-full ml-2 ember-pulse"></span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className={`bg-slate-900/50 backdrop-blur-xl border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                    activeFaq === index 
                      ? 'border-[#6F88B5]/50 shadow-lg shadow-[#6F88B5]/20' 
                      : 'border-slate-800/50 hover:border-slate-700'
                  }`}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  {activeFaq === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#6F88B5]/10 to-[#8599bf]/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-bold text-slate-200 flex-1">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: activeFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-6 h-6 text-[#6F88B5]" />
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {activeFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-400 leading-relaxed mt-4 pt-4 border-t border-[#6F88B5]/20">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-24 relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl p-12 overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6F88B5]/20 via-[#5a6d95]/20 to-[#8599bf]/20 backdrop-blur-xl" />
            <div className="absolute inset-0 border-2 border-[#6F88B5]/20 rounded-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready To Transform Your Talent Technology?
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Let's Discuss How Human+Assist Can Streamline Your Talent Processes And Empower Your Managers With AI-Driven Insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl("BookDemo")}>
                  <Button size="lg" className="bg-gradient-to-r from-[#6F88B5] to-[#5a6d95] hover:from-[#5a6d95] hover:to-[#4a5d85] text-white px-10 py-6 text-lg shadow-lg shadow-[#6F88B5]/25 hover:shadow-[#6F88B5]/40 transition-all duration-300 border-0">
                    Book Your Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to={createPageUrl("Services")}>
                  <Button size="lg" variant="outline" className="border-2 border-[#6F88B5]/30 bg-[#6F88B5]/5 text-[#6F88B5] hover:bg-[#6F88B5]/10 px-10 py-6 text-lg backdrop-blur-sm">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
