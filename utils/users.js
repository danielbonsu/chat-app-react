users = [];

const addUser = (user) => {
  users.push(user);

  return user;
};

const getCurrentUser = (id) => {
  const user = users.find(
    (user) => user.id === id
  );

  return user;
};

const userLeaves = (id) => {
  const index = users.find(
    (user) => user.id === id
  );

  const user = users.splice(index, 1)[0];

  if (user) {
    return user;
  }
};

module.exports = {
  addUser,
  getCurrentUser,
  userLeaves,
};
