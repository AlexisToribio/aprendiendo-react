import { useState, useEffect } from "react";
import { getCatImage } from "../services/images";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  // para recuperar la imagen cada vez que tengemos una cita neuva
  useEffect(() => {
    if (!fact) return;
    getCatImage({ fact }).then(url => setImageUrl(url));
  }, [fact]);
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
}
