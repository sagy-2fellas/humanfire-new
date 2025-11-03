import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await base44.entities.Newsletter.create({
        email
      });
      setIsSuccess(true);
      setEmail("");
    } catch (error) {
      console.error("Newsletter signup error:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <section className="flex justify-center items-center">
      <div className="bg-white/80 pt-2 pr-5 pb-4 pl-5 rounded-3xl max-w-4xl w-full sm:px-6 lg:px-8 backdrop-blur-xl sm:p-12 lg:p-16 xl:p-20 relative overflow-hidden border-2 border-white/20 shadow-2xl glass-effect">
        {/* Pattern Background Layer */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/39aac9433_Email_Design_Pattern.jpg")`,
            backgroundSize: '150px',
            backgroundRepeat: 'repeat',
            backgroundBlendMode: 'overlay'
          }}>
        </div>

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center space-y-6 sm:space-y-8"
              >
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto border-2 border-green-300"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" strokeWidth={2.5} />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 uppercase">THANK YOU!</h3>
                <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed px-4">
                  You've successfully subscribed to human+edit. Get ready for valuable insights delivered to your inbox.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge variant="outline" className="mb-6 sm:mb-8 text-red-600 border-red-600 hover:border-red-700 transition-colors bg-red-50 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold uppercase">
                    subscribe to human+edit
                  </Badge>
                </motion.div>
                
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  human+edit
                  <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full ml-2 ember-pulse"></span>
                </motion.h2>
                
                <motion.p
                  className="text-base sm:text-lg lg:text-xl font-medium text-slate-700 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Get the latest insights on talent strategies and future of work trends.
                </motion.p>

                <motion.form
                  onSubmit={handleSubmit}
                  className="max-w-md mx-auto space-y-6 sm:space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <motion.div
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-14 sm:h-16 text-base sm:text-lg font-medium transition-all duration-300 focus:border-red-400 focus:ring-red-400 bg-slate-50 text-slate-900 border-2 border-slate-300 placeholder:text-slate-500"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-red-600 hover:bg-red-700 px-10 sm:px-12 h-14 sm:h-16 transition-all duration-300 hover:shadow-2xl font-semibold text-base sm:text-lg w-full sm:w-auto"
                      >
                        {isSubmitting ? (
                          <div className="dot-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        ) : (
                          <motion.div
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Send className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                          </motion.div>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                  
                  <motion.p
                    className="text-sm sm:text-base font-medium text-slate-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    No spam. Unsubscribe anytime.
                  </motion.p>
                </motion.form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}