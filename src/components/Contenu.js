import React, { Component } from "react";

export class Contenu extends Component {
  render() {
    return (
      <div className="container">
        <div className="row display-flex justify-content-center rowcontainer">
          <div className="col-md-5 col-12 m-auto display-flex flex-direction-column justify-content-center">
            <label htmlFor="from">From</label>
            <br />
            <select name="from" id="from">
              <option value="1">FCFA</option>
              <option value="2">Euro</option>
            </select>
            <br />
            <label htmlFor="montant">Montant</label>
            <br />
            <input type="text" name="montant" id="montant" />
          </div>
          <div className="col-md-2 col-12 m-auto p-5 display-flex justify-content-center">
            <button className="btn btn-lg  btn-primary"> Convert</button>
          </div>
          <div className="col-md-5 col-12 m-auto display-flex flex-direction-column justify-content-center">
            <label htmlFor="to">To</label>
            <br />
            <select name="to" id="to">
              <option value="1">FCFA</option>
              <option value="2">Euro</option>
            </select>
            <br />
            <label htmlFor="montantConvertis">Montant convertis</label>
            <br />
            <input type="text" name="montantConvertis" id="montantConvertis" />
          </div>
        </div>
      </div>
    );
  }
}

export default Contenu;
