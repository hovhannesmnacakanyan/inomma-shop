const getProbability = (weight, totalWeight) => ((weight / totalWeight) * 100).toFixed(2);

const getRandomNumber = number => Math.floor(Math.random() * number);

export const getRandomProductsList = (products, totalWeight) => {
  const randomItems = {};

  do {
    const index = getRandomNumber(products.length);

    if (randomItems.hasOwnProperty(index)) continue;

    randomItems[index] = {
      ...products[index],
      probability: getProbability(products[index].weight, totalWeight),
    };
  } while (Object.values(randomItems).length !== 5);

  return Object.values(randomItems);
};
