import backgroundImage from '/images/bg/study.jpg'; // Import the image

const LandingPage = () => {
  return (
    <div className="relative w-screen h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 backdrop-blur-3xl  opacity-50 z-10"></div>
      <div className="absolute inset-0 flex flex-col z-10 justify-center items-center z-30">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
          Welcome to Schield Centre
        </h1>
        <p className="text-lg md:text-xl text-white mb-12 text-center">
          Where Learning Meets Creativity
        </p>
        <a href="/about" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out">
          Explore More
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
