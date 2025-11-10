// import React from 'react';

// import bookimage from '../../assets/books.jpg'

// const Banner = () => {
//     return (
//       <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <img
//           src={bookimage}
//           className="max-w-sm rounded-lg shadow-2xl" />
//         <div>
//           <h1 className="text-5xl font-bold">Box Office News!</h1>
//           <p className="py-6">
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
//             quasi. In deleniti eaque aut repudiandae et a id nisi.
//           </p>
//           <button className="btn btn-primary">Get Started</button>
//         </div>
//       </div>
//     </div>
//     );
// };

// export default Banner;

import React from 'react';
import bookImage from '../../assets/books.jpg';

const Banner = () => {
  return (
    <section className="relative bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20">
        
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 mt-10 lg:mt-0">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-fade-in">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-gray-300 mb-8 text-lg animate-fade-in delay-150">
            Explore a world of stories—from timeless classics to modern bestsellers. Find reviews, recommendations, and insights to spark your reading journey.
          </p>
          <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
            Browse Now
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center animate-fade-in delay-300">
          <img
            src={bookImage}
            alt="Books"
            className="rounded-xl shadow-2xl max-w-sm lg:max-w-md transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Optional subtle dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black/30 via-gray-900/40 to-black/30 pointer-events-none"></div>
    </section>
  );
};

export default Banner;

