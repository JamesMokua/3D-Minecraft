import { TextureLoader, NearestFilter } from "three";

import { dirtImg, logImg, grassImg, glassImg, woodImg } from "./images";

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const logTexture = new TextureLoader().load(logImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter =
  grassTexture.magFilter =
  glassTexture.magFilter =
  logTexture.magFilter =
  woodTexture.magFilter =
  groundTexture.magFilter =
    NearestFilter;
export {
  dirtTexture,
  grassTexture,
  glassTexture,
  logTexture,
  woodTexture,
  groundTexture,
};
