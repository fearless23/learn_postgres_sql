const { wrapper, errRes, sucRes } = require("./helpers");

const getUsers = async (_, res) => {
  const query = "SELECT * FROM users ORDER BY id ASC";
  // const values = "";
  const msg = "All Users";
  try {
    const { data } = await wrapper(query);
    sucRes(res, data, msg);
  } catch (err) {
    errRes(res, err);
  }
};

const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  const query = "SELECT * FROM users WHERE id = $1";
  const msg = `User data with id ${id}`;
  const values = [id];
  try {
    const { data } = await wrapper(query, values);
    const xx = !!data[0] ? data[0] : null;
    sucRes(res, xx, msg);
  } catch (err) {
    errRes(res, err);
  }
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const query = "INSERT INTO users (name, email) VALUES ($1, $2)";
  // const msg = `User Created`;
  const values = [name, email];
  try {
    const { count } = await wrapper(query, values);
    sucRes(res, null, `${count} user created`);
  } catch (err) {
    errRes(res, err);
  }
};

const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  const query = "UPDATE users SET name = $1, email = $2 WHERE id = $3";
  // const msg = `User data with id ${id}`;
  const values = [name, email, id];
  try {
    const { count } = await wrapper(query, values);
    sucRes(res, null, `${count} user updated with id: ${id}`);
  } catch (err) {
    errRes(res, err);
  }
};

const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const query = "DELETE FROM users WHERE id = $1";
  // const msg = `User data with id ${id}`;
  const values = [id];
  try {
    const { count } = await wrapper(query, values);
    sucRes(res, null, `${count} user with id: ${id} deleted`);
  } catch (err) {
    errRes(res, err);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
