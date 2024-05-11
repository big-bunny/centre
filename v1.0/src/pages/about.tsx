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
                Schield Centre is a school located in Kajiado, officially established in 2008 by Patricia Schield, an American woman who made a courageous decision. Patricia sold everything she owned and utilized her inheritance to initiate the school. Tragically, Patricia passed away in 2008 before witnessing her dreams come to fruition. Feeling like she had failed, Patricia's dying wish to Joseph Mboya was to establish the school through trustees and fundraising efforts.
              </p>
           
              {showOverflow && (
  <>
    <p>
      Nestled amidst the picturesque Maasai Plains of Kajiado County stands Schield Centre, a beacon of educational excellence and social empowerment. With a student body of 250 and a faculty of 15 dedicated educators, Schield Centre epitomizes commitment to academic rigor and holistic development.
    </p>

    <p>
      At the helm of this noble endeavor was the visionary Patricia Schield, an indomitable force hailing from Fort Lauderdale, Florida, USA. Fueled by compassion and a fervent desire to uplift disadvantaged children in remote regions, she embarked on a transformative journey. Despite the challenges of age, Patricia embarked on a quest for knowledge, redefining herself as an educator with a singular purpose.
    </p>

    <p>
      Undeterred by adversity, Patricia forged ahead, securing 10 acres of land on the outskirts of Isinya, strategically positioned along the Namanga Highway. Amidst the trials of illness and betrayal, her unwavering resolve persisted, culminating in the establishment of Schield Centre. Entrusting her legacy to the capable hands of Joseph Mboya, a stalwart lawyer, Patricia's vision endured.
    </p>

    <p>
      Although Patricia's earthly journey concluded prematurely, her legacy endured through the stewardship of Joseph Mboya and her devoted family. Trina Donelle Mboya, a luminary in her own right, emerged as a cornerstone in realizing Patricia's dream. Leveraging her global perspective and tenacity, Trina spearheaded fundraising endeavors, propelling essential infrastructure projects forward.
    </p>

    <p>
      Today, Trina Donelle Mboya stands as a revered figure within the Schield Centre community, affectionately known as "Aunty T" to students, parents, and faculty alike. Her multifaceted contributions, ranging from financial stewardship to pedagogical leadership, epitomize the spirit of dedication and service. Guided by a commitment to excellence, she continues to shape the future of Schield Centre with unwavering passion and resolve.
    </p>
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