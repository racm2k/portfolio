import "./Body.css";
import myPicture from "../../images/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Body() {
  return (
    <main>
      <section style={{marginTop:'100px'}}>
        <div className="main-content">
          <img src={myPicture} alt="me"></img>
          <div className="intro-content">
            <p>HI THERE! I'M</p>
            <p className="name">
              <strong className="brackets">{"<"}</strong>
              {"Ruben Machado"}
              <strong className="brackets">{"/>"}</strong>
            </p>
            <p>A passionate aspiring FullStack developer.</p>
            <div className="buttons-section">
              <a href="#" className="cv-button">
                Resumé
              </a>
              <div className="social-buttons-section">
                <a
                  
                  href="https://www.linkedin.com/in/ruben-machado-9929641a9"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon="fa-brands fa-linkedin"
                    className="social-button-icon"
                  />
                </a>
                <a
                  href="https://www.github.com/racm2k"
                  
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon="fa-brands fa-github"
                    className="social-button-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>

      </section>
    </main>
  );
}

export default Body;
