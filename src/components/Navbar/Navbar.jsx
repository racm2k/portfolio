
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo.svg";
import "./Navbar.css";

function Navbar(){
    return <nav>
    <div>
      <a style={{fontSize:'28px',letterSpacing:'2px'}} className="nav-link" href="#">
      <strong className="brackets">{"<"}</strong>
              {"Ruben Machado"}
              <strong className="brackets">{"/>"}</strong>
      </a>
    </div>
    <img className="nav-link nav-link-image App-logo" src={logo} alt="react"></img>
    
      <div>
      <a className="nav-link" href="#">Resumé</a>
      <a className="nav-link" href="#">Experience</a>
      <a className="nav-link" href="#">Skills</a>
      <a className="nav-link" href="#">Contacts</a>
      </div>
    
  </nav>
}

export default Navbar;