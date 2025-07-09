'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const IceCreamQuestion = ({ onNext }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [shakeAnimation, setShakeAnimation] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleYesClick = () => {
    setShowMessage(true);
    setTimeout(onNext, 2000);
  };

  const handleNoClick = () => {
    if (!isClient) return;
    
    // Add shake effect
    setShakeAnimation(true);
    setTimeout(() => setShakeAnimation(false), 500);
    
    // Move the "No" button to a random position with increased range
    const newX = (Math.random() - 0.5) * 300;
    const newY = (Math.random() - 0.5) * 200;
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center max-w-md">
        {!showMessage ? (
          <>
            <motion.div
              className="text-6xl mb-6"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🍦
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-pink-600"
              style={{ fontFamily: 'Pacifico' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              A Little Treat For You! 🍦
            </motion.h2>

            <motion.p
              className="text-2xl mb-8 text-pink-500"
              style={{ fontFamily: 'Dancing Script' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Do you like ice cream?
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={handleYesClick}
                className="bg-gradient-to-r from-white to-green-50 border-2 border-green-200 hover:border-green-400 text-green-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 min-w-[160px] min-h-[60px]"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(34, 197, 94, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                aria-label="Yes, ice cream is tasty"
              >
                ✅ Of course!
              </motion.button>

              <motion.button
                onClick={handleNoClick}
                className={`bg-gradient-to-r from-white to-red-50 border-2 border-red-200 hover:border-red-400 text-red-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 min-w-[160px] min-h-[60px] ${shakeAnimation ? 'shake' : ''}`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(239, 68, 68, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: 1, 
                  x: noButtonPosition.x, 
                  y: noButtonPosition.y 
                }}
                transition={{ 
                  opacity: { delay: 0.9, duration: 0.6 },
                  x: { type: "spring", stiffness: 300, damping: 20 },
                  y: { type: "spring", stiffness: 300, damping: 20 }
                }}
                aria-label="No, ice cream is not tasty"
              >
                ❌ Not really
              </motion.button>
            </div>

            <motion.p
              className="mt-6 text-pink-400 text-sm"
              style={{ fontFamily: 'Dancing Script' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Choose wisely... 😏
            </motion.p>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              className="text-6xl mb-6"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              ✨
            </motion.div>

            <motion.h3
              className="text-2xl md:text-3xl font-bold text-pink-600 mb-4"
              style={{ fontFamily: 'Pacifico' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Correct! 🎉
            </motion.h3>

            <motion.p
              className="text-xl text-pink-500 leading-relaxed"
              style={{ fontFamily: 'Dancing Script' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              But still not as chocolatey as you 😘
            </motion.p>

            {/* Floating hearts for celebration */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-pink-300 text-2xl pointer-events-none"
                style={{
                  left: `${50 + (i - 3) * 10}%`,
                  top: `${50 + (i % 2 === 0 ? 10 : -10)}%`,
                }}
                animate={{
                  y: [0, -50, -100],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              >
                💕
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Background decorative elements */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-100 text-xl"
              style={{
                left: `${(i * 12.5) % 100}%`,
                top: `${(i * 17.3) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {i % 2 === 0 ? '🍦' : '💖'}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default IceCreamQuestion;
