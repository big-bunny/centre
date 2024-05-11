import { useState, useEffect } from 'react';

interface Student {
  id: number;
  name: string;
  grade: string;
  bio: string;
  image: string;
}

const students: Student[] = [
  {
    id: 1,
    name: 'Teddy',
    grade: 'Playgroup',
    bio: 'Teddy is a 3 yr old who has been accepted into our assistance program. He is from a single parent home with 3 siblings. His mother does not  have a regular job and is struggling with the school fees for her  older children. Public school education is not free despite what the Kenyan Govt says. Teddy is a likeable mischievous little boy who is eager to learn. If you would like to assist him kindly let us know - Monthly cost $60 AUD for Fees Food and Transport.',
    image: '/images/students/Teddy.jpeg',
  },
  {
    id: 2,
    name: 'Joshua',
    grade: 'PP1',
    bio: 'Joshua has joined Schield this year after his older sister came to school on the weekend asking for help. Long story short, his mother is HIV+ and  having mental health problems, she also was involved in amotorbike accident several years ago which has left her with chronic pain and mobility issues. She has not been able to work since and dependant on the well wishes of friends. Joshua is 6 yrs and never been to school, just left playing on the streets. We decided to accept him into school as he is a bright boy and is an at risk child. If you are interested in helping Joshua get an education  the monthly cost is $60AUD. Thankyou',
    image: '/images/students/joshua.jpeg',
  },
  {
    id: 3,
    name: 'Brian',
    grade: 'Grade 4',
    bio: 'Brian, is 10 years old and currently in Grade 4. Brian is a Masaai who is from the interior and came to the school several years ago. Initially the father had been somewhat paying school fees, then Brian disappeared from school. We were told that he had been transferred to another school. Then about 4 months later the Head Teacher and myself visited another school in his area and went passed the place where Brian lived and found him playing outside his place. When we made inquiries we discovered that he had not been in school since he left - he had been asking relatives when he could be in school. He was living with a grandmother, the father is a drunkard and the Uncle was supporting the grandmother and Brian with food and basics. We decided to get him back into school and look for a  sponsor - This was 3 years ago - he has never had a stable sponsor - he is an average student, however is enjoying being in school. If you would like to help him we would be grateful. Monthly cost for fees, food transport is $60AUD. Thankyou',
    image: '/images/students/Brian.JPG',
  },
  {
    id: 4,
    name: 'Jeremiah',
    grade: 'Grade 9',
    bio: 'Jeramiah is around 5 yrs   he has been placed in Pre-primary 1. He is new this year to the school from a single parent home with an older sister in grade 6.  His family live in the same plot as our head teacher -  Phelix has found that he and his sister have been out of school for more than 8 months due to school fees. As he started interacting with the children he realised that especially the elder was eager to get back to school so started during the holidays to give them school work. The mother is trying to find work to support her family but getting just enough money for food, rent and basics. She could not even afford to get them into the public school as despite the government saying that it is free education – it is not free there are still financial obligations for the parent. It was also reported to us that Jeremiah – even at such a young age was wandering the streets all day up until night time looking for food even to the extent of taking food out of the rubbish to eat. When this was bought to our attention we knew we had to get him into school. Now he is learning and we also have kept him in school until  the later school run so that he is occupied when he gets home doing his homework  etc… this strategy has helped keep him home in the evenings and has resulted in a change of behaviour even after only a month of being in school.  We do not have any exam results to share at this stage as mid term exams have not yet been done, but his teacher is saying that  he is okay with the school work but there are a few behaviour issues that we will work on helping him to change. We would love it if you can assist us in helping Jeremiah to keeping off the streets, out of trash cans and actively learning in order that he can break the cycle of poverty of which his mother is stuck in at the moment. Cost for fees, food and transport - $60 AUD If this interests you kindly contact us.',
    image: '/images/students/jerry.jpg',
  },

];

const Child = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [scrollTriggered, setScrollTriggered] = useState(false);

  const truncateWords = (str: string, numWords: number) => {
    const words = str.split(' ');
    if (words.length <= numWords) {
      return str;
    } else {
      const truncatedWords = words.slice(0, numWords);
      return truncatedWords.join(' ') + '...';
    }
  };

  const handleScroll = () => {
    if (!scrollTriggered) {
      setScrollTriggered(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url('/images/bg/rb.jpg')` }}>
      <div className="container mx-auto py-16">
        <h1 className="text-4xl text-white font-extrabold bg-gradient-to-r from-green-500 rounded-full mb-8 px-8 py-4 inline-block">
          CHILDREN DONATION
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <div 
              key={student.id} 
              className={`backdrop-blur-3xl shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 ${scrollTriggered ? 'animate-zoom-in' : ''}`}
              onClick={() => setSelectedStudent(student)}
            >
              <img className="h-48 w-full object-cover" src={student.image} alt={student.name} />

              <div className="p-6">
                <h2 className="text-xl font-semibold text-red-900">{student.name}</h2>
                <p className="text-lg leading-relaxed">
                  {selectedStudent === student ? student.bio : truncateWords(student.bio, 7)}
                </p>
                {selectedStudent !== student && (
                  <button 
                    onClick={() => setSelectedStudent(student)} 
                    className="text-green-500 inline-block mt-4 ml-4 underline"
                  >
                    Read More
                  </button>
                )}
                <a
                  href="/donate" // Link to your donation page
                  className="text-green-500 inline-block mt-4 ml-4 underline"
                >
                  Donate for {student.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Child;
