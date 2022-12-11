const isValueNew = (key) => !window.localStorage.getItem(key);

const generateUserId = (key, value) => {
  window.localStorage.setItem(key, value);
  return window.localStorage.getItem(key);
};

export const getLSValue = (key, value) => {
  if (isValueNew(key)) {
    return generateUserId(key, value);
  } else {
    return window.localStorage.getItem(key);
  }
};
