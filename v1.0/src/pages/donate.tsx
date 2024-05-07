"use client"
import DonateButton from '../components/Donate';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const DonationPage: React.FC = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/images/bg/bbg.jpg")' }}>
      <motion.div
        className="max-w-xl w-full backdrop-blur-2xl bg-opacity-90 backdrop-blur-md p-8 shadow-lg rounded-lg"
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
          <h2 className="text-2xl font-extrabold mb-2">Donate with Confidence</h2>
          <p className="text-gray-900 font-bold">Your contribution goes directly towards changing lives.</p>
        </motion.div>

        <div className="mb-6">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faUser} className="text-green-500 mr-2" />
            <h3 className="text-lg font-semibold">Secure and Trusted</h3>
          </div>
          <p className="text-black font-bold">We are a registered non-profit organization, and all donations are tax-deductible. Your personal information is kept safe and confidential.</p>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              <FontAwesomeIcon icon={faUser} className="mr-2" /> Name
            </label>
            <input
              id="name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter name of student or program you are donating to"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex items-center justify-end">
            <DonateButton />
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default DonationPage;