import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
import { useFechGifs } from "../hooks/useFechGifs";

export const GifGrid = ({category}) => {

  const {images, isLoding} = useFechGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoding && (<h2 >Cargando...</h2>)
      }

      <div className="card-grid">
      {
        images.map( (image) => (
          <GifItem 
            key={image.id} 
            {...image}
          />
      ))
      }
      </div>
      
    </>
  )
}
