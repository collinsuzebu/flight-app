const truncate = (str, n) => {
  const result = str.length > n ? `${str.substr(0, n - 1)}...` : str;
  return result;
};

export { truncate };
