import booksData from "../data/books";
import { useEffect, useState } from "react";

function Admin() {

const [books, setBooks] = useState([])

useEffect(()=> {
  setBooks(booksData)
console.log("Use effect works")

},[])

    return (
     
      <>
        <thead>
            {/* <!--Data--> */}
            <tr>
              <th scope="col">COMIC TITLE</th>
              <th scope="col">EDIT</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
      {books.map((book) => 
     
     <tr key={book.id}>
              <td scope="row">{book.title}</td>
              <td>
                <a href="#"><button class="edit-btn">EDIT</button></a>
              </td>
              <td><button class="delete-btn">DELETE</button></td>
            </tr>
    
    
    
    ) }
    </tbody>
     
      </>
    )
  }

  export default Admin;