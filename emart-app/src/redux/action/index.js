//TO ADD THE ITEMS TO CART

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//TO DELETE ITMS FROM CART.
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
