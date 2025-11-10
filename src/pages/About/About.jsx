// import React from 'react';

// const About = () => {
//     return (
//         <div>
//             <h1>hello about</h1>
//         </div>
//     );
// };

// export default About;

import React from 'react';
import aboutImage from '../../assets/books.jpg'; // About section image

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">About Book Vibes</h1>
          <p className="text-gray-700 mb-6">
            Book Vibes is your go-to platform for discovering, reading, and sharing your favorite books. 
            We aim to create a community where readers can connect, explore, and stay inspired.
          </p>
          <p className="text-gray-700 mb-6">
            From timeless classics to modern bestsellers, our curated collection ensures that there’s something for every reader.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <img 
            src={aboutImage} 
            alt="Books" 
            className="rounded-lg shadow-lg w-full object-cover max-h-96"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Discover</h3>
          <p className="text-gray-600 text-sm">
            Explore thousands of books across genres and categories curated for you.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Connect</h3>
          <p className="text-gray-600 text-sm">
            Join a community of readers, share reviews, and connect with like-minded people.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Learn</h3>
          <p className="text-gray-600 text-sm">
            Get insights, summaries, and recommendations to enrich your reading experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
