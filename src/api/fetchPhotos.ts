import api from "../constants/routes";
import { httpOptions } from "./httpOptions";

export const fetchPhotos = async ({ pageParam = 1, orderBy = "latest" }) => {
  const res = await fetch(api.photos(pageParam, orderBy), httpOptions);

  if (!res.ok) throw new Error("Error!");

  const data = await res.json();

  return data;
};
