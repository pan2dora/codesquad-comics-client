import { useState, useEffect } from "react";
import booksData from "../data/books";

function Home() {
  // Use state to hold data for books
  // Create setter func and init it into empty array
  const [books, setBooks] = useState([]);

  // Create handler func

  // const handleBooks = ()=>{
  //   setBooks((prevBooks)=>prevBooks)
  // }

  // Create useEffect func and use the callback to setBooks to booksData
  // syntax: useEffects (setup, dependencies)

  useEffect(() => {
    setBooks(booksData);
    console.log("Use effect works");
  }, []);

  return (
    <main>
      {/* Updated content */}
      {/* Change the array in the mapped func to reflect the array in the state now */}
      {books.map((book) => (
        <section key={book.id}>
          <a href="#">
            <img src={book.imageUrl} />
          </a>
          <div>{book.title}</div>
          <div>{book.author}</div>
          <div>{book.publisher}</div>
          <div>{book.pages}</div>
          <div>{book.rating}</div>
          <div>{book.synopsis}</div>
          <a href="#" className="home-detail-link">
            <div>Details</div>
          </a>
        </section>
      ))}

      {/* <!-- Old Content--> */}

      {/* {booksData.map((book) => 
        <section>
          <a href="#">
            <img src={book.imageUrl}/>
          </a>
          <div>{book.title}</div>
          <div>{book.author}</div>
          <div>{book.publisher}</div>
          <div>{book.pages}</div>
          <div>{book.rating}</div>
          <div>{book.synopsis}</div>
          <a href="#" class="home-detail-link"><div>Details</div></a>
        </section>
        ) } */}
    </main>
  );
}
export default Home;
