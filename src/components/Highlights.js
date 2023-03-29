import Article from "./Article";

/* assets */
import articleImgOne from '../assets/greek_salad.jpg';
import articleImgTwo from '../assets/bruchetta.svg';
import articleImgThree from '../assets/lemon_dessert.jpg';

function Highlights() {
  return (
    <section className="highlights">
      <div className="container">
        <div className="top-section">
          <h2>This week specials!</h2>
          <a className="btn" href="/">Online Menu</a>
        </div>
        <ul className="highlights-list">
          <li>
            <Article
              image={articleImgOne}
              alt="Greek salad"
              title="Greek salad"
              price="12.99"
              description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
              orderUrl="/"
            />
          </li>
          <li>
            <Article
              image={articleImgTwo}
              alt="Bruchetta"
              title="Bruchetta"
              price="5.99"
              description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
              orderUrl="/"
            />
          </li>
          <li>
            <Article
              image={articleImgThree}
              alt="Lemon Dessert"
              title="Lemon Dessert"
              price="4.99"
              description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
              orderUrl="/"
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Highlights;