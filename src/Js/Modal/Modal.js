import React, { Component } from "react";
import "../../Css/ModalCss/Modal.css";

class Modal extends Component {
  // cerrar(event) {
  //   const modal = document.getElementById("myModal");
  //   modal.style.display = "none";
  // }
  render() {
    return (
      <div className="modal" id="myModal">
        <div class="modal-content">
          {this.props.Titulo}
          {/* <span class="close" onClick={this.cerrar}>
            &times;
          </span> */}
        </div>
        <div class="modal-content">
          <p>{this.props.Contenido}</p>
        </div>
      </div>
    );
  }
}

export default Modal;
