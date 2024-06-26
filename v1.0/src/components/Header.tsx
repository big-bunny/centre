import { useState } from 'react';
import { UserButton, useUser } from '@clerk/clerk-react';
import UserGreeting from './UserGreeting';
import logo from '../../public/g-Logo.png';

const Header = () => {
  const [isMenuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [isDonateDropdownOpen, setDonateDropdownOpen] = useState(false);
  const { isSignedIn } = useUser();

  const menuItems = [
    { text: 'Home', url: '/home' },
    { text: 'About', url: '/about' },
    { text: 'Gallery', url: '/gallery' },
    { text: 'Team', url: '/team' }
  ];

  const donateDropdown = [
    { text: 'Donate4Child', url: '/child' },
    { text: 'Volunteer4Program Sponsorship', url: '/program' },
    // Add more donate-related links here
  ];

  const menuDropdown = [
    { text: 'Home', url: '/home' },
    { text: 'About', url: '/about' },
    { text: 'Gallery', url: '/gallery' },
    { text: 'Team', url: '/team' }
  ];

  return (
    <header className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-3xl text-white py-4 relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Replace text with logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="mr-2 w-auto transform hover:scale-105 transition-transform duration-300" style={{ height: '3rem', maxWidth: 'auto', transformOrigin: 'center' }} />
          <span className="text-2xl font-bold">SchieldCentre</span>
        </a>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuDropdownOpen(!isMenuDropdownOpen)}
            className="text-2xl focus:outline-none transition-transform transform hover:scale-110"
          >
            ☰
          </button>
        </div>
        <nav
          className={`md:hidden fixed top-0 right-0 w-3/4 h-screen bg-black bg-opacity-50 backdrop-filter backdrop-blur-3xl z-50 transition-transform transform ${
            isMenuDropdownOpen ? 'translate-x-0' : 'translate-x-full'
          } duration-500 ease-in-out flex flex-col justify-start items-start px-6`}
        >
          {isMenuDropdownOpen && (
            <div
              className="p-4 bg-emerald-600 bg-opacity-90 rounded-lg shadow-md transform scale-100 transition-transform duration-500 ease-in-out origin-top-right z-60"
              onClick={() => setMenuDropdownOpen(false)}
            >
              {menuDropdown.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="block text-white hover:text-gray-300 py-2 px-4 transition-colors duration-300 hover:skew-x-3 hover:animate-bounce"
                >
                  {item.text}
                </a>
              ))}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDonateDropdownOpen(!isDonateDropdownOpen);
                  }}
                  className="block text-white hover:text-gray-300 py-2 px-4 transition-colors duration-300 hover:skew-x-3"
                >
                  Donate
                </button>
                {isDonateDropdownOpen && (
                  <div className="absolute left-0 mt-2 p-2 bg-gray-800 rounded-lg shadow-md transform transition-transform duration-500 ease-in-out">
                    {donateDropdown.map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        className="block hover:text-gray-400 py-2 px-4 transition-colors duration-300 hover:skew-x-3 hover:animate-bounce"
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
        <nav className="hidden md:block space-x-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="hover:text-gray-400 transition-colors duration-300 hover:skew-x-3 hover:animate-bounce"
            >
              {item.text}
            </a>
          ))}
          <div className="relative inline-block">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDonateDropdownOpen(!isDonateDropdownOpen);
              }}
              className="hover:text-gray-400 transition-colors duration-300 hover:skew-x-3"
            >
              Donate
            </button>
            {isDonateDropdownOpen && (
              <div className="absolute left-0 mt-2 p-2 bg-gray-800 rounded-lg shadow-md transform transition-transform duration-500 ease-in-out">
                {donateDropdown.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="block hover:text-gray-400 py-2 px-4 transition-colors duration-300 hover:skew-x-3 hover:animate-bounce"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
        <div>
          {isSignedIn ? <UserButton /> : <UserGreeting />}
        </div>
      </div>
    </header>
  );
};

export default Header;