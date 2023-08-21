const tempId = () => {
  return (
    Date.now() +
    Math.floor(Math.random() * 1000) * (Date.now() / Date.now()) * Date.now() +
    Math.floor(Math.random() * 10000000000).toString()
  );
};
export default tempId;
