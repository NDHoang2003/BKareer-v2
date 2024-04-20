// my-module.js
let mbti = "";
let cc = "";

export const getMbti = () => {
  return mbti;
};

export const setMbti = (data) => {
  mbti = data;
};

export const getCc = () => {
  return cc;
};

export const setCc = (data) => {
  cc = data;
};

// Exporting the default value
export default {
  getMbti,
  setMbti,
  getCc,
  setCc,
};
