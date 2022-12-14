import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { compdata } from "./compdata";
import Navbar from "../../components/header/Navbar";
import "./Page.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from "../../components/footer/Footer";
import HomeLast from "../../components/lastComp/HomeLast";

const Page = () => {
  const { id } = useParams();
  const [com, setCom] = useState(null);

  useEffect(() => {
    let com = compdata.find((com) => com.id === parseInt(id));
    if (com) {
      setCom(com);
    }
  }, []);

  return (
    <>
      <div>
        <Navbar />        
      </div>
      {com ? (
        <div><img src={com.cover} alt="" className="hero-comp-img" />   

        <div className="container" >
          <h1
            className="Ultrabold"
            style={{
              fontSize: "3rem",
              marginTop: "3rem",
              marginBottom: "4rem",
              textAlign: "center",
            }}
          >
            {com.company}
          </h1>
          <div style={{backgroundColor:"#0f172b", padding: "2rem"}}>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.1rem" }}>{com.about}</p>
          </div>
          <h3
            className="Regular"
            style={{
              fontSize: "2rem",
              marginTop: "8rem",
              marginBottom: "2rem",
            }}
          >
            Recruitment Process
          </h3>
          <h5
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            {com.jd}
          </h5>
          <div style={{backgroundColor:"#0f172b", padding: "2rem",marginTop:"1rem"}}>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              marginTop: "4rem",
              marginBottom: "2rem", 
              fontSize: "1.1rem" 
            }}
          >
            {com.process}
          </p>
          </div>
          <h3
            className="Regular"
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "6rem",
              marginBottom: "5rem",
            }}
          >
            
            Our Mentors
          </h3>
          <div className='try'>
          {com.mentors}
          </div>
        </div>
{/*  */}


{/*  */}
        <HomeLast />
        <Footer />

        </div>   

      ) : (
        <h1
          className="Ultrabold"
          style={{
            fontSize: "3rem",
            marginTop: "2rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          {" "}
          System Error{" "}
        </h1>
      )}
    </>
  );
};

export default Page;
