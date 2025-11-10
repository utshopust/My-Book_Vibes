// import React from 'react';
// import { useLoaderData, useParams } from 'react-router';
// import { addToStoredDB } from '../../utility/addToDB';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)
// import { ToastContainer, toast } from 'react-toastify';


// const BookDetails = () => {
//     const { id } = useParams();
//     const bookId = parseInt(id);
//     const data = useLoaderData();
//     const singleBook = data.find(book => book.bookId === bookId);
//     const { bookName, image } = singleBook || {};


//     const handleMarkAsRead = id => {
//         //  Store with Id
//         // where to store
//         // array or collection
//         // if book already exist  the show a  alart
//         //  if book not exist then push in the collection or array

//         // MySwal.fire({
//         //     title: "Good job!",
//         //     text: "You clicked the button!",
//         //     icon: "success"
//         //   });

//         toast("Wow so easy!")
//         addToStoredDB(id)
// }

//     return (
//         <div className=' w-2/3 mx-auto'>
//             <img className='w-48' src={image} alt="" />
//             <h5>{bookName}</h5>
//             <ToastContainer />
//             <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent m-2">Mar as Read</button>
//             <button className="btn btn-info m-2">Add To WishList</button>
//         </div>
//     );
// };

// export default BookDetails;

// import React from "react";

// import { useLoaderData, useParams } from "react-router";
// import { addToStoredDB, addToWishList } from "../../utility/addToDb";



// const BookDetails = () => {
//   const { id } = useParams();
//   const bookId = parseInt(id); // ensure it's a number
//   const data = useLoaderData();
//   const singleBook = data.find((book) => book.bookId === bookId);

//   const { bookName, image, review } = singleBook;

//   const handleMarkAsRead = () => {
//     addToStoredDB(bookId);
//   };

//   const handleMarkAsWishList = () => {
//     addToWishList(bookId);
//   };

//   return (
//     <div className="flex flex-col justify-center m-5 w-2/3 mx-auto">
//       <img className="w-[250px] mx-auto" src={image} alt="Book" />
//       <p className="text-xl text-center font-bold">Book Name: {bookName}</p>

//       <p className="text-center text-gray-600">
//         <span className="text-amber-600 font-bold text-xl">Review:</span> {review}
//       </p>

//       <button
//         onClick={handleMarkAsRead}
//         className="btn btn-accent m-2 w-32 mx-auto p-2"
//       >
//         Mark As Read
//       </button>

//       <button
//         onClick={handleMarkAsWishList}
//         className="btn btn-info m-2 w-32 mx-auto p-2"
//       >
//         Add To WishList
//       </button>
//     </div>
//   );
// };

// export default BookDetails;

import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDb";
import { addToWishList } from "../../utility/addToWishList";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);

  const { bookName, image, review } = singleBook;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };

  const handleMarkAsWishList = (id) =>{
    addToWishList(id);
  }
  return (
    <div className="flex flex-col justify-center m-5  w-2/3 mx-auto">
      <img className="w-[250px] mx-auto" src={image} alt="Book" />
      <p className="text-xl text-center font-bold">BookName: {bookName}</p>

      <p className="text-center text-gray-600"><span className="text-amber-600 font-bold text-xl">Review:</span> {review}</p>

      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-accent m-2 w-32 mx-auto p-2"
      >
        Mark As Read
      </button>
      <button onClick={()=>handleMarkAsWishList(id)} className="btn btn-info m-2 w-32 mx-auto p-2">
        Add To WishList
      </button>
    </div>
  );
};

export default BookDetails;
