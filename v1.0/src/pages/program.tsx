

import { useState } from 'react';

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
}

const programs: Program[] = [
  {
    id: 1,
    title: 'Art and Design',
    description: 'Support students interested in art and design. Help them explore their creativity and develop their artistic skills.',
    image: '/images/programs/art.jpg',
  },
  {
    id: 2,
    title: 'Chess Club',
    description: 'Empower students with strategic thinking and problem-solving skills through the classic game of chess. Donations help provide equipment and tournament participation opportunities.',
    image: '/images/programs/chess.jpg', // Replace with your image path
  },
  {
    id: 3,
    title: 'Swimming',
    description: 'Invest in the health and well-being of students. Your support allows us to offer swimming lessons, promote water safety, and build a strong swimming team.',
    image: '/images/programs/swimming.jpg', // Replace with your image path
  },
  {
    id: 4,
    title: 'Law Club',
    description: 'Spark students\' interest in law and justice. Donations provide resources for mock trials, guest speakers, and educational field trips.',
    image: '/images/programs/law.jpg', // Replace with your image path
  },
  {
    id: 5,
    title: 'Journalism',
    description: 'Nurture the next generation of storytellers. Your support fuels our school newspaper, yearbook, and media production activities.',
    image: '/images/programs/journalism.jpg', // Replace with your image path
  },
  {
    id: 6,
    title: 'Cricket Club',
    description: 'Cultivate teamwork, sportsmanship, and a love for cricket. Donations help us maintain equipment, host tournaments, and provide opportunities for students to excel.',
    image: '/images/programs/cricket.jpg', // Replace with your image path
  },
  // Add more programs as needed!
  {
    id: 7,
    title: 'Music',
    description: 'Unleash the musical talents of our students. Your support provides instruments, fosters music appreciation, and encourages participation in concerts and performances.',
    image: '/images/programs/music.jpg', // Replace with your image path
  },
  {
    id: 8,
    title: 'Debate Team',
    description: 'Equip students with critical thinking, research, and public speaking skills. Donations help us participate in debates, travel to competitions, and develop future leaders.',
    image: '/images/programs/debate.jpg', // Replace with your image path
  },
  {
    id: 9,
    title: 'Codig and Robotics',
    description: 'Fuel the future innovators! Your support provides resources for science labs, technology projects, and field trips to ignite scientific curiosity.',
    image: '/images/programs/c&d.jpg', // Replace with your image path
  },
];
const SponsorProgram = () => {
  const [] = useState<Program | null>(null);
  const [showFullDescription, setShowFullDescription] = useState<{ [key: number]: boolean }>({});

  const toggleDescriptionDisplay = (id: number) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const truncateWords = (str: string, numWords: number) => {
    const words = str.split(' ');
    if (words.length <= numWords) {
      return str;
    } else {
      const truncatedWords = words.slice(0, numWords);
      return truncatedWords.join(' ') + '...';
    }
  };

  const sponsorProgram = (_program: Program) => {
    window.location.href = '/donate'; // Redirect to the donate page
  };

  return (
    <div className="min-h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url('/images/bg/rb.jpg')` }}>
      <div className="container mx-auto py-16">
        <h1 className="text-4xl text-white font-extrabold bg-gradient-to-r from-green-500 rounded-full mb-8 px-8 py-4 inline-block">
          SPONSOR A PROGRAM
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div key={program.id} className="backdrop-blur-3xl shadow-lg rounded-lg overflow-hidden">
              <img className="h-48 w-full object-cover" src={program.image} alt={program.title} />

              <div className="p-6">
                <h2 className="text-xl font-semibold text-red-900">{program.title}</h2>
                <p className="text-lg leading-relaxed">
                  {showFullDescription[program.id] ? program.description : truncateWords(program.description, 10)}
                </p>
                <button
                  className="text-green-500 inline-block mt-4 underline"
                  onClick={() => toggleDescriptionDisplay(program.id)}
                >
                  {showFullDescription[program.id] ? 'Read Less' : 'Read More'}
                </button>
                <button
                  className="text-green-500 inline-block mt-4 ml-4 underline"
                  onClick={() => sponsorProgram(program)}
                >
                  Sponsor
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorProgram;
