import React from "react";
// import "./Podcast.css";


function PodcastCard(props){
    console.log(props);
    return(
  <>
  <div className="podcastcards">
  <div className="podcastcard">
   <img src={props.imgsrc} alt="mypic" className="podcastcard_img" width={200}></img>
  <div className="podcastcard_info">
  <span className="podcastcard_category">
    {props.title}
  </span>
  <h3 className="podcastcard_title">{props.sname}</h3>
  <a href={props.link} target="_blank">
    <button>watch now</button>
  
  </a>
  </div>
  </div>
  </div>
  
  
  </>
    );   
  }
  export default PodcastCard;
  