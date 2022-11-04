import React from 'react'
import PodcastCard from './PodcastCard'
import "./Podcast.css"
import ReactDom from "react-dom";
import Navbar from "../../components/header/Navbar"

const data = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      title: "Some imgs",
      sname:"First Podcast",
      link:"",
    },
    {
      id: 2,
      image: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title: "Some imgs",
      sname:"First Podcast",
      link:"",
    },
    {
      id: 3,
      image: "https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=",
      title: "Some imgs",
      sname:"First Podcast",
      link:"",
    },
    {
      id: 4,
      image: "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg",
      title: "Some imgs",
      sname:"First Podcast",
      link:"",
    },
]

function Podcast() {
  return (
    <>
        <Navbar/>
    <h1 className="podcast_heading__style regular" style={{
              fontSize: "4rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}>
                PODCAST
                </h1>
    <div className="podcastsection">

    {data.map(({ id, image, title, sname,link }) => {
              return (
                <PodcastCard key={id}
            imgsrc={image}
            title={title}
            sname={sname}
            link={link}
    
     />
              );
            })}
        </div>
</>    

  )
}

export default Podcast