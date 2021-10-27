import React from "react";
import {useEffect, useState} from 'react'

function Sidebar() {

  const [heroClass, setheroClass] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/heros")
    .then(res => res.json())
    .then(data => setheroClass(data))
  }, [])

    return (
      <div className = "SideBar">
        <h2>All</h2>
        {heroClass.map((hero) => <h2>{hero.name}</h2>)}
      </div>
    );
  }
  
  export default Sidebar;