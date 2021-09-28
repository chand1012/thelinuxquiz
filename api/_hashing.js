import bcrypt from "bcrypt";

// these are to simplify the process of hashing and comparing passwords

const saltRounds = 10;

const hash = (password) => {
  return bcrypt.hash(password, saltRounds);
};

const compare = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export default {
  hash,
  compare,
};
