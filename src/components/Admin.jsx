function Admin() {
    return (
      <main>
         <div className="home-collection-container">
      <h1 className="home-blerb-title">ADMIN PAGE</h1>
      {/* <!--Button--> */}
      <button type="button" className="btn">ADD NEW COMIC</button>
      {/* <!--TABLE--> */}
      <div className="admin-container">
        <table className="comic">
          <thead>
            {/* <!--Data--> */}
            <tr>
              <th scope="col">COMIC TITLE</th>
              <th scope="col">EDIT</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>

          <tbody>
            {/* <!--Comic 1--> */}
            <tr>
              <td scope="row">Batman: The Dark Knight Returns</td>
              <td>
                <a href="update.html"><button className="edit-btn">EDIT</button></a>
              </td>
              <td><button className="delete-btn">DELETE</button></td>
            </tr>
            {/* <!--Comic 2--> */}
            <tr>
              <td scope="row">Black Panther: A Nation Under Our Feet Book 1</td>
              <td>
                <a href="update.html"><button className="edit-btn">EDIT</button></a>
              </td>
              <td><button className="delete-btn">DELETE</button></td>
            </tr>
            {/* <!--Comic 3--> */}
            <tr>
              <td scope="row">Fun Home: A Family Tragicomic</td>
              <td>
                <a href="update.html"><button className="edit-btn">EDIT</button></a>
              </td>
              <td><button className="delete-btn">DELETE</button></td>
            </tr>
            {/* <!--Comic 4--> */}
            <tr>
              <td scope="row">Hunter X Hunter Vol. 1</td>
              <td>
                <a href="update.html"><button className="edit-btn">EDIT</button></a>
              </td>
              <td><button className="delete-btn">DELETE</button></td>
            </tr>
            {/* <!--Comic 5--> */}
            <tr>
              <td scope="row">Lumberjanes Vol. 1</td>
              <td>
                <a href="update.html"><button className="edit-btn">EDIT</button></a>
              </td>
              <td><button className="delete-btn">DELETE</button></td>
            </tr>
            {/* <!--Comic 6--> */}
            <tr>
              <td scope="row">March Book One</td>
              <td>
                <a href="update.html"><button className="edit-btn">EDIT</button></a>
              </td>
              <td><button className="delete-btn">DELETE</button></td>
            </tr>
            {/* <!--Comic 7--> */}
            <tr>
              <td scope="row">One Piece, Vol 1: Romance Dawn</td>
              <td>
                <a href="update.html"><button className="edit-btn">EDIT</button></a>
              </td>
              <td><button className="delete-btn">DELETE</button></td>
            </tr>
            {/* <!--Comic 8--> */}
            <tr>
              <td scope="row">Parable of the Sower</td>
              <td>
                <a href="update.html"><button className="edit-btn">EDIT</button></a>
              </td>
              <td><button className="delete-btn">DELETE</button></td>
            </tr>
            {/* <!--Comic 9--> */}
            <tr>
              <td scope="row">Queer: A Graphic History</td>
              <td>
                <a href="update.html"><button className="edit-btn">EDIT</button></a>
              </td>
              <td><button className="delete-btn">DELETE</button></td>
            </tr>
            {/* <!--Comic 10--> */}
            <tr>
              <td scope="row">The Walking Dead, Vol, 1: Days Gone Bye</td>
              <td>
                <a href="update.html"><button className="edit-btn">EDIT</button></a>
              </td>
              <td><button className="delete-btn">DELETE</button></td>
            </tr>
            {/* <!--Comic 11--> */}
            <tr>
              <td scope="row">
                Wake: The Hidden History of Women-Led Slave Revolts
              </td>
              <td>
                <a href="update.html"><button className="edit-btn">EDIT</button></a>
              </td>
              <td><button className="delete-btn">DELETE</button></td>
            </tr>
            {/* <!--Comic 12--> */}
            <tr>
              <td scope="row">Watchmen</td>
              <td>
                <a href="update.html"><button className="edit-btn">EDIT</button></a>
              </td>
              <td><button className="delete-btn">DELETE</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      </main>
    )
  }

  export default Admin;