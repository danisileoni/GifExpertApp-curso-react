import { useEffect, useState } from "react";
import { getGif } from '../helpers/getGifs'


export const useFechGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  const getImages = async() => {
    const newImages = await getGif(category);
    setImages(newImages);
    setIsLoding(false);
  }

  useEffect(() => {
    getImages();
  }, [])

  return{
    images,
    isLoding
  }
}
