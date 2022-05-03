import React, { useState, useEffect } from "react";
import "./SlideInCard.css";


export default function SlideInCard({ children, slideInCard, setSlideInCard }) {

  if (slideInCard === "1"){
    setTimeout(() => setSlideInCard("0"), 2000);
  }
  

  let nameOfClass = "";

  if (slideInCard === "1"){
    nameOfClass = "slide-in"
  }
  else if(slideInCard === "0"){
    nameOfClass = "slide-out"
  }
  else if(slideInCard === "-1"){
    nameOfClass = "s"
  }

  console.log(slideInCard)

  return (
    <div id="slider" className={nameOfClass}>
      <ul>{children}</ul>
    </div>

  );
}
