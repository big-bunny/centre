"use client"
import { useState } from 'react';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
}

const SponsorProgram = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const programs: Program[] = [
    {
      id: 1,
      title: 'Art and Design',
      description: 'Support students interested in art and design. Help them explore their creativity and pursue their dreams.',
      image: '/images/programs/art.jpg',
    },  {
      id: 1,
      title: 'Art and Design',
      description: 'Support students interested in art and design. Help them explore their creativity and pursue their dreams.',
      image: '/images/programs/art.jpg',
    },  {
      id: 1,
      title: 'Art and Design',
      description: 'Support students interested in art and design. Help them explore their creativity and pursue their dreams.',
      image: '/images/programs/art.jpg',
    },  {
      id: 1,
      title: 'Art and Design',
      description: 'Support students interested in art and design. Help them explore their creativity and pursue their dreams.',
      image: '/images/programs/art.jpg',
    },
    {
      id: 1,
      title: 'Art and Design',
      description: 'Support students interested in art and design. Help them explore their creativity and pursue their dreams.',
      image: '/images/programs/art.jpg',
    },  {
      id: 1,
      title: 'Art and Design',
      description: 'Support students interested in art and design. Help them explore their creativity and pursue their dreams.',
      image: '/images/programs/art.jpg',
    },  {
      id: 1,
      title: 'Art and Design',
      description: 'Support students interested in art and design. Help them explore their creativity and pursue their dreams.',
      image: '/images/programs/art.jpg',
    },  {
      id: 1,
      title: 'Art and Design',
      description: 'Support students interested in art and design. Help them explore their creativity and pursue their dreams.',
      image: '/images/programs/art.jpg',
    },  {
      id: 1,
      title: 'Art and Design',
      description: 'Support students interested in art and design. Help them explore their creativity and pursue their dreams.',
      image: '/images/programs/art.jpg',
    },
    // Add more programs as needed
  ];

  const showModal = (program: Program) => {
    setSelectedProgram(program);
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
                <p className="text-lg leading-relaxed truncate-overflow">{truncateWords(program.description, 10)}</p>
                <a href="#" className="text-green-500 inline-block mt-4 underline" onClick={() => showModal(program)}>
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProgram && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white max-w-md mx-auto rounded-lg overflow-hidden p-8">
            <h2 className="text-3xl font-extrabold mb-2">{selectedProgram.title}</h2>
            <p className="text-base leading-relaxed mb-8">{selectedProgram.description}</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
                onClick={() => setSelectedProgram(null)}
              >
                Close
              </button>
              <button className="text-green-500 font-extrabold text-2xl hover:text-red-800 ml-4 flex items-center space-x-1">
                <FontAwesomeIcon icon={faDonate} className="mr-0" />
                Donate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SponsorProgram;