import md5 from "md5";

// these are to simplify the process of hashing and comparing passwords

const hash = (password) => {
  return md5(password);
};

export default {
  hash,
};
