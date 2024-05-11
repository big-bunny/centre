import React, { useState, useEffect } from 'react';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Student {
  id: number;
  name: string;
  grade: string;
  bio: string;
  image: string;
}

const Child: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const students: Student[] = [
    {
      id: 1,
      name: 'Teddy',
      grade: 'Playgroup',
      bio: 'Teddy is a 3 yr old who has been accepted into our assistance program. He is from a single parent home with 3 siblings. His mother does not have a regular job and is struggling with the school fees for her older children. Public school education is not free despite what the Kenyan Govt says. Teddy is a likeable mischievous little boy who is eager to learn. If you would like to assist him kindly let us know - Monthly cost $60 AUD for Fees Food and Transport.',
      image: '/images/students/Teddy.jpeg',
    },
    {
      id: 1,
      name: 'Teddy',
      grade: 'Playgroup',
      bio: 'Teddy is a 3 yr old who has been accepted into our assistance program. He is from a single parent home with 3 siblings. His mother does not have a regular job and is struggling with the school fees for her older children. Public school education is not free despite what the Kenyan Govt says. Teddy is a likeable mischievous little boy who is eager to learn. If you would like to assist him kindly let us know - Monthly cost $60 AUD for Fees Food and Transport.',
      image: '/images/students/Teddy.jpeg',
    },    {
      id: 1,
      name: 'Teddy',
      grade: 'Playgroup',
      bio: 'Teddy is a 3 yr old who has been accepted into our assistance program. He is from a single parent home with 3 siblings. His mother does not have a regular job and is struggling with the school fees for her older children. Public school education is not free despite what the Kenyan Govt says. Teddy is a likeable mischievous little boy who is eager to learn. If you would like to assist him kindly let us know - Monthly cost $60 AUD for Fees Food and Transport.',
      image: '/images/students/Teddy.jpeg',
    },    {
      id: 1,
      name: 'Teddy',
      grade: 'Playgroup',
      bio: 'Teddy is a 3 yr old who has been accepted into our assistance program. He is from a single parent home with 3 siblings. His mother does not have a regular job and is struggling with the school fees for her older children. Public school education is not free despite what the Kenyan Govt says. Teddy is a likeable mischievous little boy who is eager to learn. If you would like to assist him kindly let us know - Monthly cost $60 AUD for Fees Food and Transport.',
      image: '/images/students/Teddy.jpeg',
    },    {
      id: 1,
      name: 'Teddy',
      grade: 'Playgroup',
      bio: 'Teddy is a 3 yr old who has been accepted into our assistance program. He is from a single parent home with 3 siblings. His mother does not have a regular job and is struggling with the school fees for her older children. Public school education is not free despite what the Kenyan Govt says. Teddy is a likeable mischievous little boy who is eager to learn. If you would like to assist him kindly let us know - Monthly cost $60 AUD for Fees Food and Transport.',
      image: '/images/students/Teddy.jpeg',
    },    {
      id: 1,
      name: 'Teddy',
      grade: 'Playgroup',
      bio: 'Teddy is a 3 yr old who has been accepted into our assistance program. He is from a single parent home with 3 siblings. His mother does not have a regular job and is struggling with the school fees for her older children. Public school education is not free despite what the Kenyan Govt says. Teddy is a likeable mischievous little boy who is eager to learn. If you would like to assist him kindly let us know - Monthly cost $60 AUD for Fees Food and Transport.',
      image: '/images/students/Teddy.jpeg',
    },    {
      id: 1,
      name: 'Teddy',
      grade: 'Playgroup',
      bio: 'Teddy is a 3 yr old who has been accepted into our assistance program. He is from a single parent home with 3 siblings. His mother does not have a regular job and is struggling with the school fees for her older children. Public school education is not free despite what the Kenyan Govt says. Teddy is a likeable mischievous little boy who is eager to learn. If you would like to assist him kindly let us know - Monthly cost $60 AUD for Fees Food and Transport.',
      image: '/images/students/Teddy.jpeg',
    },    {
      id: 1,
      name: 'Teddy',
      grade: 'Playgroup',
      bio: 'Teddy is a 3 yr old who has been accepted into our assistance program. He is from a single parent home with 3 siblings. His mother does not have a regular job and is struggling with the school fees for her older children. Public school education is not free despite what the Kenyan Govt says. Teddy is a likeable mischievous little boy who is eager to learn. If you would like to assist him kindly let us know - Monthly cost $60 AUD for Fees Food and Transport.',
      image: '/images/students/Teddy.jpeg',
    },    {
      id: 1,
      name: 'Teddy',
      grade: 'Playgroup',
      bio: 'Teddy is a 3 yr old who has been accepted into our assistance program. He is from a single parent home with 3 siblings. His mother does not have a regular job and is struggling with the school fees for her older children. Public school education is not free despite what the Kenyan Govt says. Teddy is a likeable mischievous little boy who is eager to learn. If you would like to assist him kindly let us know - Monthly cost $60 AUD for Fees Food and Transport.',
      image: '/images/students/Teddy.jpeg',
    },    {
      id: 1,
      name: 'Teddy',
      grade: 'Playgroup',
      bio: 'Teddy is a 3 yr old who has been accepted into our assistance program. He is from a single parent home with 3 siblings. His mother does not have a regular job and is struggling with the school fees for her older children. Public school education is not free despite what the Kenyan Govt says. Teddy is a likeable mischievous little boy who is eager to learn. If you would like to assist him kindly let us know - Monthly cost $60 AUD for Fees Food and Transport.',
      image: '/images/students/Teddy.jpeg',
    },    {
      id: 1,
      name: 'Teddy',
      grade: 'Playgroup',
      bio: 'Teddy is a 3 yr old who has been accepted into our assistance program. He is from a single parent home with 3 siblings. His mother does not have a regular job and is struggling with the school fees for her older children. Public school education is not free despite what the Kenyan Govt says. Teddy is a likeable mischievous little boy who is eager to learn. If you would like to assist him kindly let us know - Monthly cost $60 AUD for Fees Food and Transport.',
      image: '/images/students/Teddy.jpeg',
    },    {
      id: 1,
      name: 'Teddy',
      grade: 'Playgroup',
      bio: 'Teddy is a 3 yr old who has been accepted into our assistance program. He is from a single parent home with 3 siblings. His mother does not have a regular job and is struggling with the school fees for her older children. Public school education is not free despite what the Kenyan Govt says. Teddy is a likeable mischievous little boy who is eager to learn. If you would like to assist him kindly let us know - Monthly cost $60 AUD for Fees Food and Transport.',
      image: '/images/students/Teddy.jpeg',
    },
    // Add more students as needed
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const showModal = (student: Student) => {
    setSelectedStudent(student);
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
    <div className="min-h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url('/images/bg/study.jpg')` }}>
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-extrabold text-white bg-gradient-to-r from-green-500 rounded-full mb-8 px-8 py-4 inline-block">
          SPONSOR CHILD
        </h1>

        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                when: 'beforeChildren',
                staggerChildren: 0.3,
              },
            },
            hidden: {
              opacity: 0,
              transition: {
                when: 'afterChildren',
              },
            },
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {students.map((item) => (
            <motion.div
              key={item.id}
              className="backdrop-blur-3xl shadow-lg rounded-lg overflow-hidden"
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                hidden: { opacity: 0, y: 100 },
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <img className="h-48 w-full object-cover" src={item.image} alt={item.name} />

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                <p className="mt-2 text-green-600">{item.grade}</p>
                <p className="text-lg leading-relaxed truncate-overflow">{truncateWords(item.bio, 5)}</p>
                <button
                  className="text-green-500 inline-block mt-4 underline"
                  onClick={() => showModal(item)}
                >
                  Read more
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedStudent && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="max-w-md mx-auto rounded-lg overflow-hidden bg-white p-8">
            <h2 className="text-3xl font-extrabold mb-2">{selectedStudent.name}</h2>
            <p className="text-green-600 text-3xl font-extrabold mb-4">{selectedStudent.grade}</p>
            <div className="text-base leading-relaxed mb-8">{selectedStudent.bio}</div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
                onClick={() => setSelectedStudent(null)}
              >
                Close
              </button>
              <a
  href="/donate" // Replace with your actual donation page path
  className="text-green-500 font-extrabold text-2xl hover:text-red-800 ml-4 flex items-center space-x-1"
>
  <FontAwesomeIcon icon={faDonate} className="mr-0" />
  Donate
</a>


            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Child;