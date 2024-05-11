import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactInfo = [
    {
      title: 'Phone',
      icon: faPhone,
      address: '0725224398',
    },
    {
      title: 'E-mail',
      icon: faEnvelope,
      address: 'schieldcenter1@gmail.com',
    },
    {
      title: 'Address',
      icon: faMapMarker,
      address: 'Noosolian Namannga-Highway',
    },
  ];

  useEffect(() => {
    // Load the script for the live chat button
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', 'true');
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-300">
              Schield Centre is a leading educational institution dedicated to providing quality education.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-green-400 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition duration-300">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center">
                  <FontAwesomeIcon icon={info.icon} className="mr-2 text-lg text-gray-300" />
                  {info.address}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center">
              <a
                href="#"
                className="mr-4 text-gray-300 hover:text-green-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
              </a>
              <a
                href="#"
                className="mr-4 text-gray-300 hover:text-green-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </a>
              <div className="elfsight-app-96263e89-f948-418d-97c0-2374ce49da17" data-elfsight-app-lazy></div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            {/* Add your follow us content here */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-600">
          <p className="text-center text-gray-300">
            &copy; {currentYear} Schield Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;