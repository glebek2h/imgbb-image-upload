import readline from "readline";
import fs from "fs";
import { API_KEY } from "./API_KEY.js";
import { images } from "./assets/images.js";

const FILE_PATH = "/Users/gleb.kazachynski/Documents/image-upload.txt";

export const promptToNewApiKey = async (response) => {
  console.error(`Error: ${response.status} - ${response.statusText}`);

  return new Promise((resolve) => {
    const prompt = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    prompt.question("Enter a new API key: ", async (apiKey) => {
      prompt.close();
      API_KEY.set(apiKey);
      resolve(uploadImage(image));
    });
  });
};

export async function appendFile(r, index) {
  const response = r?.data?.url || images[index];

  await fs.appendFile(FILE_PATH, JSON.stringify(response) + ",", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(
        "Output saved to file.",
        index,
        "from ",
        images.length,
        images[index],
        "--->",
        response
      );
    }
  });
}

export async function clearFile() {
  await fs.writeFile(FILE_PATH, "", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("file cleared");
    }
  });
}
