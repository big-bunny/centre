"use client";

import { useState } from 'react';
import homeBg from '/images/bg/ab.jpg';

const AboutPage = () => {
  const [currentImage] = useState('/images/gallery/pat.jpeg');
  const patriciaPdf = '/pdf/team/Pat.pdf';
  const [showOverflow, setShowOverflow] = useState(false);

  const handleLearnMore = () => {
    setShowOverflow(!showOverflow);
  };

  const handleImageClick = () => {
    window.open(patriciaPdf, '_blank');
  };

  return (
    <div
      className="min-h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-green-500 to-green-700 text-white text-center rounded-full px-6 py-2">
          ABOUT SCHIELD CENTRE
        </h1>

        <div className="flex flex-col lg:flex-row rounded-lg backdrop-blur-3xl bg-opacity-90 p-6 shadow-lg">
          <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
            <div
              className="bg-cover bg-center rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url('${currentImage}')`, flex: '30%', height: '300px', width: '300px' }}
              onClick={handleImageClick}
            >
              <div className="h-full w-full opacity-0 hover:opacity-100 rounded-lg bg-black bg-opacity-50 flex items-center justify-center">
                <p className="text-white font-bold">View Patricia's PDF</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 px-4 py-8 lg:py-0">
            <div className="text-3xl text-white text-center py-10 overflow-hidden">
              <h1 className="text-4xl bold mb-4">HISTORY</h1>
              <p>
                Schield Center is a school located in Kajiado, officially established in 2008 by Patricia Schield, an American woman who made a courageous decision. Patricia sold everything she owned and utilized her inheritance to initiate the school. Tragically, Patricia passed away in 2008 before witnessing her dreams come to fruition. Feeling like she had failed, Patricia's dying wish to Joseph Mboya was to establish the school through trustees and fundraising efforts.
              </p>
              {showOverflow && (
                <>
                  <p>Additional text line 1</p>
                  <p>Additional text line 2</p>
                  {/* Add more lines as needed */}
                </>
              )}
            </div>
            <div className="text-center py-4">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                type="button"
                onClick={handleLearnMore}
              >
                {showOverflow ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;