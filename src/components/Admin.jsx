
import booksData from "../data/books";
import { useEffect, useState } from "react";

function Admin() {
  const [books, setBooks] = useState([]);
   


  const url =
    "https://course-project-codesquad-comics-server.onrender.com/api/books";

  useEffect(() => {
    
    fetch(url, { method: "GET" })
      .then((response) => response.json() 
    )

      .then((result) => {
        console.log("Success:",result.success.message)
    
        setBooks(result.data.books);
      
      })
      .catch(console.log("error"));

    // console.log("Use effect works");
  }, []);
  // console.log(books);

  const handleDeleteBook = (bookId) => {
   

    fetch(`${url}/delete/${bookId}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((result) => console.log("Success:",result.success.message))
      .catch(console.log("error"));

      
  };

  return (
    <>
    <div className="home-collection-container">
      
      <thead >
        {/* <!--Data--> */}
        <tr>
          <th scope="col">COMIC TITLE</th>
          <th scope="col">EDIT</th>
          <th scope="col">DELETE</th>
        </tr>
      </thead>
      <tbody className="comic" >
        {books.map((book) => (
          <tr key={book._id}>
            <td scope="row">{book.title}</td>
            <td>
              <a href="/components/Update.jsx">
               <button className="edit-btn">EDIT</button>
              </a>
            </td>
            <td>
              <button onClick={()=>handleDeleteBook(book._id)} className="delete-btn">DELETE</button>
            </td>
          </tr>
        ))}
      </tbody>
      </div>
    </>
  );
}

export default Admin;
