export const uniqId = () => {
  const id = Date.now() * Math.random();
  return id;
};
