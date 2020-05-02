import { hiragana } from "../hiragana";

const indexChoice = (distribution) => {
  const ur = Math.random();
  let total = 0;
  const arr = distribution.map((value) => {
    total += value;
    return ur < total;
  });

  return arr.indexOf(true) !== -1 ? arr.indexOf(true) : distribution.length - 1;
};

export const isInQueue = (sample, sampleArray) => {
  return sampleArray.map((x) => x.romaji).indexOf(sample.romaji) !== -1;
};

export const getRandomSamples = (qtd = 8, picked = []) => {
  const array = [...hiragana];
  const newSamples = [];
  let samples = [];

  if (picked.length === 0) {
    array.forEach(() => picked.push(0));
  }

  const distribution = softMax(picked);

  while (samples.length < qtd) {
    const randomNumber = indexChoice(distribution);
    const element = array[randomNumber];
    if (!isInQueue(element, samples)) {
      samples.push(element);
      picked[randomNumber] += 1;
    }
  }

  samples.forEach((sample, index) => {
    const obj1 = { ...sample };
    obj1.id = index;
    newSamples.push(obj1);
    const obj2 = { ...sample };
    obj2.id = index + samples.length - 1;
    newSamples.push(obj2);
  });

  return [shuffle([...newSamples]), picked];
};

export const shuffle = (array) => {
  const len = array.length;
  const newArray = [];
  for (let index = 0; index < len; index++) {
    const randomNumber = Math.floor(Math.random() * (len - index));
    newArray.push(array[randomNumber]);
    array.splice(randomNumber, 1);
  }
  return newArray;
};

export const softMax = (picked) => {
  const sumExp = picked.reduce((total, number) => {
    return total + Math.exp(-number);
  });
  return picked.map((number) => Math.exp(-number) / sumExp);
};
