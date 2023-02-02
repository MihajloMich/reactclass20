import { createContext } from "react";
import { PHOTOS_LIMIT } from "../utils/constants";
import { createContext } from "react";
import { useEffect } from "react";

// Create context
export const PhotosContext = createContext(null);
// Create provider
useEffect(() => {
  fetch(API_URL + "/photos?_limit=" + PHOTOS_LIMIT)
    .then((res) => res.json())
    .then((data) => setPhotos(data));
});
export const Photos = ({ children }) => {
  return (
    <PhotosContext.Provider value={boi}>{children}</PhotosContext.Provider>
  );
};
