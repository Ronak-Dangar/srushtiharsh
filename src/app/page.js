'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeartButton from '../components/HeartButton';
import IceCreamQuestion from '../components/IceCreamQuestion';
import DateReveal from '../components/DateReveal';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <HeartButton onNext={nextStep} />
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <IceCreamQuestion onNext={nextStep} />
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <DateReveal />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50">
        {[1, 2, 3].map((step) => (
          <motion.div
            key={step}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              step <= currentStep 
                ? 'bg-pink-500 shadow-lg' 
                : 'bg-pink-200'
            }`}
            whileHover={{ scale: 1.2 }}
            animate={{ 
              scale: step === currentStep ? [1, 1.2, 1] : 1,
            }}
            transition={{ 
              duration: 1.5, 
              repeat: step === currentStep ? Infinity : 0 
            }}
          />
        ))}
      </div>

      {/* Background Sparkles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-200/40 text-xs"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7.3) % 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    </main>
  );
}
