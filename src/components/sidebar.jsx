import React from "react";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {

  const [heroClass, setheroClass] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/heros")
    .then(res => res.json())
    .then(data => setheroClass(data))
  }, [])

    return (
      <div className = "SideBar">
        <Link exact to="/heroClass">
        <h2>All</h2>
        {heroClass.map((hero) => <h2>{hero.name}</h2>)}
        </Link>
      </div>
    );
  }
  
  export default Sidebar;