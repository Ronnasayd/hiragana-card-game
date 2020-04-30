export const getRandomArray = (length = 8, array = [], distribution = []) => {
  const newArray = [];

  for (let index = 0; index < (length * length) / 2; index++) {
    const randomNumber = Math.floor(Math.random() * (array.length - index));
    newArray.push(array[randomNumber]);
    array.splice(randomNumber, 1);
  }

  return newArray;
};

export const duplicateAddID = (array) => {
  const newArray = [];
  array.forEach((arr, index) => {
    const obj1 = { ...arr };
    obj1.id = index;
    newArray.push(obj1);
    const obj2 = { ...arr };
    obj2.id = index + array.length - 1;
    newArray.push(obj2);
  });

  return newArray;
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
