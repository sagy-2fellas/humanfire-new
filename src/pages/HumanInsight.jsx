
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, BrainCircuit, CheckCircle, Database } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import ProblemSection from "../components/services/ProblemSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function HumanInsight() {
  const whatWeDo = [
    { icon: BarChart, title: "Insight to Impact", description: "Real-time intelligence, right in the flow of work." },
    { icon: CheckCircle, title: "No Guesswork. Just Clarity", description: "Our strategies decode what matters — backed by data." },
    { icon: BrainCircuit, title: "Design with Purpose", description: "We turn analytics into creative direction that moves people." },
    { icon: Database, title: "Capability That Connects", description: "We build data fluency and storytelling skills across your teams." },
  ];

  const problems = [
    { title: "Too much data, not enough clarity", description: "Endless metrics, but no real story." },
    { title: "Feedback without follow-through", description: "Insights are gathered—but rarely acted on." },
    { title: "Missing the human context", description: "Numbers don't capture emotion, culture, or lived experience." },
    { title: "Too slow to matter", description: "By the time insights surface, the moment's gone." },
    { title: "Generic metrics, unique people", description: "Standard KPIs don't reflect real human needs." },
    { title: "Siloed systems, scattered truths", description: "Data lives everywhere—except where it's needed." },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section ref={ref} className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
            <motion.img 
              style={{ y: backgroundY }}
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1950&q=80" 
              alt="Data Analytics" 
              className="w-full h-full object-cover opacity-10" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge variant="outline" className="mb-6 text-green-400 border-green-400/50 bg-white/10 backdrop-blur-sm px-4 py-2">
              human+insight
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 italic">
              "Data Is The Compass. People Are The Journey. Because The Future Of Work Isn't A Spreadsheet. It's A Story."
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              We turn data into insights for relevant talent management strategies that shape what's next.
            </p>
            <Link to={createPageUrl("BookDemo")}>
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg">
                Get Data Clarity
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-200 capitalize">What We Do</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeDo.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-2 border-slate-800 hover:border-green-500/50 transition-all duration-300 group hover:shadow-xl glass-effect text-center">
                  <CardHeader className="pb-4 items-center">
                    <div className="w-16 h-16 rounded-lg bg-green-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-green-400" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-200 capitalize">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Problem Section */}
      <ProblemSection
        title="Beyond The Numbers: Why Data Isn't Enough"
        problems={problems}
        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1950&q=80"
        themeColor="green"
      />

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass-effect rounded-3xl p-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-200 mb-6">Ready To Turn Insight Into Impact?</h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's build a data-driven talent strategy that tells a human story and moves your business forward.
            </p>
            <Link to={createPageUrl("BookDemo")}>
              <Button size="lg" className="fire-button text-white px-8">
                Book Your Insight Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
