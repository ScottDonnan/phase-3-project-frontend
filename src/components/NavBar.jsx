import '../App.css';
import React from "react";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function NavBar({setCreateDeck}) {

  const [heroClass, setheroClass] = useState([])

  
  useEffect(()=>{
    fetch("http://localhost:9292/heros")
    .then(res => res.json())
    .then(data => setheroClass(data))
  }, [])

    return (
      <div className = 'header'>

        <img src= "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt6c7a1670b63c236d/5f177eb1670b730798f13b03/homepage_logo.webp" />

        <Link exact to="/">
          <h2>All</h2>
        </Link>

        {heroClass.map((hero) =>
          <Link onClick={()=> setCreateDeck(true)}exact to={`/heroClass/${hero.name}`}>
              <h2>{hero.name}</h2>
          </Link>)
        }

      </div>
    );
  }
  
  export default NavBar;

 