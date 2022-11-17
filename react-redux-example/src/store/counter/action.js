export const INCREMENT = "counter/increment";
export const DECREMENT = "counter/decrement";

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};
