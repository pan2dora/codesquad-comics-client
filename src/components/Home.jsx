function Home() {
    return (
      <main>
         {/* <!--Content--> */}
    <div className="home-container">
      <div className="home-collection-container">
        <h1 className="home-blerb-title">CODESQUAD COMICS</h1>
        <p>
          CodeSquad Comics is a collection of graphic novels read by Pandora.
          The site is intended to display comic book covers along with
          information about each book, including the author, a rating, and other
          details about the graphic novel. Browse through the complete
          collection below. Click on the cover image or the Details link to see
          even more information for each graphic novel including the publisher,
          genre, number of pages, and a brief synopsis. The About page includes
          meta information about this collection. Login is only available to the
          site administrator at this time.
        </p>
      </div>

      {/* <!--Comic books--> */}
    
      <div className="home-collection-container">
        <h2 className="home-blerb-title">COMPLETE COLLECTION</h2>
{/* 
        <!--Section 1--> */}
        <section>
          <a href="#">
            <img
              src="public/images/fun-home.jpg"
              alt="Green Book cover that depicts a family with a fun home logo "
          /></a>
          <div><em>Fun Home: A Family Tragicomic</em></div>
          <div>by Alison Bechdel</div>
          <div>5 stars</div>
          <a href="#" className="home-detail-link"><div>Details</div></a>
        </section>
        {/* <!--Section 2--> */}
        <section>
          <a href="#">
            <img
              src="public/images/batman.jpg"
              alt="Black Silhouette jumping through lightining"
          /></a>
          <div><em>Batman: Dark Knight Returns</em></div>
          <div>by Frank Miller</div>
          <div>4 stars</div>
          <a href="#" className="home-detail-link"><div>Details</div></a>
        </section>
        {/* <!--Section 3--> */}
        <section>
          <a href="#">
            <img
              src="public/images/watchmen.jpg"
              alt="Yellow book cover with animated drop of blood in front of a blackhole "
          /></a>
          <div><em>Watchmen</em></div>
          <div>by Alan Moore</div>
          <div>5 stars</div>
          <a href="#" className="home-detail-link"><div>Details</div></a>
        </section>
        {/* <!--Section 4--> */}
        <section>
          <a href="#"
            ><img
              src="public/images/hunter-x-hunter.jpg"
              alt="Manga cover that with the words Hunter in the background and a young boy dressed in green"
          /></a>
          <div><em>Hunter X Hunter Vol. 1</em></div>
          <div>Yoshishiro Togashi</div>
          <div>5 stars</div>
          <a href="hunterxhunter.html" className="home-detail-link"
            ><div>Details</div></a
          >
        </section>
        {/* <!--Section 5--> */}
        <section>
          <a href="#">
            <img
              src="public/images/lumberjanes.jpg"
              alt="Book cover depcting five teenagers in from on a wooden cabin"
          /></a>
          <div><em>Lumberjanes Vol. 1</em></div>
          <div>by Noelle Stevenson</div>
          <div>54stars</div>
          <a href="#" className="home-detail-link"><div>Details</div></a>
        </section>
        {/* <!--Section 6--> */}

        <section>
          <a href="#">
            <img src="public/images/one-piece.jpg" alt="Manga cover of pirates"
          /></a>
          <div><em>One Piece Vol. 1: Romance Dawn</em></div>
          <div>by Eiichiro Oda</div>
          <div>5 stars</div>
          <a href="#" className="home-detail-link"><div>Details</div></a>
        </section>
        {/* <!--Section 7--> */}
        <section>
          <a href="#">
            <img
              src="public/images/wake.jpg"
              alt="Red background covered in text depecting people in long white cloths"
          /></a>
          <div>
            <em>Wake: The Hidden History Of Women-Led Slave Revolts</em>
          </div>
          <div>by Rebecca Hall</div>
          <div>4 stars</div>
          <a href="#" className="home-detail-link"><div>Details</div></a>
        </section>
        {/* <!--Section 8--> */}
        <section>
          <a href="#"
            ><img
              src="public/images/black-panther.jpg"
              alt="Book cover with background of a city on fire and a figure dressed in all black costume"
          /></a>
          <div><em>Black Panther: A Nation Under Our Feet Book 1</em></div>
          <div>by Ta-Nehisi Coates</div>
          <div>5 stars</div>
          <a href="#" className="home-detail-link"><div>Details</div></a>
        </section>
        {/* <!--Section 9--> */}
        <section>
          <a href="#">
            <img
              src="public/images/the-walking-dead.jpg"
              alt="Picture of animated family portrait with zombies on the bottom "
          /></a>
          <div><em>The Walking Dead, Vol. I: Days Gone Bye </em></div>
          <div>by Robert Kirkman</div>
          <div>3 stars</div>
          <a href="#" className="home-detail-link"><div>Details</div></a>
        </section>
        {/* <!--Section 10--> */}
        <section>
          <a href="#">
            <img
              src="public/images/march.jpg"
              alt="Yellow book cover with legs at the top and people sitting at a table at the bottom "
          /></a>
          <div><em>March: Book One</em></div>
          <div>by John Lewis</div>
          <div>5 stars</div>
          <a href="#" className="home-detail-link"><div>Details</div></a>
        </section>
        {/* <!--Section 11--> */}
        <section>
          <a href="#">
            <img
              src="public/images/parable-of-the-sower.jpg"
              alt="Red and Gold animated background with half the face of a woman with locs on the right "
          /></a>
          <div><em>Parable of the Sower</em></div>
          <div>by Octavia Butler</div>
          <div>5 stars</div>
          <a href="#" className="home-detail-link"><div>Details</div></a>
        </section>
        {/* <!--Section 12--> */}
        <section>
          <a href="#">
            <img
              src="public/images/queer.jpg"
              alt="Image of figure running with umbrella and emitting arrows in the color of the rainbow "
          /></a>
          <div><em>Queer: A Graphic History</em></div>
          <div>by Meg-John Barker</div>
          <div>4 stars</div>
          <a href="#" className="home-detail-link"><div>Details</div></a>
        </section>
        {/* <!--Display more Button--> */}
        <br />

        <button className="btn">DISPLAY MORE</button>
      </div>
    </div>

      </main>
    
)
}
  export default Home;