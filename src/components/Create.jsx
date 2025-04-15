function Create() {
  // Build an arrow func to handle the create form submissions.
  const handleSubmit = (e) => {
    // Method to prevent default behavior of form submission

    e.preventDefault(console.log("Submitted"));
    // Print message to console that this ran
    // Note: Not sure if this is the correct way but was the first way I thought to excute this
    console.log("Title submitted:", e.target.title.value);
    console.log("Author submitted:",  e.target.author.value);
    console.log("Publusher submitted:", e.target.publisher.value)
    console.log("Genre submitted:",  e.target.genre.value);
    console.log("Pages submitted:",  e.target.pages.value);
    console.log("Synopsis submitted:",  e.target.synopsis.value);
  };

  return (
    <main>
      <div className="home-collection-container">
        <h1 className="home-blerb-title">CREATE NEW COMIC</h1>
        <form onSubmit={handleSubmit} className="create-form">
          {/* <!--Title Text--> */}
          <div className="create-form-text">
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                required
              />
            </div>
            <br />
            {/* <!--Author Text--> */}
            <div>
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                placeholder="Author"
                required
              />
            </div>
            <br />
            {/* <!--Publisher Select--> */}
            <div>
              <label>Publisher</label>
              <select name="publisher" id="publisher-select">
                <option value="option">--SELECT--</option>
                <option value="boombox">Boom! Box</option>
                <option value="dc">DC Comics</option>
                <option value="harry-abrams">Harry N. Abrams</option>
                <option value="icon-books">Icon Books</option>
                <option value="image-comics">Image Comics</option>
                <option value="marvel">Marvel</option>
                <option value="simon-schuster">Simon & Schuster</option>
                <option value="top-shelf">Top Shelf Productions</option>
                <option value="viz-media">Viz Media LLC</option>
                <option value="database">
                  publisher value stored in database
                </option>
              </select>
            </div>
            <br />
            {/* <!--Genre Text--> */}
            <div>
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                id="genre"
                name="genre"
                placeholder="GENRE"
                required
              />
            </div>
            <br />
            {/* <!--Pages Text--> */}
            <div>
              <label htmlFor="pages">Number of pages:</label>
              <input
                type="text"
                id="pages"
                name="pages"
                placeholder="Number of pages"
                required
              />
            </div>
            <br />
            {/* <!--Rating Text--> */}
            {/* <div>
            <label htmlFor="rating">Rating:</label>
            <input
              type="text"
              id="rating"
              name="rating"
              required
              style="width: 25px"
            />
          </div> */}
            <br />
            {/* <!--Synopsis--> */}
            <div>
              <label htmlFor="form-text">Synopsis:</label>
              <textarea
              
                id="synopsis"
                cols="20"
                placeholder="Synopsis"
              ></textarea>
            </div>
          </div>

          <input type="submit" value="Submit" name="button" className="btn" />
        </form>
      </div>
    </main>
  );
}

export default Create;
