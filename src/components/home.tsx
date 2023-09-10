import { useEffect, useState } from "react";
import "./home.css";
// import DivList from './card.tsx'; 
import myImage from "../assets/images/pck2.jpg";
import DivList from "./card";
function Home(params: any) {
    const items = ["Item 1", "Item 2", "Item 3",
     "Item 4"]; // Example array of items

  const [isActive, setIsActive] = useState({
    id: "divOne",
  });
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);
  const hideShowDiv = (e: any) => {
    setIsActive({
      id: e.target.id,
    });
  };

  return (
    <div className="main">
      <div className="nav">
        <div className="top-nave" >
        <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li style={{float:'right'}}><a className="active" href="#about">About</a></li>
</ul>
        </div>
      </div>
     
      <div className="nav-header">
        <div className="nav-header-tittle">
          {" "}
          <p>
            {" "}
            <h2>My Web site</h2>{" "}
          </p>{" "}
        </div>
      </div>
      <div className="container-main">
        <div className="heading">
          <center>
            <h3>Our Top Products</h3>
          </center>
        </div>
        <div className="container-tabs">
          <div className="tab tab-cn">
            <button
              className="tablinks"
              id="divOne"
              onClick={(e) => {
                hideShowDiv(e);
              }}
            >
              London
            </button>
            <button
              className="tablinks"
              id="divTwo"
              onClick={(e) => {
                hideShowDiv(e);
              }}
            >
              Paris
            </button>
            <button
              className="tablinks"
              id="divThree"
              onClick={(e) => {
                hideShowDiv(e);
              }}
            >
              Tokyo
            </button>
          </div>

          <div
            className={isActive.id === "divOne" ? "tabcontent1" : "tabcontent"}
          >
            <h3>London</h3>
            

            <DivList items={items} />

           
          </div>

          <div
            className={isActive.id === "divTwo" ? "tabcontent1" : "tabcontent"}
          >
            <h3>Paris</h3>
            <DivList items={items} />
            {/* <p>Paris is the capital of France.</p> */}
          </div>

          <div
            className={
              isActive.id === "divThree" ? "tabcontent1" : "tabcontent"
            }
          >
            <h3>Tokyo</h3>
            <DivList items={items} />
            {/* <p>Tokyo is the capital of Japan.</p> */}
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Home;
