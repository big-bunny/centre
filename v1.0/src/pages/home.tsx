import { useState } from 'react';
import homeBg from '/images/bg/4k.jpg';
const truncateText = (text: string, maxLength: number) => {
  const words = text.split(' ');
  if (words.length <= maxLength) {
    return text;
  }
  const truncatedWords = words.slice(0, maxLength);
  return truncatedWords.join(' ') + "...";
};

const Home = () => {
  const news = [
    {
      id: 1,
      title: '2023 FEB NEWSLETTER',
      pdf: '/pdf/news/news1.pdf',
      preview: '/pdf/news/news1.pdf',
    },
    {
      id: 3,
      title: 'News Article 2020',
      image: '/images/news/news2.jpg',
      ref: 'https://www.albanyadvertiser.com.au/news/albany-advertiser/local-couple-want-albany-people-to-dig-deep-for-kenyan-school-at-this-months-garden-fundraiser-ng-b881706536z',
    },
    {
      id: 7,
      title: 'News Article DEC 2022',
      image: '/images/news/news3.jpg',
      ref: 'https://www.albanyadvertiser.com.au/news/albany-advertiser/kenya-school-supported-by-albany-community-bouncing-back-after-the-affects-of-the-covid-pandemic-c-9185041',
    },
    {
      id: 8,
      title: 'News Article DEC 2022',
      image: '/images/news/news4.JPG',
      ref: 'https://www.albanyadvertiser.com.au/news/albany-advertiser/kenya-school-supported-by-albany-community-bouncing-back-after-the-affects-of-the-covid-pandemic-c-9185041',
    },
  ];
  const testimonials = [
    {
      id: 4,
      quote: 'Stanley is currently in Grade 3 and is doing well. He came to us after his parent split and the mother was thrown out of the house with no where to go...',
      author: 'Mark Stanley',
      image: '/images/testimonials/testimonial1.jpg',
      resultsChart: '/images/testimonials/MarkStanley.jpg',
      videoUrl: '/images/testimonials/MarkStanley.mp4', // Corrected file name
    },
    {
      id: 5,
      quote: 'Tatiana is a bright girl currently in grade 4 doing very well in school. She  is from a single parent home, abandoned by her father who left her mother with 2 children and no job and no finances to look after the children. The grandmother who also lived with them got Covid and ended up in ICU - survived but so did a huge medical bill - which was left to the mother to deal with. We accepted Tatiana and her sister into our program. We are grateful for Miss C from Albany - Western Australia for assisting Tatiana to  learn, dream and have the possibility of achieving her best. Thanks very much.',
      author: 'Tatiana',
      image: '/images/testimonials/testimonial2.jpg',
      resultsChart: '/images/testimonials/Tatiana.jpeg',
      videoUrl: '/images/testimonials/Tatiana.mp4',
    },
    {
      id: 6,
      quote: 'Samuel was one of our first admissions to Schield when we opened in 2014. He was later joined by 3 siblings. We have assisted this family a lot, the mother is having 10 children and these were the last 4. She is HIV+ and with some mental issues, not being able to support all the children and especially with the cost of education, Finding food and rent was an uphill battle as the husband was of no help and everything was left to the mother. We realized that Sam was bright when he came to school he was 7 and never been to school - within 1 year he was reading. Consistently Sam topped the class throughout his time with us and last year completed his Primary leaving certificate and did well. He was called to a National School, and we were hopeful that he would win a scholarship - however this did not materialize. At the beginning of this year he was very stressed as he was very much wanting to continue his studies - when I realized that if nothing was done to help Sam that he would not join form 1 - I put out a message on social media and am grateful for the support that allowed us to get him into school. He is doing well and we are encouraging him to achieve his best. He is from a complicated family situation and has requested to stay with us during the holidays as there is no room at home and he cannot study. Sam has become like a 3rd son to us. We are grateful to the generous Australians who are assisting him to continue his education. Asante Sana.',
      author: 'Samuel',
      image: '/images/testimonials/form1.jpeg',
      videoUrl: '/images/testimonials/Samuel.mp4',
    },
  ];
  
  
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedTestimonials, setExpandedTestimonials] = useState<number[]>([]);

  const toggleExpandTestimonial = (testimonialId: number) => {
    if (expandedTestimonials.includes(testimonialId)) {
      setExpandedTestimonials(expandedTestimonials.filter(id => id !== testimonialId));
    } else {
      setExpandedTestimonials([...expandedTestimonials, testimonialId]);
    }
  };

  const openPdfModal = (pdf: string) => {
    setSelectedPdf(pdf);
  };

  const openImageModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModals = () => {
    setSelectedPdf(null);
    setSelectedImage(null);
  };
  
  return (

        <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-cover bg-center" style={{ backgroundImage: `url(${homeBg})` }}>
      
      <main className="mx-auto py-8">
        <section className="">
          <h1 className="text-4xl p-3 font-extrabold mb-4 bg-gradient-to-r from-green-500 rounded-full">Welcome to the Schield Centre</h1>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">News</h2>
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {news.map((item) => (
              <div key={item.id} className="bg-white shadow-lg rounded-lg p-6">
                {item.pdf ? (
                  <div>
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => openPdfModal(item.pdf)}
                    >
                      {item.title}
                    </button>
                    {item.preview && (
                      <object
                        data={item.preview}
                        type="application/pdf"
                        width="100%"
                        height="275px"
                      >
                        <p>PDF cannot be displayed</p>
                      </object>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {item.title}
                  </a>
                )}
                {item.image && (
                  <div className="mt-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-md w-full cursor-pointer"
                      onClick={() => openImageModal(item.image)}
                      width={400}
                      height={300}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {testimonials.map((item) => (
    <div key={item.id} className="backdrop-blur-3xl shadow-lg rounded-lg p-6">
      <img
        src={item.image}
        alt={item.author}
        className="rounded-full w-12 h-12 object-cover mr-4"
        width={48}
        height={48}
      />
      <div>
        <p className="font-bold text-2xl text-green-300">{item.author}</p>
      </div>
      <div>
        <p className="font-bold text-xl text-gray-300">
          {expandedTestimonials.includes(item.id) ? item.quote : truncateText(item.quote, 30)}
        </p>
        {item.quote.length > 30 && !expandedTestimonials.includes(item.id) && (
          <button className="text-blue-600 hover:underline" onClick={() => toggleExpandTestimonial(item.id)}>
            Read More
          </button>
        )}
      </div>
      {item.videoUrl && (
   <video width="320" height="240" controls>
   <source src={item.videoUrl} type="video/mp4" />
   Your browser does not support the video tag.
 </video>
      )}
    </div>
  ))}
</div>


        {selectedPdf && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={closeModals}
          >
            <div className="bg-white rounded-lg p-4 w-full max-w-4xl mx-auto">
              <embed src={selectedPdf} type="application/pdf" width="100%" height="600px" />
            </div>
          </div>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={closeModals}
          >
            <div className="bg-white rounded-lg p-4 w-full max-w-4xl mx-auto">
              <img 
                src={selectedImage}
                alt="Selected Image"
                className="w-full"
                width={800}
                height={600}
              />
            </div>
          </div>
        )}
      </main>
    </div> 
    </div>
  );
};

export default Home;