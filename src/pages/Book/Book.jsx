// import React, { use } from 'react';
// import { FaStarHalfAlt } from "react-icons/fa";
// import { Link } from 'react-router';


// const Book = ({singleBook}) => {
//     // const data = use(bookPromise);

//     // console.log(data)

//     const { bookName,author,bookId,image,rating,category,tags,yearOfPublishing,publisher} = singleBook || {};

    
//     return (
//         <Link to={`/bookDetails/${bookId}`}>
//          <div className="card bg-base-100 w-96 shadow-sm border p-6 shadow">
//         <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
//                 <img
//                     className='h-[166px]'
//             src={image}
//             alt="Shoes" />
//         </figure>
//             <div className="card-body ">
                
//                 <div className='flex justify-center gap-10'>
//                 {
//                     tags.map(tag => <button >{tag}</button>)
//                 }
//                 </div>
//           <h2 className="card-title">
//            {bookName}
//                     <div className="badge badge-secondary">{yearOfPublishing}</div>
//           </h2>
//                 <p>Book by : {publisher}</p>

//                 <div className='border-t-1 border-dashed'></div>
//           <div className="card-actions justify-end">
//                     <div className="badge badge-outline">{category}</div>
//                     <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
//           </div>
//         </div>
//       </div>
//         </Link>
//     );
// };

// export default Book;

import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ singleBook }) => {
  if (!singleBook) return null;

  const {
    bookName,
    author,
    bookId,
    image,
    rating,
    category,
    tags = [],
    yearOfPublishing,
    publisher,
    totalPages,
    review
  } = singleBook;

  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card w-80 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
        {/* Book Image */}
        <figure className="bg-gray-100 flex justify-center items-center p-4">
          <img src={image} alt={bookName} className="h-52 object-contain" />
        </figure>

        <div className="card-body p-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Year */}
          <h2 className="text-lg font-semibold flex justify-between items-center mb-1">
            {bookName}
            <span className="text-sm text-gray-500 font-normal">{yearOfPublishing}</span>
          </h2>

          {/* Author / Publisher */}
          <p className="text-sm text-gray-600 mb-1">
            By {author} | {publisher}
          </p>

          {/* Pages */}
          <p className="text-xs text-gray-500 mb-2">{totalPages} pages</p>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-3"></div>

          {/* Category & Rating */}
          <div className="flex justify-between items-center">
            <span className="text-xs px-2 py-1 bg-gray-200 text-gray-800 rounded-full">{category}</span>
            <span className="flex items-center gap-1 text-yellow-500 font-semibold text-sm">
              {[...Array(fullStars)].map((_, i) => <FaStar key={i} />)}
              {halfStar && <FaStarHalfAlt />}
              <span className="text-gray-700 ml-1">{rating}</span>
            </span>
          </div>

          {/* Optional Review */}
          {review && (
            <p className="text-xs text-gray-600 mt-2 line-clamp-3">
              {review}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Book;
