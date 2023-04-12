import image from "../assets/home-img.jpg"
import { NavLink } from "react-router-dom";

const Home = () => {
  return ( 
  <div className="home-container">
    <div className="home-left">
      <h2>Where everything is <span className="home-accent">happening</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim adipisci dicta culpa accusamus perferendis eligendi, corporis quidem nam laudantium? Autem aperiam iure necessitatibus facilis sapiente. Cupiditate quibusdam veritatis beatae repudiandae?
      </p>
      <NavLink to="/products">See articles</NavLink>
    </div>
    <div className="home-right">
      <img src={image} alt="a woman reading a newspaper on fire" />
    </div>
  </div> );
}
 
export default Home;<h2>Home component</h2>