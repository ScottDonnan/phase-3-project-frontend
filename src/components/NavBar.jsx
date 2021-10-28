import '../App.css';
import React from "react";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import DeckContainer from "./deck-container";
import {Route, Switch} from 'react-router-dom'

function NavBar() {

  const [heroClass, setheroClass] = useState([])

  
  useEffect(()=>{
    fetch("http://localhost:9292/heros")
    .then(res => res.json())
    .then(data => setheroClass(data))
  }, [])

    return (
      <div className = 'header'>

        <img src= "http://assets.stickpng.com/images/58eeb797ee9418469d17ee04.png" />

        <Link exact to="/">
          <h2>ALL</h2>
        </Link>

        {heroClass.map((hero) =>
          <Link exact to={`/heroClass/${hero.name}`}>
              <h2>{hero.name}</h2>
          </Link>)
        }

      </div>
    );
  }
  
  export default NavBar;

 