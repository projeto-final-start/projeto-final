import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="apresentacao-home">
        <h1>Sintonia</h1>
        <span>Mental</span>
        <p>
          Consultas humanizadas e seguras <br /> para você e sua família
        </p>
        <Link to="/login" className="btn-home">
          Agende Online
        </Link>
      </div>
      <figure>
        <img className="img-home" src="/foto-home.svg" alt="Imagem de home" />
      </figure>
    </section>
  );
}

export default Home;
