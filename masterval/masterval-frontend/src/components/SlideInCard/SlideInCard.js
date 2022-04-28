import React, { useState, useEffect } from "react";
import "./SlideInCard.css";


export default function SlideInCard({ children, slideInCard, setSlideInCard }) {



  
  setTimeout(() => setSlideInCard(false), 2000);

  return (
    <div id="slider" class={slideInCard ? "slide-in" : "slide-out"}>
      <ul>{children}</ul>
    </div>
  );
}
