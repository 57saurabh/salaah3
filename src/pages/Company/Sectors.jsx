import React from 'react';
import Navbar from "../../components/header/Navbar";
import "./sectors.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Page from "./Page";
import {compdata} from "./compdata";

import IMG1 from "../../assets/mnc's.jpg";
import IMG2 from "../../assets/government.png";
import IMG3 from "../../assets/Contentcreater.jpg";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "MNC'S and Startups",
    link:'/company',
  
  },
  {
    id: 2,
    image: IMG2,
    title: "Government",
    link:'/government'
  
  },
  {
    id: 3,
    image: IMG3,
    title: "Content Creater",
    link:'/contentcreater'
  },
  
];

const Sectors = () => {

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="Ultrabold comp" style={{ marginTop: "8rem", marginBottom: "7rem" }}>Sectors</h1>
      </div>
      <div className="container" style={{marginBottom: "15%"}}>
        <section id="company">
          <div className="company__container">
            {data.map(({ id, image, title, website,link }) => {
              return (
                <article key={id} className="company__item">
                  <div className="company__item-image">
                    <img
                      src={image}
                      alt={title}
                      style={{
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </div>
                  <h3>{title}</h3>
                  <div className="company__item-cta">
                    <Link
                      to={link}
                      className="btn btn-primary"                      
                    >
                      Guide
                    </Link>


                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Sectors;
