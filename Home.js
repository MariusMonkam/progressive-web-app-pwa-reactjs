//useState for stage management=> hooks
//useEffect for data loading => hooks=
import React,{useState,useEffect} from 'react';

function Home(){
  //create a state variable call data
  // a function for updating the state call //setdata
  const [data,setData]= useState([])
  useEffect(()=> {
    const fetchData = async()=>{
      const result = await fetch("https://orangevalleycaa.org/api/videos").then(
        // turn the response into json
        response =>response.json()
      );
      setData(result);//set the result as the new //value of data
    };
    fetchData();
    //empty array mean that we only want to fetch //data one time when the component mount
  },[]);
  return(
    <div className="Appzero">
     <header>
     <h1>Videos</h1>
    </header>
    {data.map(video =>(
      // for each video we are going to create a div
      //each child must have a unique key 
      <div key={video.id}>
      <h2> {video.name}</h2>
      <video height={200} controls src={video.video_url}> </video>
      </div>
    ))}
    </div>
  );
};

export default Home