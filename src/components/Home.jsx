import { useState } from "react";
import booksData from "../data/books";


function Home() {
// Use state to hold data for books 
const [books, setBooks] = useState([])

const handleBooks = () =>{
  
}




    return (
      <main>
         {/* <!--Content--> */}
         {booksData.map((book) => 
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
        ) }


      </main>
    
)
}
  export default Home;