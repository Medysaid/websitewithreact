import React from 'react';
import "./home.css";
import myImage from '../assets/images/pck2.jpg';
function DivList(props:any) {
    const divItems = props.items.map((item:any, index:any) => (
    //   <div key={index}>{item}</div>
    <div key={index} className="card">
              <div className="imgBox">
                <img src={myImage} alt="mouse corsair" className="mouse" />
              </div>

              <div className="contentBox">
                <h3>Mouse Corsair M65</h3>
                <h2 className="price">
                  61.<small>98</small> €
                </h2>
                <a href="#" className="buy">
                  Buy Now
                </a>
              </div>
            </div>
    ));
  
    return (
        <div className="div-list">
        {props.items.map((item:any, index:any) => (
        <div key={index} className="card">
        <div className="imgBox">
          <img src={myImage} alt="mouse corsair" className="mouse" />
        </div>

        <div className="contentBox">
          <h3>Mouse Corsair M65</h3>
          <h2 className="price">
            61.<small>98</small> €
          </h2>
          <a href="#" className="buy">
            Buy Now
          </a>
        </div>
      </div>
        ))}
      </div>
    );
  }
  export default DivList;