function Update() {
    return (
   <main>
 <div className="update-form">
        <form >
          {/* <!--Title Text--> */}
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="title"
              name="title"
              value="title value stored in the database"
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
              value="author value stored in the database"
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
                Publisher data stored in the database
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
              value="genre data stored in the database"
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
              value="255"
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
              value="5"
            />
          </div>
          <br />
          {/* <!--Synopsis Text area--> */}
          <div>
            <label htmlFor="form-text">Synopsis:</label>
            <textarea className="form-text" name="form-text" htmlFor="form-text">
Synopsis stored in database </textarea
            >
          </div>
          <div>
            <input type="submit" value="Submit" name="button" className="btn" />
          </div>
        </form>
      </div>
   



   </main>
    )
  }

  export default Update;