import booksData from "../data/books";

function Admin() {
    return (
      <main>
        <thead>
            {/* <!--Data--> */}
            <tr>
              <th scope="col">COMIC TITLE</th>
              <th scope="col">EDIT</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
      {booksData.map((book) => 
     
     <tr>
              <td scope="row">{book.title}</td>
              <td>
                <a href="#"><button class="edit-btn">EDIT</button></a>
              </td>
              <td><button class="delete-btn">DELETE</button></td>
            </tr>
    
    
    
    ) }
    </tbody>
     
      </main>
    )
  }

  export default Admin;