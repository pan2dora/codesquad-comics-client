import booksData from "../data/books";
import { useState, useEffect } from "react";

console.log(booksData);
// create var named id and give it value

function Update() {
  const bookID = booksData[2]._id;
  console.log("id>>", bookID);
  const [books, setBooks] = useState({});

  useEffect(() => {
    // new var to hold data
    const foundBook = booksData.find((book) => book._id === `${bookID}`);
    console.log("New Array data:", foundBook);
    setBooks(foundBook);
  }, [bookID]);

  console.log("books post useaffect:", books);

  // Build an handler func to update form submission

  const handleUpdate = (e) => {
    // prevent default behavior
    e.preventDefault();
    console.log("Update submitted");

    console.log("Title:", e.target.title.value);
    console.log("Author:", e.target.author.value);
    console.log("Genre:", e.target.genre.value);
    console.log("Pages:", e.target.pages.value);
    console.log("Rating:", e.target.rating.value);
    // console.log("Synopsis:", e.target.synopsis.value);
  };

  // Updating form data

  return (
    <main>
      <div>
        <h1 className="home-blerb-title">Update</h1>
        <form onSubmit={handleUpdate} className="update-form">
          {/* <!--Title Text--> */}
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="title"
              name="title"
              defaultValue={books.title}
            />
          </div>

          <br />
          {/* <!--Author Text--> */}
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              className="author"
              name="author"
              defaultValue={books.author}
            />
          </div>
          <br />
          {/* <!--Publisher Select--> */}
          <div className="publisher">
            <label>Publisher:</label>
            <select>
              <option value="boombox">Boom! Box</option>
              {/* <!--attribute 1--> */}
              <option value="dc">DC Comics</option>
              <option value="harry-abrams">Harry N. Abrams</option>
              <option value="icon-books">Icon Books</option>
              <option value="image-comics">Image Comics</option>
              {/* <!-- attribute 2--> */}
              <option value="marvel">Marvel</option>
              <option value="simon-schuster">Simon & Schuster</option>
              <option value="top-shelf">Top Shelf Productions</option>
              <option value="viz-media">Viz Media LLC</option>
              {/* <!--Selected attribute--> */}
              <option value="database" selected>
                {books.publisher}
              </option>
            </select>
          </div>
          <br />
          {/* <!--Genre Text--> */}
          <div>
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              className="genre"
              name="genre"
              defaultValue={books.genre}
            />
          </div>
          <br />
          {/* <!--Pages Text--> */}
          <div>
            <label htmlFor="pages">Number of pages:</label>
            <input
              type="text"
              className="pages"
              name="pages"
              htmlFor="pages"
              defaultValue={books.pages}
            />
          </div>
          <br />
          {/* <!--Rating Text--> */}
          <div>
            <label htmlFor="rating">Rating:</label>
            <input
              type="text"
              className="rating"
              name="rating"
              htmlFor="rating"
              defaultValue={books.rating}
            />
          </div>
          <br />
          {/* <!--Synopsis Text area--> */}
          <div>
            <label htmlFor="form-text">Synopsis:</label>
            <textarea
              className="form-text"
              name="form-text"
              htmlFor="form-text"
              defaultValue={books.synopsis}
            />
          </div>
          <div>
            <input type="submit" value="Submit" name="button" className="btn" />
          </div>
        </form>
      </div>
    </main>
  );
}

export default Update;
