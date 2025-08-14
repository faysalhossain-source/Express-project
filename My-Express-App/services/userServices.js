const pool = require("../db"); // PostgreSQL connection


const getAllUsers = () => {
    return pool.query("SELECT * FROM users");
};


const getUserById = (id) => {
    return pool.query("SELECT * FROM users WHERE id = $1", [id]);
};


const createUser = ({ name, email, phone }) => {
    return pool.query(
        "INSERT INTO users (name, email, phone) VALUES ($1, $2, $3) RETURNING *",
        [name, email, phone]
    );
};

const updateUser = (id, { name, email, phone }) => {
    return pool.query(
        "UPDATE users SET name=$1, email=$2, phone=$3 WHERE id=$4 RETURNING *",
        [name, email, phone, id]
    );
};


const deleteUser = (id) => {
    return pool.query("DELETE FROM users WHERE id = $1", [id]);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
