import React from "react";



function Header (props) {
  return(
      <div id={props.id}>
            <h2 className="text-center" >{props.text}</h2>
      </div>
    )
}

export default Header;