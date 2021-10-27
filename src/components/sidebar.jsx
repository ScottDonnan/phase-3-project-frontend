import React from "react";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Sidebar({displayCards}) {

  const [heroClass, setheroClass] = useState([])

  
  useEffect(()=>{
    fetch("http://localhost:9292/heros")
    .then(res => res.json())
    .then(data => setheroClass(data))
  }, [])

    return (
      <div className = "SideBar">

        <Link exact to="/">
          <h2>All</h2>
        </Link>

        {heroClass.map((hero) =>
        <Link exact to={`/heroClass/${hero.name}`}>
            <h2>{hero.name}</h2>
        </Link>)}
      </div>
    );
  }
  
  export default Sidebar;