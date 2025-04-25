import { useState, useEffect } from "react";
import booksData from "../data/books";

function Home() {
  // Use state to hold data for books
  // Create setter func and init it into empty array
  const [books, setBooks] = useState([]);
  

  const url =
    "https://course-project-codesquad-comics-server.onrender.com/api/books";

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:",result.success.message);
        setBooks(result.data.books);
      })
      .catch(
        console.log("error:")
       
      );

    // setBooks(booksData);

    // console.log("Use effect works");
  }, []);

  return (
    <main>
      {/* Updated content */}
      {/* Change the array in the mapped func to reflect the array in the state now */}
      {books.map((book) => (
        <section key={book._id}>
          <a href="#">
            <img src={`/images/${book.image}`} alt={book.title} />
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
