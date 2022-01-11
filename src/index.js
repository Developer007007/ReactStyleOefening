import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

{/* https://www.youtube.com/watch?v=SW3emX9TJ4g&ab_channel=BoostMyTool      */}


ReactDOM.render(
  <div>
    {/* <h1 className="heading" contentEditable="false">My Favourite Foods</h1> */}
    <h1 className="heading" contentEditable="true" spellcheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img className="food-img" src="https://mobkitchen-objects.imgix.net/recipes/2021/849A3323.jpg?auto=format&crop=focalpoint&domain=mobkitchen-objects.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=1300&ixlib=php-3.3.1&q=82&w=1300&s=ad18ec26d2bedbe0019b3d87fecfeffb"></img>
      <img className="food-img" src="https://vvvv.org/sites/default/files/Fresh_ramen_noodle_001.jpg"></img>
      <img className="food-img" src="https://purewows3.imgix.net/images/articles/2022_01/easy-asian-noodle-recipes_Dan-Dan-Noodles_4-2.jpeg?auto=format,compress&cs=strip"></img>

      {/* https://picsum.photos/ */}
      <img  src={img}></img>
      <img  src={img + "?grayscale"}></img>

    </div>
  </div>,
  document.getElementById("root")
);
