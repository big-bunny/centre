import React, { useEffect, useMemo, useState } from 'react';
import bgVideo from './assets/bg/1d.mp4';
import './index.css';

interface Event {
  title: string;
  start: Date;
  end: Date;
  desc: string;
}

const LandingPage: React.FC = () => {
  const events: Event[] = useMemo(
    () => [
      {
        title: 'Trip to Court',
        start: new Date(2023, 0, 1),
        end: new Date(2023, 0, 3),
        desc: 'Visit to the local court for educational purposes.',
      },
      {
        title: 'Trip to Court',
        start: new Date(2023, 0, 1),
        end: new Date(2023, 0, 3),
        desc: 'Visit to the local court for educational purposes.',
      },   {
        title: 'Trip to Court',
        start: new Date(2023, 0, 1),
        end: new Date(2023, 0, 3),
        desc: 'Visit to the local court for educational purposes.',
      },
      {
        title: 'Trip to Court',
        start: new Date(2023, 0, 1),
        end: new Date(2023, 0, 3),
        desc: 'Visit to the local court for educational purposes.',
      },   {
        title: 'Trip to Court',
        start: new Date(2023, 0, 1),
        end: new Date(2023, 0, 3),
        desc: 'Visit to the local court for educational purposes.',
      },   {
        title: 'Trip to Court',
        start: new Date(2023, 0, 1),
        end: new Date(2023, 0, 3),
        desc: 'Visit to the local court for educational purposes.',
      },   {
        title: 'Trip to Court',
        start: new Date(2023, 0, 1),
        end: new Date(2023, 0, 3),
        desc: 'Visit to the local court for educational purposes.',
      },
      // ... other events
    ],
    []
  );

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    const animateIn = () => {
      const elementsToAnimate = document.querySelectorAll('.animate-in');
      elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('opacity-100');
        }, index * 200);
      });
    };

    animateIn();
  }, []);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  useEffect(() => {
    const video = document.getElementById('bgVideo') as HTMLVideoElement;
    if (video) {
      video.addEventListener('timeupdate', () => {
        if (video.currentTime > 5) {
          video.playbackRate = 0.5;
        }
      });
    }
  }, []);

  return (
    <div className="h-screen w-screen relative text-white overflow-hidden">
      {/* Video Container */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full z-0"
        id="bgVideo"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Backdrop */}
      <div className="absolute inset-0 z-10 backdrop-blur-md"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 h-full">
        {/* Content */}
        <div className="col-span-2 flex flex-col items-center justify-center z-20 p-8">
          <div className="container mx-auto text-center">
            <h2 className="text-6xl font-extrabold mb-4 animate-in opacity-0">
              Schield Centre
            </h2>
            <p className="text-xl mb-8 animate-in opacity-0">
              A place of learning and excellence in education.
            </p>
            <div className="flex justify-center items-center mb-5 animate-in opacity-0">
              <div className="mx-4">
                <p className="text-4xl font-bold">{216}</p>
                <p className="text-xl">Students</p>
              </div>
              <div className="mx-4">
                <p className="text-4xl font-bold">{15}</p>
                <p className="text-xl">Teachers</p>
              </div>
            </div>
            <a
              href="/home"
              className="inline-block bg-green-500 text-white text-2xl font-semibold p-4 mt-4 hover:bg-green-700 cursor-pointer z-30 hover:animate-bounce active:animate-bounce"
            >
              Continue
            </a>
          </div>
        </div>

        {/* Events Section */}
        <div className="col-span-1 bg-transparent backdrop-blur-3xl h-full p-8 overflow-y-auto z-20">
          <h2 className="text-4xl font-extrabold mb-4 animate-in opacity-0 text-white">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 gap-2 animate-in opacity-0">
            {events.map((event, index) => (
              <div
                key={index}
                className={`border p-2 ${
                  selectedEvent === event
                    ? 'rounded-lg bg-green-200 text-black hover:animate-bounce active:animate-bounce'
                    : 'rounded-full bg-green-500 bg-opacity-20 text-white hover:animate-bounce active:animate-bounce'
                } cursor-pointer transition-colors duration-300`}
                onClick={() => handleEventClick(event)}
              >
                <h3 className="text-xl font-extrabold mb-2">{event.title}</h3>
                {selectedEvent === event && (
                  <div className="text-sm text-gray-500 mb-2">
                    {`${event.start.toDateString()} - ${event.end.toDateString()}`}
                  </div>
                )}
                {selectedEvent === event && (
                  <div className="text-sm">{event.desc}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;