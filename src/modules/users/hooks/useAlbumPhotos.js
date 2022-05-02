import { useEffect, useState } from "react";
import { fetchPhotos } from "../services/usersService";

export default function useAlbumPhotos(id) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetchPhotos(id).then(({ data }) => {
      setPhotos(data);
    });
  }, []);

  return { photos };
}
