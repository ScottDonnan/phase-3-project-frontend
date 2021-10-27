import React from "react";


function Sidebar({heroClass}) {

  
    return (
      <div className = "SideBar">
        {heroClass.map((hero) => <h3>{hero.name}</h3>)}
      </div>
    );
  }
  
  export default Sidebar;