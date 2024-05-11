import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const LandingPage = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsAnimated(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isAnimated) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isAnimated, controls]);

  return (
    <div className="landing-page relative min-h-screen w-screen overflow-hidden bg-black">
      <div
        className="hero-image bg-cover bg-no-repeat bg-center min-h-screen"
        style={{ backgroundImage: `url('/images/bg/study.jpg')` }}
      />
      <div className="content z-20 text-center px-4 max-w-full backdrop-blur-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
          className="text-3xl md:text-5xl lg:text-6xl rounded-r-lg font-bold text-white mb-4 md:mb-6 lg:mb-8 cursor-pointer hover:text-green-500 transition-colors duration-300 ease-in-out"
        >
          Welcome to Schield Centre
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}
          className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 lg:mb-12"
        >
          Where Learning Meets Creativity
        </motion.p>
        <motion.a
          href="/about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 1.5 }}
          className="explore-btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full text-base md:text-lg transition duration-300 ease-in-out inline-block hover:scale-105 transform-gpu active:scale-95 transition duration-300 ease-in-out"
        >
          Explore More
        </motion.a>
      </div>
      <div className="interactive-icons absolute bottom-10 right-10 flex items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          className="icon-wrapper mr-4 cursor-pointer hover:text-green-500 transition-colors duration-300 ease-in-out"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-graduation-cap text-4xl text-white"></i>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          className="icon-wrapper cursor-pointer hover:text-green-500 transition-colors duration-300 ease-in-out"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-palette text-4xl text-white"></i>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;