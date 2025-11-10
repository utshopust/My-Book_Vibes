// const getStoredBook = () => {
    
//     const storedBookSTR = localStorage.getItem("readList");

//     if (storedBookSTR) {
//         const storedBookData = JSON.parse(storedBookSTR);
//         return storedBookData;
//     }
//     else {
//         return [];
//     }

// }

// const addToStoredDB = (id) => {
    
//     const storedBookData = getStoredBook();

//     if (storedBookData.includes(id)) {
//         console.log("hello")
//         alert("bhai ei id already exist ")
//     }
//     else {
//         storedBookData.push(id);
//         const data = JSON.stringify(storedBookData);
//         localStorage.setItem("readList",data)

//     }

// }

// export { addToStoredDB,getStoredBook };

// src/utility/addToDb.js

// ====== Read List Functions ======
// ====== Read List Functions ======
// const getStoredBook = () => {
//   const storedBookStr = localStorage.getItem("readList");
//   return storedBookStr ? JSON.parse(storedBookStr) : [];
// };

// const addToStoredDB = (id) => {
//   const storedBookData = getStoredBook();

//   if (storedBookData.includes(id)) {
//     alert("This book is already marked as read!");
//     return;
//   }

//   storedBookData.push(id);
//   localStorage.setItem("readList", JSON.stringify(storedBookData));
//   alert("Book added to Read List!");
// };

// // ====== Wish List Functions ======
// const getWishList = () => {
//   const wishListStr = localStorage.getItem("wishList");
//   return wishListStr ? JSON.parse(wishListStr) : [];
// };

// const addToWishList = (id) => {
//   const wishList = getWishList();
//   const readList = getStoredBook();

//   if (readList.includes(id)) {
//     alert("You already marked this book as read!");
//     return;
//   }

//   if (wishList.includes(id)) {
//     alert("This book is already in your Wish List!");
//     return;
//   }

//   wishList.push(id);
//   localStorage.setItem("wishList", JSON.stringify(wishList));
//   alert("Book added to Wish List!");
// };

// export { addToStoredDB, getStoredBook, addToWishList, getWishList };



const getStoredBook = () => {
  const storeBookSTR = localStorage.getItem("readList");

  if (storeBookSTR) {
    const storeBookData = JSON.parse(storeBookSTR);
    return storeBookData;
  }
  else{
    return [];
  }
};

const addToStoredDB = (id) => {
    const storeBookData = getStoredBook();

    if(storeBookData.includes(id)){
        alert('Sorry Already Exist')
    }
    else{
        storeBookData.push(id)
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("readList",data)

        console.log(storeBookData);
    }
};

export {addToStoredDB, getStoredBook}