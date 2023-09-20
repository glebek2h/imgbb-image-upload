import fetch from "node-fetch";
import FormData from "form-data";
import { images } from "./assets/images.js";
import { API_KEY } from "./API_KEY.js";
import { appendFile, clearFile, promptToNewApiKey } from "./helpers.js";

const imgBBUrl = "https://api.imgbb.com/1/upload?key=";
const uploadImage = async (image) => {
  const form = new FormData();
  form.append("image", image);

  const response = await fetch(`${imgBBUrl}${API_KEY.value}`, {
    method: "POST",
    body: form,
  });

  console.log(response.status);

  return await (response.ok ? response.json() : promptToNewApiKey());
};

const uploadImages = async (images) => {
  for (const [i, image] of images.entries()) {
    const response = await uploadImage(image);
    await appendFile(response, i);
  }
};

await clearFile();

await uploadImages(images);
