import React, { useState } from 'react';

interface Profile {
  id: number;
  title: string;
  pdf?: string | undefined;
  preview?: string | undefined;
  image?: string | undefined;
}

const Team: React.FC = () => {
  const profiles: Profile[] = [
    {
      id: 2,
      title: 'CO-Director Trina',
      pdf: '/pdf/team/Trina.pdf',
      preview: '/pdf/team/Trina.pdf',
    },
    {
      id: 3,
      title: 'Deputy Head Teacher Margarate',
      image: '/images/staff/Marggy.jpeg',
    },
    {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },
    {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },  {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },  {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },  {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },  {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },  {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },  {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },  {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },  {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },  {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },  {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },  {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },  {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },  {
      id: 7,
      title: 'Tr Nyakundi',
      image: '/images/staff/nyakundi.jpg',
    },
  ];

  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    <div className="min-h-screen w-screen bg-cover" style={{ backgroundImage: 'url(/images/bg/shelf.jpg)' }}>
      <main className="max-w-4xl mx-auto ">
        {/* ... */}

        <section >
          <h2 className="text-2xl font-bold mb-4">Team Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {profiles.map((item) => (
              <div key={item.id} className="backdrop-blur-3xl shadow-lg rounded-lg p-6">
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
                  <>
                    {item.title && (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (item.title) {
                            window.open(item.title, '_blank');
                          }
                        }}
                        className="text-blue-600 hover:underline"
                      >
                        {item.title}
                      </a>
                    )}
                    {item.image && (
                      <div className="mt-4">
                        <img
                          src={item.image}
                          alt={item.title ?? ''}
                          className="rounded-md w-full cursor-pointer"
                          onClick={() => openImageModal(item.image)}
                          width={400}
                          height={300}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ... */}

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
  );
};

export default Team;
