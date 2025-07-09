'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const DateReveal = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Start the typewriter effect after component mounts
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showMessage && !showConfetti && isClient) {
      // Trigger confetti after message appears
      const confettiTimer = setTimeout(() => {
        setShowConfetti(true);
        triggerConfetti();
      }, 3000);

      return () => clearTimeout(confettiTimer);
    }
  }, [showMessage, showConfetti, isClient]);

  const triggerConfetti = () => {
    // Multiple confetti bursts
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const colors = ['#ffffff', '#fce7f3', '#f9a8d4', '#ec4899', '#be185d'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    }());

    // Heart-shaped confetti
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
        shapes: ['circle'],
        scalar: 1.2
      });
    }, 1000);
  };

  const dateText = "We are going to hang out!";
  const timeText = "Friday 7PM sharp.";
  const dressText = `Wear that awesome look —
Your soft off-shoulder white top, those perfect high-waisted flared jeans, and your natural glow.
You always look so cool and confident in that outfit.
And hey, my necklace would look great on you!

I&apos;ll pick you up, be ready!`;

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Main Content Container */}
      <div className="text-center max-w-2xl mx-auto relative z-10">
        {/* Sparkle Animation */}
        <motion.div
          className="text-6xl mb-8"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✨💍✨
        </motion.div>

        {/* Typewriter Messages */}
        {showMessage && (
          <div className="space-y-6">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-pink-600 leading-tight"
              style={{ fontFamily: 'Pacifico' }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              A Special Plan! 🎉
            </motion.h2>

            <motion.div
              className="text-xl md:text-2xl text-pink-500 space-y-4"
              style={{ fontFamily: 'Dancing Script' }}
            >
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="typewriter-line"
              >
                {dateText}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="font-semibold text-pink-600"
              >
                {timeText}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3, duration: 0.8 }}
                className="text-pink-500"
              >
                {dressText}
              </motion.p>
            </motion.div>

            {/* Date Details with Icons */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mt-8 border border-pink-200 shadow-lg"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 4, duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="text-3xl mb-2">📅</div>
                  <div className="text-pink-600 font-semibold">Tomorrow</div>
                  <div className="text-pink-500 text-sm">July 10th</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl mb-2">🕗</div>
                  <div className="text-pink-600 font-semibold">8:00 PM</div>
                  <div className="text-pink-500 text-sm">Sharp!</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl mb-2">👗</div>
                  <div className="text-pink-600 font-semibold">That White Top &amp; Jeans</div>
                  <div className="text-pink-500 text-sm">+ My Necklace</div>
                </div>
              </div>
            </motion.div>

            {/* Love Message */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 5, duration: 0.8 }}
            >
              <motion.p
                className="text-lg text-pink-500"
                style={{ fontFamily: 'Dancing Script' }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Can&apos;t wait to see you beautiful ❤️
              </motion.p>
            </motion.div>
          </div>
        )}
      </div>

      {/* Floating Hearts Background */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-200/60 text-2xl"
              style={{
                left: `${(i * 6.67) % 100}%`,
                top: `${(i * 11.3) % 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 20, -20, 0],
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 4 + (i % 4),
                repeat: Infinity,
                delay: i * 0.27,
              }}
            >
              {['💖', '💕', '💗', '❤️', '🌹'][i % 5]}
            </motion.div>
          ))}
        </div>
      )}

      {/* Glowing Background Effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.05) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hidden Love Note (Easter Egg) */}
      <motion.button
        className="fixed bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-white to-pink-50 border-2 border-pink-200 rounded-full flex items-center justify-center text-pink-500 shadow-lg hover:shadow-xl transition-all duration-300 z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => alert('You make every day feel like a fairy tale. I love you more than words can express. 💕')}
        aria-label="Hidden love note"
        title="Click for a secret message 💕"
      >
        <motion.span
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💕
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default DateReveal;
