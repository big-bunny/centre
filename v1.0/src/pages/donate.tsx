import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import DonateButton from '../components/Donate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const DonationPage = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: 'url("/images/bg/bbg.jpg")' }}>
      {/* Semi-transparent green overlay */}
      <div className="absolute inset-0 bg-green-800 bg-opacity-30 blur"></div>

      <motion.div
        className="max-w-xl w-full backdrop-blur-3xl bg-opacity-90 backdrop-blur-md p-8 shadow-lg rounded-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setIsCardHovered(true)}
        onHoverEnd={() => setIsCardHovered(false)}
      >
        <motion.div
          className="mb-8 text-center"
          animate={{ scale: isCardHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2
            className="text-3xl font-bold text-primary mb-4 font-serif"
            variants={headingVariants}
            initial="hidden"
            animate={controls}
          >
            Empowering Lives, <span className="text-secondary">One Donation</span> at a Time
          </motion.h2>
          <motion.p
            className="text-lg font-medium text-gray-800 font-sans"
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Your generous contribution directly supports our mission to create lasting positive change.
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-8"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faHandHoldingHeart} className="text-primary mr-4" size="lg" />
            <h3 className="text-xl font-semibold text-gray-800 font-serif">Trusted and Transparent</h3>
          </div>
          <p className="text-white font-medium font-sans">
            As a registered 501(c)(3) non-profit organization, we uphold the highest standards of integrity and accountability. Your donation is tax-deductible, and your personal information is kept secure and confidential.
          </p>
        </motion.div>

        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          <SignedIn>
            <DonateButton />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DonationPage;
