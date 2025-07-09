'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeartButton = ({ onNext }) => {
  const [hearts, setHearts] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const createFloatingHearts = () => {
    if (!isClient) return;
    
    const newHearts = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: (i * 100) + (Math.random() * 50), // More predictable positioning
      delay: i * 0.1,
    }));
    setHearts(newHearts);

    // Clean up hearts after animation
    setTimeout(() => setHearts([]), 3000);

    // Proceed to next step after a delay
    setTimeout(onNext, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="fixed text-4xl pointer-events-none z-50"
          style={{ left: `${heart.x}px` }}
          initial={{ y: isClient ? window.innerHeight : 0, opacity: 1, scale: 0 }}
          animate={{ 
            y: -100, 
            opacity: 0, 
            scale: [0, 1.2, 1, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 3, 
            delay: heart.delay,
            ease: "easeOut"
          }}
        >
          💖
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-8 text-pink-600"
          style={{ fontFamily: 'Pacifico' }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Something Special Awaits... 💕
        </motion.h1>

        <motion.button
          onClick={createFloatingHearts}
          className="group relative bg-gradient-to-r from-white to-pink-50 border-2 border-pink-200 hover:border-pink-400 text-pink-700 px-12 py-6 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 min-w-[200px] min-h-[80px]"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(236, 72, 153, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          aria-label="Click to start the romantic surprise"
        >
          <motion.span
            className="flex items-center justify-center gap-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Click Here 💖
          </motion.span>
          
          {/* Heart pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-pink-300"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>

        <motion.p
          className="mt-6 text-pink-500 text-lg"
          style={{ fontFamily: 'Dancing Script' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Tap the heart to begin your surprise ✨
        </motion.p>
      </motion.div>

      {/* Background decorative hearts */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-100 text-2xl"
              style={{
                left: `${(i * 8.33) % 100}%`,
                top: `${(i * 13.7) % 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              💖
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeartButton;
