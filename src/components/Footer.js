import React from "react";
//import css
import "../App.css";

//componente footer, donde se crea un nuevo usuario
class Footer extends React.Component {
  render() {
    return (
      <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
          <small>
            Copyright &copy; Ingold - Guimaraens | Universidad ORT Uruguay 2019{" "}
          </small>
        </div>
      </footer>
    );
  }
}

//export
export default Footer;
