//helper function that fetch products data from firebase
export const getProducts = async () => {
  const respond = await fetch(
    `https://coffee-market-f549a-default-rtdb.firebaseio.com/products.json`
  );
  const data = await respond.json();
  const loadedItems = [];
  for (const key in data) {
    loadedItems.push({
      id: key,
      title: data[key].title,
      price: data[key].price,
      image: data[key].image,
      amount: data[key].amount,
    });
  }
  return loadedItems;
};
